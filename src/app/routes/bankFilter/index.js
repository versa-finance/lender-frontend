import React from 'react';
import {connect} from 'react-redux';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {Table} from 'reactstrap';
import IntlMessages from 'util/IntlMessages';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import {getBankFilterList, createBank, updateBank, deleteBank} from "actions";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from "react-fullpage-custom-loader";

class bankFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bank: {
                name: ''
            },
            submitText: 'submit',
            indexCount: 0,
            saveText: '',
            loading: true,
            disabledStatus: false
        }
    }


    componentDidMount(){
        console.log('ffhdss');
        this.props.getBankFilterList();
    }

    componentWillReceiveProps(newProps){
        this.setState({loading: newProps.bankSmsFilter.loading});

        if(this.state.saveText === 'create'){
            console.log(newProps.bankSmsFilter.bankSuccess.Message);
            ToastsStore.success(newProps.bankSmsFilter.bankSuccess.Message);
            this.props.bankSmsFilter.bankFilters.unshift(newProps.bankSmsFilter.bankSuccess.Data);
            this.toggle();
            this.setState({
                disabledStatus: false
            });
        }else if(this.state.saveText === 'update' ){
            ToastsStore.success(newProps.bankSmsFilter.bankSuccess.Message);
            this.props.bankSmsFilter.bankFilters[this.state.indexCount] = {
                id: newProps.bankSmsFilter.bankSuccess.Data.id,
                name: newProps.bankSmsFilter.bankSuccess.Data.name
            }
            this.toggle();
            this.setState({
                disabledStatus: false
            });

        }else if(this.state.saveText === 'delete'){
            ToastsStore.success(newProps.bankSmsFilter.bankSuccess.Message);
            this.props.bankSmsFilter.bankFilters.splice(this.state.indexCount, 1);
        }
    }

    submit(params) {
        if(params === 'cancel'){
            this.toggle();
        }else if((params === 'submit') && (this.state.submitText === 'submit')){
            if(this.state.bank.name !== ''){
                this.setState({
                    disabledStatus: true
                });
               this.props.createBank(this.state.bank);
            }else{
                this.setState({
                    ...this.state,
                    required: true
                })
                ToastsStore.error('Some required field* are empty');
            }
        }else if((params === 'submit') && (this.state.submitText === 'update')){
            if(this.state.bank.name !== '' ) {
                this.setState({
                    disabledStatus: true
                });
                this.props.updateBank(this.state.bank);
            }else {
                ToastsStore.error('Some required field* are empty');
            }
        }
    }

    toggle(params, index, id){
        switch (params) {
            case 'create':
                this.setState({
                    ...this.state,
                    modal: !this.state.modal,
                    bank: {
                        ...this.state.bank,
                        id: '',
                        name: '',
                        data_id: ''
                    },
                    saveText: 'create'
                });
                break;
            case 'edit':
                this.setState({
                    modal: !this.state.modal,
                    indexCount: index
                }, () => {
                    let data = this.props.bankSmsFilter.bankFilters[index];
                    this.setState({
                        ...this.state,
                        bank: {
                            data_id: data.id,
                            name: data.name
                        },
                        submitText: 'update',
                        saveText: 'update'
                    })
                });
                break;
            case 'delete':
                this.setState({
                    indexCount: index,
                    saveText: 'delete'

                })
                let data = {
                    data_id: id
                }
                console.log(data);
                this.props.deleteBank(data);
                break;
            default:
                this.setState({
                    modal: !this.state.modal
                });
        }
    };

    changeValue(e){
        this.setState({
            ...this.state,
            bank: {
                ...this.state.bank,
                [e.target.name]: e.target.value,
            }

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
                        Create Bank Filter</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} color={'white'}/>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className={'jr-card'}>
                                <div className="jr-card-header d-flex align-items-center">
                                    <h3 className="mb-0"><IntlMessages id="notification.title"/></h3>
                                    <div className="ml-3">
                                <span className="text-white badge badge-success">
                                    <IntlMessages id="sidebar.bank.sms.filter"/></span>
                                    </div>
                                </div>
                                {this.props.bankSmsFilter.bankFilters ?

                                    <div>
                                        <ReactTable
                                            data={this.props.bankSmsFilter.bankFilters}
                                            columns={[
                                                {
                                                    columns: [
                                                        {
                                                            Header: "S/N",
                                                            Cell: props => <span className='number'>{props.index + 1}</span>
                                                        },
                                                        {
                                                            Header: "Bank Name",
                                                            accessor: "name"
                                                        },
                                                        {
                                                            Header: "Action",
                                                            Cell: props => <div className={'actionBtn'}>
                                                                <div>
                                                                    <Button onClick={() =>this.toggle('edit', props.index, props.row._original.id)}
                                                                            color="primary" className="jr-btn jr-btn-label left">
                                                                        <i className="zmdi zmdi-edit zmdi-hc-fw"/>
                                                                        <span>Edit</span>
                                                                    </Button>
                                                                </div>
                                                                <div>
                                                                    <Button onClick={() =>this.toggle('delete', props.index, props.row._original.id)}
                                                                            color="danger" className="jr-btn jr-btn-label left">
                                                                        <i className="zmdi zmdi-delete zmdi-hc-fw"/>
                                                                        <span>Delete</span>
                                                                    </Button>
                                                                </div>
                                                            </div>
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
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={this.state.modal} toggle={() => this.toggle(null, null, null)} className={this.props.className}>
                        <ModalHeader toggle={()=>this.toggle(null, null, null)}>Bank Filter</ModalHeader>
                        <ModalBody>



                            <div className="form-group row">
                                <label htmlFor={'level'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Bank Name *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="level"
                                           placeholder="Bank Name" name={'name'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.bank.name}/>
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
        )
    }
}

const mapStateToProps = (state) => ({
    bankSmsFilter: state.bankFilter
})

export default connect(mapStateToProps, {getBankFilterList, createBank, updateBank, deleteBank})(bankFilter);