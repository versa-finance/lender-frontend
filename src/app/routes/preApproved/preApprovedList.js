import React from 'react';
import {connect} from 'react-redux';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {Table} from 'reactstrap';
import IntlMessages from 'util/IntlMessages';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import {getPreApprovedList, uploadPreApprovedList, updateBank, deletePreApprovedListItem} from "actions";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from "react-fullpage-custom-loader";
import Dropzone from "react-dropzone";
import {ExcelRenderer} from "react-excel-renderer";

class preApprovedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: {
                first_name: '',
                last_name: '',
                staff_id: '',
            },
            submitText: 'submit',
            indexCount: 0,
            saveText: '',
            loading: true,
            disabledStatus: false,
            accepted: [],
            rejected: [],
            excelRows: [],
            company_id: ''
        }
    }


    componentDidMount(){
        this.setState({company_id: this.props.match.params.id})
        this.props.getPreApprovedList({company_id: this.props.match.params.id});
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        console.log(newProps.companyData.approvedListStaffsSuccess)
        // companyData.approvedListStaffs
        this.setState({loading: newProps.companyData.loading});

        if(this.state.saveText === 'create'){
            console.log(newProps.companyData.approvedListStaffsSuccess.Message);
            ToastsStore.success(newProps.companyData.approvedListStaffsSuccess.Message);

            setTimeout(() => {
                location.reload();
            }, 1000)

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
            ToastsStore.success(newProps.companyData.approvedListStaffsSuccess.Message);
            setTimeout(() => {
                location.reload();
            }, 1000)        }
    }

    submit(params) {
        if(params === 'cancel'){
            this.toggle();
        }else if((params === 'submit') && (this.state.submitText === 'submit')){
            if(this.state.excelRows.length > 0){
                this.setState({
                    disabledStatus: true
                });

                const data = {excelRows: this.state.excelRows, company_id: this.state.company_id}

                this.props.uploadPreApprovedList(data);
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
                    let data = this.props.companyData.approvedListStaffs[index];
                    console.log('dattaa', data);
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
                console.log('data here', data);
                this.props.deletePreApprovedListItem(data);
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
                        Upload Pre-Approved List</Button>
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
                                {this.props.companyData.approvedListStaffs ?

                                    <div>
                                        <ReactTable
                                            data={this.props.companyData.approvedListStaffs}
                                            columns={[
                                                {
                                                    columns: [
                                                        {
                                                            Header: "S/N",
                                                            Cell: props => <span className='number'>{props.index + 1}</span>
                                                        },
                                                        {
                                                            Header: "First Name",
                                                            accessor: "first_name",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Last Name",
                                                            accessor: "last_name",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Phone Number",
                                                            accessor: "phone_number",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Email",
                                                            accessor: "staff_email",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Staff ID",
                                                            accessor: "staff_id",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Position",
                                                            accessor: "staff_position",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Action",
                                                            Cell: props => <div className={'actionBtn'}>
                                                                {/*<div>*/}
                                                                    {/*<i className="zmdi zmdi-edit"*/}
                                                                       {/*onClick={() =>this.toggle('edit', props.index, props.row._original.id)}*/}
                                                                       {/*style={{fontSize: '20px', cursor: 'pointer', color: 'blue'}}/>*/}
                                                                {/*</div>*/}
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
                        <ModalHeader toggle={()=>this.toggle(null, null, null)}>Upload file</ModalHeader>
                        <ModalBody>

                            <div className="form-group row">

                                <div className="col-xl-1 col-md-1 col-sm-1"/>

                                <div className="dropzone-card col-xl-10 col-md-10 col-sm-10">
                                    <div className="dropzone">
                                        <Dropzone
                                            accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                            onDrop={(accepted, rejected, event) => {
                                                // this.fileHandler.bind(e)
                                                console.log('event', event)
                                                let fileObj = event.target.files[0];

                                                //just pass the fileObj as parameter
                                                ExcelRenderer(fileObj, (err, resp) => {
                                                    if(err){
                                                        console.log('err', err);
                                                    }
                                                    else{
                                                        console.log('res', resp.rows)
                                                        this.setState({excelRows: resp.rows})
                                                    }
                                                });
                                                this.setState({accepted, rejected});
                                            }}
                                            style={{width: '100%',
                                                height: '300px',
                                                borderWidth: '2px',
                                                borderColor: 'rgb(102, 102, 102)',
                                                borderStyle: 'dashed',
                                                borderRadius: '5px'}}
                                        >
                                            <div style={{textAlign: 'center'}}>
                                                <p>Try dropping some files here, or click to select files to upload.</p>
                                                <p className="mb-0">Only excel files will be accepted</p>
                                            </div>
                                        </Dropzone>
                                    </div>
                                    <div className="dropzone-content" style={{textAlign: 'center'}}>
                                        <h2>File information</h2>
                                        {this.state.accepted.length > 0 && <ul className="upload-file-list">
                                            {
                                                this.state.accepted.map(f => <li style={{textColor: 'red'}} key={f.name}>{f.name} - {f.size} bytes</li>)
                                            }
                                        </ul>
                                        }
                                    </div>
                                </div>

                                <div className="col-xl-1 col-md-1 col-sm-1"/>

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
    companyData: state.preApprovedList
})

export default connect(mapStateToProps, {getPreApprovedList, uploadPreApprovedList, updateBank, deletePreApprovedListItem})(preApprovedList);