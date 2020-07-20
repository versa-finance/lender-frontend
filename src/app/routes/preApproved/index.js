import React from 'react';
import {connect} from 'react-redux';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {Table} from 'reactstrap';
import IntlMessages from 'util/IntlMessages';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import {getPreApprovedListCompany, createPreApprovedCompanyList, updatePreApprovedListCompanyItem, deletePreApprovedListCompanyItem, getBankFilterList} from "actions";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from "react-fullpage-custom-loader";

class preApproved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: {
                name: '',
                location: '',
                contact_no: '',
                contact_email: '',
                unique_id: 'LBT002'
            },
            submitText: 'submit',
            indexCount: 0,
            saveText: '',
            loading: true,
            disabledStatus: false,
        }
    }

    componentDidMount(){
        this.props.getPreApprovedListCompany();
        console.log('list', this.props.companyData.approvedListCompany)
    }

    componentWillReceiveProps(newProps){
        this.setState({loading: newProps.companyData.loading});

        if(this.state.saveText === 'create'){
            console.log(newProps.companyData.approvedListCompanySuccess.Message);
            ToastsStore.success(newProps.companyData.approvedListCompanySuccess.Message);
            this.props.companyData.approvedListCompany.unshift(newProps.companyData.approvedListCompanySuccess.Data);
            this.toggle();
            this.setState({
                disabledStatus: false
            });
        }else if(this.state.saveText === 'update' ){
            if(newProps.companyData.updateApprovedListMessage.StatusCode === 200){
                ToastsStore.success(newProps.companyData.updateApprovedListMessage.Message);
                setTimeout(() => {
                    location.reload();
                }, 1000)

                // this.props.companyData.approvedListCompany[this.state.indexCount] = {
                //     //     id: newProps.companyData.updateApprovedListMessage.Data.id,
                //     //     name: newProps.companyData.updateApprovedListMessage.Data.name
                // }
                // this.toggle();
                // this.setState({
                //     disabledStatus: false
                // });
            }

        }else if(this.state.saveText === 'delete'){
            ToastsStore.success(newProps.companyData.approvedListCompanySuccess.Message);
            this.props.companyData.approvedListCompany.splice(this.state.indexCount, 1);
        }
    }

    submit(params) {
        if(params === 'cancel'){
            this.toggle();
        }else if((params === 'submit') && (this.state.submitText === 'submit')){
            if(this.state.company.name !== ''){
                this.setState({
                    disabledStatus: true
                });
                // console.log(this.state.company)
               this.props.createPreApprovedCompanyList(this.state.company);
            }else{
                this.setState({
                    ...this.state,
                    required: true
                })
                ToastsStore.error('Required field (*) are empty');
            }
        }else if((params === 'submit') && (this.state.submitText === 'update')){
            if(this.state.company.name !== '' ) {
                this.setState({
                    disabledStatus: true
                });
                this.props.updatePreApprovedListCompanyItem(this.state.company);
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
                        ...this.state.company,
                        id: '',
                        name: '',
                        location: '',
                        contact_no: '',
                        contact_email: '',
                        unique_id: '',
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
                    let data = this.props.companyData.approvedListCompany[index];
                    this.setState({
                        ...this.state,
                        company: {
                            data_id: data.id,
                            name: data.name,
                            location: data.location,
                            contact_no: data.contact_no,
                            contact_email: data.contact_email,
                            unique_id: data.unique_id
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
                // console.log(data);
                this.props.deletePreApprovedListCompanyItem(data);
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
            company: {
                ...this.state.company,
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
                        Create Company Profile</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} color={'white'}/>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className={'jr-card'}>
                                <div className="jr-card-header d-flex align-items-center">
                                    <h3 className="mb-0"><IntlMessages id="notification.title"/></h3>
                                    <div className="ml-3">
                                <span className="text-white badge badge-success">
                                    <IntlMessages id="sidebar.preapproved.list"/></span>
                                    </div>
                                </div>
                                {this.props.companyData.approvedListCompany ?

                                    <div>
                                        <ReactTable
                                            // style={{cursor: 'pointer'}}
                                            data={this.props.companyData.approvedListCompany}
                                            columns={[
                                                {
                                                    columns: [
                                                        {
                                                            Header: "S/N",
                                                            Cell: props => <span className='number'>{props.index + 1}</span>
                                                        },
                                                        {
                                                            Header: "Company Name",
                                                            accessor: "name",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Contact Mail",
                                                            accessor: "contact_email",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Contact Number",
                                                            accessor: "contact_no",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Staff count",
                                                            accessor: "staff_count",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Action",
                                                            Cell: props => <div className={'actionBtn'}>
                                                                <div>
                                                                    <i className="zmdi zmdi-eye"
                                                                       onClick={() => this.redirectView(props.row._original.unique_id)}
                                                                       style={{fontSize: '20px', cursor: 'pointer', color: 'green'}}/>
                                                                </div>
                                                                <div>
                                                                    <i className="zmdi zmdi-edit"
                                                                       onClick={() =>this.toggle('edit', props.index, props.row._original.id)}
                                                                       style={{fontSize: '20px', cursor: 'pointer', color: 'blue'}}/>
                                                                </div>
                                                                <div>
                                                                    <i className="zmdi zmdi-delete"
                                                                       onClick={() =>this.toggle('delete', props.index, props.row._original.id)}
                                                                       style={{fontSize: '20px', cursor: 'pointer', color: 'red'}}/>
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
                                            // getTdProps={(state, rowInfo) => {
                                            //     return {
                                            //         onClick: (e, handleOriginal) => {
                                            //             this.redirectView(rowInfo.original.id);
                                            //
                                            //             if (handleOriginal) {
                                            //                 handleOriginal()
                                            //             }
                                            //         }
                                            //     }
                                            // }}
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
                        <ModalHeader toggle={()=>this.toggle(null, null, null)}>Company Data</ModalHeader>

                        <ModalBody>
                            <div className="form-group row">
                                <label htmlFor={'level'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Company Name *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="level"
                                           placeholder="Company Name" name={'name'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.company.name}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor={'level'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Contact Mail *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="level"
                                           placeholder="Contact Mail" name={'contact_email'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.company.contact_email}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor={'level'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Contact Number *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="level"
                                           placeholder="Contact Number" name={'contact_no'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.company.contact_no}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor={'level'}
                                       className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Company Location *</label>
                                <div className="col-xl-10 col-md-9 col-sm-8">
                                    <input type="text" className="form-control" id="level"
                                           placeholder="Company Location" name={'location'} onChange={(event) =>this.changeValue(event)}
                                           value={this.state.company.location}/>
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

    redirectView(id) {
        location.href = `#${this.props.match.url}/list/${id}`;
    }
}

const mapStateToProps = (state) => ({
    companyData: state.preApprovedList
})

export default connect(mapStateToProps, {getPreApprovedListCompany, getBankFilterList, createPreApprovedCompanyList,
    updatePreApprovedListCompanyItem, deletePreApprovedListCompanyItem})(preApproved);