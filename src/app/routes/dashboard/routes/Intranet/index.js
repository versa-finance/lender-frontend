import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import CardBox from "components/CardBox";
import LoanRequestsPieChart from "app/routes/charts/routes/pie/Components/LoanRequestsPieChart";
import LoanRepaysPieChart from "app/routes/charts/routes/pie/Components/LoanRepaysPieChart";
import {connect} from "react-redux";
import {getDashboardDataSuccessList} from "actions";
import CustomLoader from "react-fullpage-custom-loader";
import {projects, recentList} from '../Intranet/data';
import RecentActivities from "components/dashboard/Common/RecentActivities";
import UserProfileCard from "components/dashboard/Common/userProfileCard";
import CardHeader from "components/dashboard/Common/CardHeader";
import UserDetailTable from "components/dashboard/Common/UserDetailTable";
import {connections} from "app/routes/dashboard/routes/data";

class Intranet extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            dashboardData: {}
        }
    }

    componentDidMount(){
        this.props.getDashboardDataSuccessList();
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps.dashboardData);
        this.setState({loading: newProps.dashboardData.loading, dashboardData: newProps.dashboardData.dashboardData});
    }

    displayData(loading)
    {
        if (loading)
        {
            return <CustomLoader loaderType="ball-scale-ripple-multiple" color="#0066f5"
                                 wrapperBackgroundColor="#f4f4f4"
                                 sentences={[]}/>
        }
        else
        {
            const logs = this.state.dashboardData.logs;
            return (
                <div className="dashboard animated slideInUpTiny animation-duration-3">
                    <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard.intranet"/>}/>

                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="card text-center">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <span className="badge badge-secondary"><IntlMessages id="dashboard.users"/></span>
                                </div>
                                <div className="stack-order  py-4 px-2">
                                    <h1 className="chart-f30">{this.state.dashboardData.users}</h1>
                                    <span className="h5 text-muted"><IntlMessages id="dashboard.totalUsers"/></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-12">
                            <div className="card  text-center">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <span className="badge badge-primary"><IntlMessages id="dashboard.loan.repayment"/></span>
                                </div>
                                <div className="row col-with-divider py-4 px-2">
                                    <div className="col-6">
                                        <div className="stack-order">
                                            <span className="h3 text-success"><h1 className="chart-f30">
                                                {this.state.dashboardData.fully_paid_loan}</h1></span>
                                            <span className="h5 text-muted"><IntlMessages id="dashboard.loan.full.repayment"/></span>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="stack-order">
                                            <span className="h3 text-danger"><h1 className="chart-f30">
                                                {this.state.dashboardData.not_fully_paid_loan}</h1></span>
                                            <span className="h5 text-muted"><IntlMessages id="dashboard.loan.part.repayment"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-12">
                            <div className="card  text-center">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <span className="badge badge-primary"><IntlMessages id="dashboard.loan.request"/></span>
                                </div>
                                <div className="row col-with-divider py-4 px-2">
                                    <div className="col-4">
                                        <div className="stack-order">
                                            <span className="h3"><h1 className="chart-f30">
                                                {this.state.dashboardData.pending_loan_requests}</h1></span>
                                            <span className="h5 text-muted"><IntlMessages id="dashboard.loan.pending.requests"/></span>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="stack-order">
                                            <span className="h3 text-success"><h1 className="chart-f30">
                                                {this.state.dashboardData.approved_loan_requests}</h1></span>
                                            <span className="h5 text-muted"><IntlMessages id="dashboard.loan.approved.requests"/></span>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="stack-order">
                                            <span className="h3 text-danger"><h1 className="chart-f30">
                                                {this.state.dashboardData.declined_loan_requests}</h1></span>
                                            <span className="h5 text-muted"><IntlMessages id="dashboard.loan.declined.requests"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <CardBox heading="Loan Requests Chart">
                            <LoanRequestsPieChart data={this.state.dashboardData}/>
                        </CardBox>
                        <CardBox heading="Loan Repay Chart">
                            <LoanRepaysPieChart data={this.state.dashboardData}/>
                        </CardBox>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-12">
                            <div className="jr-card jr-card-full-height">
                                <CardHeader heading={<IntlMessages id="dashboard.recentActivities"/>}/>

                                {logs.map((logs, index) => <RecentActivities key={index}
                                                                                         recentData={logs}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.displayData(this.state.loading)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dashboardData: state.dashboard
});

export default connect(mapStateToProps, {getDashboardDataSuccessList})(Intranet);