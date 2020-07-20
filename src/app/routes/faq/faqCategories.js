import React from 'react';
import { connect } from 'react-redux';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from 'reactstrap';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import IntlMessages from 'util/IntlMessages';
import { getFAQCategories, createFaqCategory, updateFaqCategory } from "actions/FAQ";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from "react-fullpage-custom-loader";

class FaqCategories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            faqCategory: {
                title: ''
            },
            submitText: 'submit',
            indexCount: '',
            faqCategoryLength: 0,
            loading: true
        }
    }

    componentDidMount(){
        this.props.getFAQCategories();
    }

    componentWillReceiveProps(newProps){
        // console.log(newProps);
        this.setState({loading: newProps.faq.loading});

        if(newProps.faq.faqCategoryCreationMessage.StatusCode === 200){
            ToastsStore.success(newProps.faq.faqCategoryCreationMessage.Message);
            console.log(newProps.faq.faqCategoryCreationMessage.Data.id);
            this.props.faq.faqCategories.unshift({
                title: this.state.faqCategory.title,
                 id: newProps.faq.faqCategoryCreationMessage.Data.id
            })
            setTimeout(() => {
                location.reload();
            }, 1000)
        }
    }

    toggle(params, index, id){
        switch (params){
            case 'create':
                this.setState({
                    ...this.state,
                    modal: !this.state.modal,
                    faqCategory : {
                        ...this.state.faqCategory,
                        title: '',
                    },
                    submitText: 'submit'
                });
                break;
            case 'edit':
                console.log(index);
                console.log(id);
                this.setState({
                    modal: !this.state.modal,
                    indexCount: index
                }, () => {
                    this.props.faq.faqCategories.forEach((item) => {
                        if(item.id === id){
                            this.setState({
                                ...this.state,
                                faqCategory: {
                                    ...this.state.faqCategory,
                                    title: item.title,
                                    faq_category_id: item.id
                                },
                                submitText: 'update'
                            });
                        }
                    });
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
            faqCategory: {
                ...this.state.faqCategory,
                [e.target.name]: e.target.value,
            },
            required: false

        }, () => {
            console.log(this.state.faqCategory);
        })
    }


    submit(params) {
        if(params === 'cancel'){
            this.toggle();
        }else if((params === 'submit') && (this.state.submitText === 'submit')){
            if(this.state.faqCategory.title !== ''){

                this.props.createFaqCategory(this.state.faqCategory);


            }else{
                this.setState({
                    ...this.state,
                    required: true
                })
                ToastsStore.error('Some required field* are empty');
            }
        }else if((params === 'submit') && (this.state.submitText === 'update')){
            if(this.state.faqCategory.title !== '') {
                this.props.updateFaqCategory(this.state.faqCategory);
                console.log( this.props.faq.faqCategories);
                /*this.props.faq.faqCategories[this.state.indexCount] =  {
                    id: this.state.faqCategory.faq_category_id,
                    title: this.state.faqCategory.title
                }*/

            }else {
                ToastsStore.error('Some required field* are empty');
            }
        }
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
                            onClick={() =>this.toggle('create', null, null)}>
                        Create Faq Categories</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} color={'white'}/>

                    <div className={'faqContainer'}>
                        <div className="row">
                            <div className="col-12">
                                <div className="jr-card">

                                    <div>
                                        <ReactTable
                                            data={this.props.faq.faqCategories}
                                            columns={[
                                                {
                                                    columns: [
                                                        {
                                                            Header: "S/N",
                                                            Cell: props => <span className='number'>{props.index + 1}</span>                                                    },
                                                        {
                                                            Header: "Last Name",
                                                            accessor: "title"
                                                        },
                                                        {
                                                            Header: "Action",
                                                            Cell: props => <Button onClick={() =>this.toggle('edit', props.index, props.row._original.id)}
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
                    <Modal isOpen={this.state.modal} toggle={() => this.toggle(null, null, null)} className={this.props.className}>
                        <ModalHeader toggle={() => this.toggle(null, null, null)}>Create Faq</ModalHeader>
                        <ModalBody>
                            {/* {this.props.faq.faqCategoryCreationMessage !== {} ?
                            () => this.showToast.bind(this, this.props.faq.faqCategoryCreationMessage.Message) : ''
                        }*/}
                            {/*
                        {this.props.faq.faqCategoryCreationMessage !== {} ? <div className={'successCustom'}>{this.props.faq.faqCategoryCreationMessage.Message}</div> : ''}
*/}
                            {this.state.required ? <div className={'requiredField'}>All fields are required</div> : null}
                            <div className="form-group row">
                                <label htmlFor={'title'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Faq Category *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="title"
                                           placeholder="Title" name={'title'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.faqCategory.title}/>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={() =>this.submit('cancel')}> Cancel</Button>{' '}
                            <Button color="link" onClick={() => this.submit('submit')}>{this.state.submitText}</Button>
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
        )
    }
}

const mapStateToProps = (state) => ({
   faq: state.faq
});

export default connect(mapStateToProps, {getFAQCategories, createFaqCategory, updateFaqCategory})(FaqCategories);