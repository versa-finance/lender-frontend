import React from 'react';
import {connect} from 'react-redux';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {getSmsFilterList, createNetwork, updateNetwork, deleteNetwork} from "actions";
import {Table} from 'reactstrap';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import IntlMessages from 'util/IntlMessages';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from "react-fullpage-custom-loader";

class smsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            network: {
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
       this.props.getSmsFilterList();
    }


    componentWillReceiveProps(newProps){
        this.setState({loading: newProps.netWorkSmsFilter.loading});

        if(this.state.saveText === 'create'){
            ToastsStore.success(newProps.netWorkSmsFilter.networkSuccess.Message);
            this.props.netWorkSmsFilter.netWorkSms.unshift(newProps.netWorkSmsFilter.networkSuccess.Data);
            this.toggle();
            this.setState({
                disabledStatus: false
            });
        }else if(this.state.saveText === 'update' ){
            ToastsStore.success(newProps.netWorkSmsFilter.networkSuccess.Message);
            this.props.netWorkSmsFilter.netWorkSms[this.state.indexCount] = {
                id: newProps.netWorkSmsFilter.networkSuccess.Data.id,
                name: newProps.netWorkSmsFilter.networkSuccess.Data.name
            }
            this.toggle();
            this.setState({
                disabledStatus: false
            });

        }else if(this.state.saveText === 'delete'){
            ToastsStore.success(newProps.netWorkSmsFilter.networkSuccess.Message);
            this.props.netWorkSmsFilter.netWorkSms.splice(this.state.indexCount, 1);
         }
    }

    submit(params) {
        if(params === 'cancel'){
            this.toggle();
        }else if((params === 'submit') && (this.state.submitText === 'submit')){
            if(this.state.network.name !== ''){
                this.setState({
                    disabledStatus: true
                });
                this.props.createNetwork(this.state.network);
            }else{
                this.setState({
                    ...this.state,
                    required: true
                })
                ToastsStore.error('Some required field* are empty');
            }
        }else if((params === 'submit') && (this.state.submitText === 'update')){
            if(this.state.network.name !== '' ) {
                this.setState({
                    disabledStatus: true
                });
                this.props.updateNetwork(this.state.network);
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
                    network: {
                        ...this.state.network,
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
                    let data = this.props.netWorkSmsFilter.netWorkSms[index];
                    this.setState({
                        ...this.state,
                        network: {
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
                this.props.deleteNetwork(data);
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
            network: {
                ...this.state.network,
                [e.target.name]: e.target.value,
            }

        }, () => {
            console.log(this.state.network);
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
                        Create SMS Filter</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} color={'white'}/>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className={'jr-card'}>
                                <div className="jr-card-header d-flex align-items-center">
                                    <h3 className="mb-0"><IntlMessages id="notification.title"/></h3>
                                    <div className="ml-3">
                                <span className="text-white badge badge-success">
                                    <IntlMessages id="sidebar.sms.filter"/></span>
                                    </div>
                                </div>
                                {this.props.netWorkSmsFilter.netWorkSms ?
                                    <div>
                                        <ReactTable
                                            data={this.props.netWorkSmsFilter.netWorkSms}
                                            columns={[
                                                {
                                                    columns: [
                                                        {
                                                            Header: "S/N",
                                                            Cell: props => <span className='number'>{props.index + 1}</span>                                                    },
                                                        {
                                                            Header: "Sender ID",
                                                            accessor: "name",
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
                        <ModalHeader toggle={()=>this.toggle(null, null, null)}>SMS Filter</ModalHeader>
                        <ModalBody>



                            <div className="form-group row">
                                <label htmlFor={'level'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Network Name *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="level"
                                           placeholder="Network Name" name={'name'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.network.name}/>
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

    render() {
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
   netWorkSmsFilter: state.smsFilter
});

export default connect(mapStateToProps, {getSmsFilterList, createNetwork, updateNetwork, deleteNetwork})(smsFilter);