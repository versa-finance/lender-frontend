import React from 'react';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';
import {connect} from 'react-redux';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import {approveLoan, disapproveLoan, getLoanRequests, LoanRequestSave} from "actions/LoanRequests";
import StarRatings from 'react-star-ratings';

const LoanRequestDecisionList = (props) => {
    const {id, discounted_sum_of_account_balance, discounted_sum_of_recharge_cards, total_merit_amount, platform,
        loan_history_rating, is_approved, is_corporate_user} = props.data;

    console.log('data', props.data)

    console.log(props.data);
    console.log(props.response);

    let userType, loanDecisionMetrix;
    if(is_corporate_user)
    {
        userType = "Corporate";
        loanDecisionMetrix = "";
    }
    else
    {
        userType = "General";
        loanDecisionMetrix = <div>
            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Discounted Sum of Account Balance: </span>
                </div>
                <span className="ml-auto">
                    {discounted_sum_of_account_balance}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Discounted Sum of Recharge Cards: </span>
                </div>
                <span className="ml-auto">
                    {discounted_sum_of_recharge_cards}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Total Merit Amount: </span>
                </div>
                <span className="ml-auto">
                    {total_merit_amount}
                </span>
            </ListGroupItem>
        </div>
    }

    const loanRating = (loan_history_rating / 100) * 5;


    let icon;
    icon = platform === "android" ? <i className="zmdi zmdi-android cursorChange"/> :
        <i className="zmdi zmdi-apple cursorChange"/>;

    let button;
    if(is_approved === "-1")
    {
        button = <ListGroupItem className="d-flex" action>
                    <span className="ml-auto">
                        <Button color="success" onClick={() => loanStatus('approveLoan', id, props)} className="jr-btn jr-btn-label left">
                            <i className="zmdi zmdi-check zmdi-hc-fw"/>
                            <span>Approve</span>
                        </Button>
                    </span>
                </ListGroupItem>
    }
    else if(is_approved === "0")
    {
        button = <ListGroupItem className="d-flex" action>
                    <div className="form-checkbox mr-3">
                        <Button disabled={true} color="danger" onClick={() => loanStatus('disapproveLoan', id, props)} className="jr-btn jr-btn-label left">
                            <i className="zmdi zmdi-delete zmdi-hc-fw"/>
                            <span>Decline</span>
                        </Button>
                    </div>

                    <span className="ml-auto">
                        <Button disabled={true} color="success" onClick={() => loanStatus('approveLoan', id, props)} className="jr-btn jr-btn-label left">
                            <i className="zmdi zmdi-check zmdi-hc-fw"/>
                            <span>Approve</span>
                        </Button>
                    </span>
                </ListGroupItem>
    }

    return (

        <ListGroup>
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} color={'white'}/>
            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Platform: </span>
                </div>
                <span className="ml-auto">
                    {icon}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> User Type: </span>
                </div>
                <span className="ml-auto">
                    {userType}
                </span>
            </ListGroupItem>

            {
                loanDecisionMetrix
            }

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Loan History Rating: </span>
                </div>
                <span className="ml-auto">
                    <StarRatings
                        // rating={2}
                        rating={loanRating}
                        starRatedColor="blue"
                        name='rating'
                        starDimension="20px"
                        starSpacing="2px"
                    />
                    {/*{loan_history_rating + ' %'}*/}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                {
                    button
                }
            </ListGroupItem>
        </ListGroup>
    );
};

const loanStatus =  (params, id, props) =>
{
    let data = {
        request_id: id,
        comment: params,
    };

    if(params === 'approveLoan') {
        props.approveLoan(data);
        // location.href = `#/app/request-loans`;
    } else if(params === 'disapproveLoan'){
        props.disapproveLoan(data);
       console.log(props.response);
        ToastsStore.success(props.response);
        // location.href = `#/app/request-loans`;
    }
};


const mapStateToProps = (state) => ({
    requestLoans: state.loanRequests
});

export default connect(mapStateToProps, {approveLoan, disapproveLoan})(LoanRequestDecisionList);