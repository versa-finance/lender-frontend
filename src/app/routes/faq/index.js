import React from 'react';
import { connect } from 'react-redux';
import {Table} from 'reactstrap';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { getFAQ, createFaq, updateFaq, getFAQCategories} from "actions/FAQ";
import OrderTableCell from 'components/dashboard/eCommerce/OrderTableCell';
import IntlMessages from 'util/IntlMessages';
import { convertString } from "../../../shared/Methods";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from "react-fullpage-custom-loader";

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            faq: {
                title: "",
                content: "",
                faq_category: ""
            },
            required: false,
            submitText: 'submit',
            itemSearch: false,
            outerCount: '',
            innerCount: '',
            loading: true,
            disabledStatus: false
        };

        this.toggle = this.toggle.bind(this);
    }


    componentDidMount(){
        this.props.getFAQCategories();
        this.props.getFAQ();
    }

    componentWillReceiveProps(newProps){
        this.setState({loading: newProps.faq.loading});

        if(newProps.faq.faqCreationMessage.StatusCode === 200){
            ToastsStore.success(newProps.faq.faqCreationMessage.Message);

            setTimeout(() => {
                location.reload();
            }, 1000)
        }
    }

     submit(params) {
        if(params === 'cancel'){
            this.toggle();
        }else if((params === 'submit') && (this.state.submitText === 'submit')){

            if(this.state.faq.title !== '' || this.state.faq.content !== '' || this.state.faq.faq_category !== ''){
                this.setState({
                    disabledStatus: true
                });
              this.props.createFaq(this.state.faq);
              let indexOne = '';
              let indexTwo = '';
              let inarray = false;
              let otherarray = false;
              let indexfour = '';
              let keyCheck = [];
              let indexCheck = '';

              Object.keys(this.props.faq.faqItems).map((item) => {

                  this.props.faq.faqItems[item].map((ites, index) => {
                      if(ites.faq_category === this.state.faq.faq_category){
                          indexOne = item;
                          indexTwo = index;
                          inarray = true;
                          keyCheck.push(ites.faq_category);

                      }

                      if(this.state.faq.faq_category !== ites.faq_category){
                          keyCheck.push(ites.faq_category);
                      }
                  })
                  indexCheck = item;

              });


              if(!(keyCheck).includes(this.state.faq.faq_category)){
                    otherarray = true;
                  indexfour = Number(indexCheck) + 1;
              }

              if(inarray) {
                  let indexThree = indexTwo + 1;

                  this.props.faq.faqItems[indexOne][indexThree] = {
                      faq_title: this.state.faq.title,
                      content: this.state.faq.content,
                      faq_category: this.state.faq.faq_category,
                      faq_categories_title: this.props.faq.faqCategories.filter(ite => Number(ite.id) === Number(this.state.faq.faq_category))[0].title
                  }
              }

              if(otherarray){
                 this.props.faq.faqItems[indexfour] = [{
                      faq_title: this.state.faq.title,
                      content: this.state.faq.content,
                      faq_category: this.state.faq.faq_category,
                      faq_categories_title: this.props.faq.faqCategories.filter(ite => Number(ite.id) === Number(this.state.faq.faq_category))[0].title
                  }]
              }



            }else{
            this.setState({
                ...this.state,
                required: true
            });
                ToastsStore.error('Some required field* are empty');
            }
        }else if((params === 'submit') && (this.state.submitText === 'update')){
            if(this.state.faq.title !== '' || this.state.faq.content !== '' || this.state.faq.faq_category !== '') {
                this.setState({
                    disabledStatus: true
                });
                this.props.updateFaq(this.state.faq);
                this.props.faq.faqItems[this.state.outerCount][this.state.innerCount] = {
                    faq_title: this.state.faq.title,
                    content: this.state.faq.content,
                    faq_category: this.state.faq.faq_category,
                    faq_categories_title: this.props.faq.faqCategories.filter(ite => Number(ite.id) === Number(this.state.faq.faq_category))[0].title
                }
            }else{
                ToastsStore.error('Some required field* are empty');
            }
        }

    }


    toggle(params, index, title, cat, ind){
        switch (params){
            case 'create':
                this.setState({
                    ...this.state,
                    modal: !this.state.modal,
                    faq : {
                        ...this.state.faq,
                        title: '',
                        content: '',
                        faq_id: '',
                        faq_category: ''
                    },
                    submitText: 'submit'
                });
                break;
            case 'edit':

               this.setState({
                    modal: !this.state.modal
                }, () => {
                   Object.keys(this.props.faq.faqItems).map((item, ind) => {
                       // console.log(item[1]);
                   });
                    this.setState({
                        ...this.state,
                        faq: {
                            ...this.state.faq,
                            title: this.props.faq.faqItems[cat][index].faq_title,
                            content: this.props.faq.faqItems[cat][index].content,
                            faq_categories_title: this.props.faq.faqItems[cat][index].faq_categories_title,
                            faq_category: this.props.faq.faqItems[cat][index].faq_category,
                            faq_id: this.props.faq.faqItems[cat][index].id
                        },
                        submitText: 'update',
                       outerCount: cat,
                        innerCount: index
                    })
                });
                break;
            default:
                this.setState({
                    modal: !this.state.modal
                });
        }

    }

    changeValue(e){
        this.setState({
            ...this.state,
            faq: {
                ...this.state.faq,
                [e.target.name]: e.target.value,
            },
            required: false

        }, () => {
            console.log(this.state.faq);
        })
    }


    dataChange(){

            return (
              <div>
                  {Object.keys(this.props.faq.faqItems).map((item, index) => {
                      return (
                          <div key={index}>
                              <div className="row">
                                  <div className="col-12">
                                      <div className="jr-card">
                                          <div className="jr-card-header d-flex align-items-center">
                                              <h3 className="mb-0"><IntlMessages id="faq.category"/></h3>
                                              <div className="ml-3">
                                <span className="text-white badge badge-success">
                                    <h4 className={'m-0'}>{this.props.faq.faqItems[item][0].faq_categories_title}</h4></span>
                                              </div>
                                          </div>

                                  <div>
                                      <ReactTable
                                          data={this.props.faq.faqItems[item]}
                                          columns={[
                                              {
                                                  columns: [
                                                      {
                                                          Header: "S/N",
                                                          Cell: props => <span className='number'>{props.index + 1}</span>
                                                      },
                                                      {
                                                          Header: "Title",
                                                          accessor: "faq_title"
                                                      },
                                                      {
                                                          Header: "Content",
                                                          accessor: "content"
                                                      },
                                                      {
                                                          Header: "Action",
                                                          Cell: props => <Button onClick={() =>this.toggle('edit', props.index, props.row._original.faq_title ,item, index)}
                                                                                 color="primary" className="jr-btn jr-btn-label left">
                                                                              <i className="zmdi zmdi-edit zmdi-hc-fw"/>
                                                                              <span>Edit</span>
                                                                          </Button>
                                                      }
                                                  ]
                                              }
                                          ]}
                                          defaultSorted={[
                                              {
                                                  id: "id",
                                                  desc: false
                                              }
                                          ]}
                                          defaultPageSize={5}
                                          className="-striped -highlight"
                                      />
                                  </div>
                              </div>
                          </div>
                           </div>
                       </div>
                      )
                  })}

              </div>
            );
    }


    displayData(loading)
    {
        if(loading)
        {
            return <CustomLoader loaderType="ball-scale-ripple-multiple" color="#0066f5" wrapperBackgroundColor="#f4f4f4"
                                 sentences={[]}/>
        }
        else
        {
            return (
                <div>
                    <Button className="jr-btn btn-primary text-white mb-3" color="primary" style={{backgroundColor: '#0066f5'}}
                            onClick={() =>this.toggle('create', null, null, null)}>
                        Create Faq</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} color={'white'}/>



                    {this.dataChange()}


                    <Modal isOpen={this.state.modal} toggle={() => this.toggle()} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Create Faq</ModalHeader>
                        <ModalBody>

                            {this.state.required ? <div className={'requiredField'}>All fields are required</div> : null}
                            <div className="form-group row">
                                <label htmlFor={'title'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Title *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="title"
                                           placeholder="Title" name={'title'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.faq.title}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor={'content'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Content *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="content"
                                           placeholder="Content" name={'content'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.faq.content}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor={'faqs'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Faq Category *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <select className="form-control" name={'faq_category'} onChange={(event) =>this.changeValue(event)} value={this.state.faq.faq_category}>
                                        <option value={''}>--Please Select--</option>
                                        {this.props.faq.faqCategories.map((data) => {
                                            return (
                                                <option value={data.id}  key={data.id}>{data.title}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={() =>this.submit('cancel')}> Cancel</Button>{' '}
                            <Button color="link" disabled={this.state.disabledStatus} onClick={() => this.submit('submit')}>{this.state.submitText}</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            );
        }
    }


    render(){
        return (
            <div className={'faqMainContainer'}>
                {
                    this.displayData(this.state.loading)
                }
            </div>
               );
    }
}

const mapStateToProps = (state) => ({
    faq: state.faq
});


export default connect(mapStateToProps, {getFAQ, createFaq, updateFaq, getFAQCategories})(FAQ);