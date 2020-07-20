import React from 'react';
import {connect} from 'react-redux';
import CardBox from "components/CardBox";
import IntlMessages from "util/IntlMessages";
import LoanRequestDetailList from "app/routes/components/routes/list/LoanRequestDetailList";
import LoanRequestDecisionList from "app/routes/components/routes/list/LoanRequestDecisionList";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../assets/css/ReactTable.css"
import {ToastsStore} from "react-toasts";

class LoanRequestDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loan_repay_data: [],
        }
    }

    componentDidMount(){
            this.setState({loan_repay_data: this.isEmpty(this.props.loanDetail.saveLoanRequests) ? JSON.parse(localStorage.getItem('loanRequestList')).loan_repay : this.props.loanDetail.saveLoanRequests.loan_repay
            })

    }

    componentWillReceiveProps(newProps){
        if(newProps.loanDetail.approveLoanSuccessMessage.StatusCode === 200){
            this.setState({
                loanSuccessMessage: newProps.loanDetail.approveLoanSuccessMessage.Message
            }, () => {
                console.log(this.state.loanSuccessMessage);
            })

            setTimeout(() => {
                location.href = `#/app/request-loans`;
            }, 1000)
        }
    }

     isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };



    render(){
        return (
          <div className={'userDetail'}>
              <div className="row mb-md-4" style={{margin: 10}}>
                  <CardBox
                      styleName="col-lg-7 col-12"
                      cardStyle="p-0 overflow-hidden border-0"
                      heading={<IntlMessages id="text.loan.request.detail"/>}
                      headerOutside
                  >
                      <LoanRequestDetailList data={this.isEmpty(this.props.loanDetail.saveLoanRequests) ? JSON.parse(localStorage.getItem('loanRequestList')):  this.props.loanDetail.saveLoanRequests}/>
                  </CardBox>

                  <CardBox
                      styleName="col-lg-5 col-12"
                      cardStyle="p-0 overflow-hidden border-0"
                      heading={<IntlMessages id="text.loan.request.decision"/>}
                      headerOutside>
                      <LoanRequestDecisionList response={this.state.loanSuccessMessage}  data={this.isEmpty(this.props.loanDetail.saveLoanRequests) ?  JSON.parse(localStorage.getItem('loanRequestList')) : this.props.loanDetail.saveLoanRequests }/>
                  </CardBox>
              </div>

              <CardBox
                  styleName="col-lg-12 col-12"
                  cardStyle="p-0 overflow-hidden border-0"
                  heading={<IntlMessages id="text.loan.request.repayment"/>}
                  headerOutside
              >
                  <ReactTable
                      data={this.state.loan_repay_data}
                      columns={[
                          {
                              columns: [
                                  {
                                      Header: "S/N",
                                      Cell: props => <span className='number'>{props.index + 1}</span>
                                  },
                                  {
                                      Header: "Due Date",
                                      accessor: "pay_date"
                                  },
                                  {
                                      Header: "Amount",
                                      accessor: "pay_amount"
                                  },
                                  {
                                      Header: "Status",
                                      Cell: props => <span className='number'>{props.original.is_paid === "1" ? "Paid" :
                                          "Pending"}</span>
                                  },
                                  {
                                      Header: "On-Time Repayment",
                                      Cell: props => <span className='number'>{props.original.paid_on_time === "1" ? "Yes" :
                                          "No"}</span>
                                  },
                                  {
                                      Header: "Paid Date",
                                      accessor: "paid_date"
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
                      defaultPageSize={5}
                      className="-striped -highlight"
                  />

              </CardBox>
          </div>
        );
    }
}


const mapStateToProps = (state) => ({
    loanDetail: state.loanRequests
})



export default connect(mapStateToProps, null)(LoanRequestDetail);