import React from 'react';
import { connect } from 'react-redux';
import IntlMessages from 'util/IntlMessages';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from 'react-fullpage-custom-loader'
import {getLogs} from "actions";

class Logs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            showData: false,
            SN: 0,
            loading: true
        }
    }

    componentDidMount(){
        this.props.getLogs();
        console.log('this.props.getLogs()', this.props.getLogs())
    }

    componentWillReceiveProps(newProps) {
        this.setState({loading: newProps.log.loading})
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
                <div className={'faqContainer'}>
                    <div className="row">
                        <div className="col-12">
                            <div className="jr-card">
                                <div className="jr-card-header d-flex align-items-center">
                                    <h3 className="mb-0"><IntlMessages id="notification.title"/></h3>
                                    <div className="ml-3">
                                        <span className="text-white badge badge-success"><IntlMessages id="sidebar.system.logs"/></span>
                                    </div>
                                </div>
                                <div>
                                    <ReactTable
                                        style={{cursor: 'pointer'}}
                                        data={this.props.log.logsData.success.Data}
                                        columns={[
                                            {
                                                columns: [
                                                    {
                                                        Header: "S/N",
                                                        Cell: props => <span className='number'>{props.index + 1}</span>,
                                                    },
                                                    {
                                                        Header: "Names",
                                                        Cell: props => <span className='number'>{props.row._original.last_name} {props.row._original.other_names}</span>,
                                                        accessor: "last_name",
                                                        filterable: true
                                                    },
                                                    {
                                                        Header: "User Category",
                                                        accessor: "user_category",
                                                        filterable: true
                                                    },
                                                    {
                                                        Header: "Module",
                                                        accessor: "module",
                                                        filterable: true
                                                    },
                                                    {
                                                        Header: "Body",
                                                        accessor: "body",
                                                        filterable: true
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

    redirectView(phone_number) {
        location.href = `#${this.props.match.url}/${phone_number}`;
    }
}

const mapStateToProps = (state) => ({
    log: state.logs
})



export default connect(mapStateToProps, {getLogs})(Logs);