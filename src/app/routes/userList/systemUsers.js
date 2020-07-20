import React from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {getSystemUsersList, createSystemUsers, updateSystemUsers, deleteNetwork} from "actions";
import {Table} from 'reactstrap';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import IntlMessages from 'util/IntlMessages';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from "react-fullpage-custom-loader";

class systemUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {
                last_name: '',
                other_names: '',
                phone_number: '',
                user_category: '',
                password: '',
            },
            submitText: 'submit',
            indexCount: 0,
            saveText: '',
            loading: true,
            disabledStatus: false
        }
    }

    componentDidMount(){
        this.props.getSystemUsersList();
    }


    componentWillReceiveProps(newProps){
        console.log(newProps)
        this.setState({loading: newProps.users.loading});

        if(this.state.saveText === 'create'){
            ToastsStore.success(newProps.users.systemUsersSuccess.Message);

            setTimeout(() => {
                location.reload();
            }, 1000)

        }else if(this.state.saveText === 'update' ){
            ToastsStore.success(newProps.users.systemUsersSuccess.Message);

            setTimeout(() => {
                location.reload();
            }, 1000)
        }
    }

    submit(params) {
        if(params === 'cancel'){
            this.toggle();
        }else if((params === 'submit') && (this.state.submitText === 'submit')){
            if(this.state.users.last_name !== '' || this.state.users.other_names !== '' || this.state.users.phone_number !== ''
            || this.state.users.user_category !== '' || this.state.users.password !== ''){
                this.setState({
                    disabledStatus: true
                });

                const data = {
                    last_name: this.state.users.last_name,
                    other_names: this.state.users.other_names,
                    phone_number: this.state.users.phone_number,
                    user_category: this.state.users.user_category,
                    password: this.state.users.password,
                }
                this.props.createSystemUsers(data);
            }else{
                this.setState({
                    ...this.state,
                    required: true
                })
                ToastsStore.error('Some required field* are empty');
            }
        }else if((params === 'submit') && (this.state.submitText === 'update')){
            if(this.state.users.last_name !== '' || this.state.users.other_names !== '' || this.state.users.user_category !== '') {
                this.setState({
                    disabledStatus: true
                });
                this.props.updateSystemUsers(this.state.users);
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
                    users: {
                        ...this.state.users,
                        id: '',
                        last_name: '',
                        other_names: '',
                        phone_number: '',
                        user_category: '',
                        password: '',
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
                    let data = this.props.users.systemUsers[index];
                    this.setState({
                        ...this.state,
                        users: {
                            data_id: data.id,
                            last_name: data.last_name,
                            other_names: data.other_names,
                            phone_number: data.phone_number,
                            user_category: data.user_category,
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
            users: {
                ...this.state.users,
                [e.target.name]: e.target.value,
            }

        }, () => {
            console.log(this.state.users);
        })
    }

    modalData()
    {
        console.log('text', this.state.saveText)
        if(this.state.saveText === 'create')
        {
            return (
                <div>
                    <div className="form-group row">
                        <label htmlFor={'last_name'}
                               className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Last Name *</label>
                        <div className="col-xl-10 col-md-9 col-sm-8">
                            <input type="text" className="form-control" id="last_name"
                                   placeholder="Last Name" name={'last_name'} onChange={(event) =>this.changeValue(event)}
                                   value={this.state.users.last_name}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor={'other_names'}
                               className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Other Names *</label>
                        <div className="col-xl-10 col-md-9 col-sm-8">
                            <input type="text" className="form-control" id="other_names"
                                   placeholder="Other Names" name={'other_names'} onChange={(event) =>this.changeValue(event)}
                                   value={this.state.users.other_names}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor={'phone_number'}
                               className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Phone Number *</label>
                        <div className="col-xl-10 col-md-9 col-sm-8">
                            <input type="text" className="form-control" id="phone_number"
                                   placeholder="Phone Number" name={'phone_number'} onChange={(event) =>this.changeValue(event)}
                                   value={this.state.users.phone_number}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor={'user_category'}
                               className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>User Category *</label>
                        <div className="col-xl-10 col-md-9 col-sm-8">
                            <FormGroup>
                                <Input type="select" name={'user_category'} id="exampleSelect" onChange={(event) =>this.changeValue(event)}
                                       value={this.state.users.user_category}>
                                    <option>Select user category</option>
                                    <option value="Admin">Admin</option>
                                    <option value="SuperAdmin">Super Admin</option>
                                    <option value="User">User</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor={'password'}
                               className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Default Password *</label>
                        <div className="col-xl-10 col-md-9 col-sm-8">
                            <input type="password" className="form-control" id="password"
                                   placeholder="Default Password" name={'password'} onChange={(event) =>this.changeValue(event)}
                                   value={this.state.users.password}/>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.state.saveText === 'update')
        {
            return (
                <div>
                    <div className="form-group row">
                        <label htmlFor={'last_name'}
                               className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Last Name *</label>
                        <div className="col-xl-10 col-md-9 col-sm-8">
                            <input type="text" className="form-control" id="last_name"
                                   placeholder="Last Name" name={'last_name'} onChange={(event) =>this.changeValue(event)}
                                   value={this.state.users.last_name}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor={'other_names'}
                               className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Other Names *</label>
                        <div className="col-xl-10 col-md-9 col-sm-8">
                            <input type="text" className="form-control" id="other_names"
                                   placeholder="Other Names" name={'other_names'} onChange={(event) =>this.changeValue(event)}
                                   value={this.state.users.other_names}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor={'phone_number'}
                               className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>Phone Number *</label>
                        <div className="col-xl-10 col-md-9 col-sm-8">
                            <input type="text" className="form-control" id="phone_number" disabled
                                   placeholder="Phone Number" name={'phone_number'} onChange={(event) =>this.changeValue(event)}
                                   value={this.state.users.phone_number}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor={'user_category'}
                               className="col-xl-2 col-md-3 col-sm-2 control-label" style={{alignSelf: 'center'}}>User Category *</label>
                        <div className="col-xl-10 col-md-9 col-sm-8">
                            <FormGroup>
                                <Input type="select" name={'user_category'} id="exampleSelect" onChange={(event) =>this.changeValue(event)}
                                       value={this.state.users.user_category}>
                                    <option>Select user category</option>
                                    <option value="Admin">Admin</option>
                                    <option value="SuperAdmin">Super Admin</option>
                                    <option value="User">User</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            );
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
                        Create System User</Button>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} color={'white'}/>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className={'jr-card'}>
                                <div className="jr-card-header d-flex align-items-center">
                                    <h3 className="mb-0"><IntlMessages id="notification.title"/></h3>
                                    <div className="ml-3">
                                <span className="text-white badge badge-success">
                                    <IntlMessages id="sidebar.system.users"/></span>
                                    </div>
                                </div>
                                {this.props.users.systemUsers ?
                                    <div>
                                        <ReactTable
                                            data={this.props.users.systemUsers}
                                            columns={[
                                                {
                                                    columns: [
                                                        {
                                                            Header: "S/N",
                                                            Cell: props => <span className='number'>{props.index + 1}</span>                                                    },
                                                        {
                                                            Header: "Last Name",
                                                            accessor: "last_name",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Other Names",
                                                            accessor: "other_names",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "User Category",
                                                            accessor: "user_category",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Phone Number",
                                                            accessor: "phone_number",
                                                            filterable: true
                                                        },
                                                        {
                                                            Header: "Action",
                                                            Cell: props => <div className={'actionBtn'}>
                                                                <div>
                                                                    <i className="zmdi zmdi-edit"
                                                                       onClick={() =>this.toggle('edit', props.index, props.row._original.id)}
                                                                       style={{fontSize: '20px', cursor: 'pointer', color: 'blue'}}/>
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
                        <ModalHeader toggle={()=>this.toggle(null, null, null)}>System User</ModalHeader>
                        <ModalBody>

                            {
                                this.modalData()
                            }

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
    users: state.systemsUsers
});

export default connect(mapStateToProps, {getSystemUsersList, createSystemUsers, updateSystemUsers, deleteNetwork})(systemUsers);