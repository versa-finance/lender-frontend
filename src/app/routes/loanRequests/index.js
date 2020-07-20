import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Table} from 'reactstrap';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import {getLoanRequests, approveLoan, disapproveLoan, LoanRequestSave} from "actions/LoanRequests";
import IntlMessages from 'util/IntlMessages';
import Spinner from 'components/Spinner';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import CustomLoader from "react-fullpage-custom-loader";

class loanRequests extends React.Component {

    state = {
        loading: true
    };

    componentDidMount(){
      this.props.getLoanRequests();
      console.log("loans", this.props.requestLoans.loanRequests)
    }

    componentWillReceiveProps(newProps){
        this.setState({loading: newProps.requestLoans.loading});

        if(newProps.requestLoans.approveLoanSuccessMessage.StatusCode === 200){
            ToastsStore.success(newProps.requestLoans.approveLoanSuccessMessage.Message);
        }
    }

    redirectView(id, index) {
        localStorage.setItem('loanRequestList', JSON.stringify(this.props.requestLoans.loanRequests[index]));
        this.props.LoanRequestSave(this.props.requestLoans.loanRequests[index]);
        location.href = `#${this.props.match.url}/detail/${id}`;
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
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} color={'white'}/>

                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className={'jr-card'}>
                                <div className="jr-card-header d-flex align-items-center">
                                    <h3 className="mb-0"><IntlMessages id="notification.title"/></h3>
                                    <div className="ml-3">
                                        <span className="text-white badge badge-success"><IntlMessages id="text.loan.request"/></span>
                                    </div>
                                </div>

                                <div>
                                    <ReactTable
                                        style={{cursor: 'pointer'}}
                                        data={this.props.requestLoans.loanRequests}
                                        columns={[
                                            {
                                                columns: [
                                                    {
                                                        Header: "S/N",
                                                        Cell: props => <span className='number'>{props.index + 1}</span>
                                                    },
                                                    {
                                                        Header: "Loan Amount",
                                                        accessor: "loan_amount",
                                                        filterable: true
                                                    },
                                                    {
                                                        Header: "Payment Terms",
                                                        accessor: "loan_payment_terms",
                                                        filterable: true
                                                    },
                                                    {
                                                        Header: "Level",
                                                        accessor: "loan_level",
                                                        filterable: true
                                                    },
                                                    {
                                                        Header: "Platform",
                                                        accessor: "platform",
                                                        Cell: props => props.original.platform === "android" ? <i className="zmdi zmdi-android cursorChange"/> :
                                                            <i className="zmdi zmdi-apple cursorChange"/>,
                                                        filterable: true
                                                    },
                                                    {
                                                        Header: "Approval Status",
                                                        accessor: "is_approved",
                                                        Cell: props => <span className='number'>{ props.original.is_approved === "1" ? "Approved" : props.original.is_approved === "-1" ? "Disapproved" : "Pending"}</span>,
                                                        filterable: true
                                                    },
                                                    {
                                                        Header: "On-Time Repayment",
                                                        Cell: props => <span className='number'>{props.original.paid_on_time === "1" ? "Yes" :
                                                            "No"}</span>,
                                                    },
                                                    {
                                                        Header: "Requested Date",
                                                        accessor: "created_at",
                                                    },
                                                ]
                                            }
                                        ]}
                                        defaultSorted={[
                                            {
                                                id: "age",
                                                desc: false
                                            }
                                        ]}
                                        getTdProps={(state, rowInfo) => {
                                            return {
                                                onClick: (e, handleOriginal) => {
                                                    this.redirectView(rowInfo.original.id, rowInfo.index);

                                                    if (handleOriginal) {
                                                        handleOriginal()
                                                    }
                                                }
                                            }
                                        }}
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
            <div className={'loanContainer'}>
                {
                    this.displayData(this.state.loading)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    requestLoans: state.loanRequests
})


export default connect(mapStateToProps, {getLoanRequests, approveLoan, disapproveLoan, LoanRequestSave})(loanRequests);