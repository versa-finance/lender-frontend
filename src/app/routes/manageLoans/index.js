import React from 'react';
import { connect } from 'react-redux';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {Table} from 'reactstrap';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { getLoans, createLoans, updateLoans, deleteLoans, approveLoan, disapproveLoan } from 'actions/ManageLoans';
import IntlMessages from 'util/IntlMessages';
import Spinner from 'components/Spinner';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from "react-fullpage-custom-loader";

class manageLoans extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            loan: {
                level: "",
                duration: "",
                amount: "",
                interest_rate: ""
            },
            required: false,
            submitText: 'submit',
            indexCount: '',
            loading: true,
            disabledStatus: false
        }
    }

    componentDidMount(){
        this.props.getLoans();
    }

    componentWillReceiveProps(newProps){
        this.setState({loading: newProps.loans.loading});
        if(newProps.loans.loanCreateMessage.StatusCode === 200){
            ToastsStore.success(newProps.loans.loanCreateMessage.Message);
            setTimeout(() => {
                location.reload();
            }, 1000)
        }

        if(newProps.loans.loanDeletionMessage.StatusCode === 200){
            ToastsStore.success(newProps.loans.loanDeletionMessage.Message);

        }
    }

    toggle(params, index, id){
        switch (params){
            case 'create':
                this.setState({
                    ...this.state,
                    modal: !this.state.modal,
                    loan : {
                        ...this.state.loan,
                        level: '',
                        duration: '',
                        amount: '',
                        interest_rate: ''
                    },
                    submitText: 'submit'
                });
                break;
            case 'edit':
                this.setState({
                    modal: !this.state.modal,
                    indexCount: index
                }, () => {
                    this.props.loans.loans.forEach((item) => {
                       if(item.id === id){
                           console.log(item);
                           this.setState({
                               ...this.state,
                               loan: {
                                   ...this.state.loan,
                                   level: item.level,
                                   loan_id: item.id,
                                   duration: item.duration,
                                   amount: item.amount,
                                   interest_rate: item.interest_rate
                               },
                               submitText: 'update'
                           }, () => {
                               console.log(this.state);
                           });
                       }
                    });
                });
                break;
            case 'delete':
                  let data = {
                      loan_id: id
                  }
                  console.log(data);
                  this.props.deleteLoans(data, index, id);
                break;
            case 'approveLoan':
                let datas  = {
                    request_id: id
                }
                this.props.approveLoan(datas);
                break;
            case 'disapproveLoan':
                console.log(id);
                /*let disapprove  = {
                    request_id: id
                }
                this.props.disapproveLoan(disapprove);*/
                break;
            default:
                this.setState({
                    modal: !this.state.modal
                });
        }

    }

    submit(params) {
        if(params === 'cancel'){
            this.toggle();
        }else if((params === 'submit') && (this.state.submitText === 'submit')){
            if(this.state.loan.level !== '' || this.state.loan.amount !== '' || this.state.loan.interest_rate !== '' || this.state.loan.duration !== ''){
                this.setState({
                    disabledStatus: true
                });
                this.props.createLoans(this.state.loan);

            }else{
                this.setState({
                    ...this.state,
                    required: true
                })
                ToastsStore.error('Some required field* are empty');
            }
        }else if((params === 'submit') && (this.state.submitText === 'update')){
            if(this.state.loan.level !== '' || this.state.loan.duration !== '' || this.state.loan.interest_rate !== '' || this.state.loan.amount !== '' ) {
                this.setState({
                    disabledStatus: true
                });
                this.props.updateLoans(this.state.loan);
                this.props.loans.loans[this.state.indexCount] = {
                    payment_terms: this.props.loans.loans[this.state.indexCount].payment_terms,
                    interest_rate: this.state.loan.interest_rate,
                    amount: this.state.loan.amount,
                    duration: this.state.loan.duration,
                    level: this.state.loan.level
                }
            }else {
                ToastsStore.error('Some required field* are empty');
            }
        }

    }

    changeValue(e){
        this.setState({
            ...this.state,
            loan: {
                ...this.state.loan,
                [e.target.name]: e.target.value,
            },
            required: false

        }, () => {
            console.log(this.state.loan);
        })
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
                        Create Loans</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} color={'white'}/>


                    <div className="row">
                        <div className="col-12">
                            <div className="jr-card">
                                <div className="jr-card-header d-flex align-items-center">
                                    <h3 className="mb-0"><IntlMessages id="notification.title"/></h3>
                                    <div className="ml-3">
                                <span className="text-white badge badge-success">
                                    <IntlMessages id="sidebar.manage.loans"/></span>
                                    </div>
                                </div>

                                {this.props.loans.loans ?


                                    <div>
                                        <ReactTable
                                            data={this.props.loans.loans}
                                            columns={[
                                                {
                                                    columns: [
                                                        {
                                                            Header: "S/N",
                                                            Cell: props => <span className='number'>{props.index + 1}</span>                                                    },
                                                        {
                                                            Header: "Payment Terms",
                                                            accessor: "payment_terms",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Interest rate (%)",
                                                            accessor: "interest_rate",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Amount (N)",
                                                            accessor: "amount",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Level",
                                                            accessor: "level",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Update",
                                                            Cell: props => <div className={'actionBtn'}>
                                                                <div>
                                                                    <Button onClick={() =>this.toggle('edit', props.index, props.row._original.id)}
                                                                            color="primary" className="jr-btn jr-btn-label left">
                                                                        <i className="zmdi zmdi-edit zmdi-hc-fw"/>
                                                                        <span>Edit</span>
                                                                    </Button>
                                                                </div>
                                                            </div>

                                                        },
                                                        {
                                                            Header: "Delete",
                                                            Cell: props => <div className={'actionBtn'}>
                                                                <div>
                                                                    <Button onClick={() =>this.toggle('delete', props.index, props.row._original.id)}
                                                                            color="danger" className="jr-btn jr-btn-label left">
                                                                        <i className="zmdi zmdi-delete zmdi-hc-fw"/>
                                                                        <span>Delete</span>
                                                                    </Button>
                                                                </div>
                                                            </div>

                                                        },
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
                                    : <div className={'mySpin'}><Spinner/></div>}


                            </div>
                        </div>
                    </div>

                    <Modal isOpen={this.state.modal} toggle={() => this.toggle(null, null, null)} className={this.props.className}>
                        <ModalHeader toggle={()=>this.toggle(null, null, null)}>Create Loans</ModalHeader>
                        <ModalBody>
                            {/*
                        {this.props.loans.loanCreateMessage !== {} ? <div className={'successCustom'}>{this.props.loans.loanCreateMessage.Message}</div> : ''}
*/}
                            {this.state.required ? <div className={'requiredField'}>All fields are required</div> : null}

                            <div className="form-group row">
                                <label htmlFor={'level'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Level *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="level"
                                           placeholder="Level" name={'level'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.loan.level}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor={'duration'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Duration *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" name={'duration'}  id="duration" placeholder="Duration"
                                           onChange={(event) =>this.changeValue(event)} className="form-control"
                                           value={this.state.loan.duration}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor={'amount'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Amount *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" name={'amount'}  id="amount" placeholder="Amount"
                                           onChange={(event) =>this.changeValue(event)} className="form-control"
                                           value={this.state.loan.amount}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor={'interest_rate'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Interest rate *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" name={'interest_rate'}  id="interest_rate" placeholder="Interest rate"
                                           onChange={(event) =>this.changeValue(event)} className="form-control"
                                           value={this.state.loan.interest_rate}/>
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
            <div className={'loanContainer'}>
                {
                    this.displayData(this.state.loading)
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
   loans: state.manageLoans
});

export default connect(mapStateToProps, {getLoans, createLoans, updateLoans, deleteLoans, approveLoan, disapproveLoan})(manageLoans);