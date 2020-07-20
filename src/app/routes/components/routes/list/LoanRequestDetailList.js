import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const LoanRequestDetailList = (props) => {
    const {created_at, loan_payment_terms, loan_interest_rate, loan_duration, loan_amount, phone_number,
        last_name, other_names} = props.data;

    let status = props.data.is_approved === "1" ? "Approved" : status = props.data.is_approved === "-1" ? "Disapproved" : "Pending";
    let paid = props.data.is_fully_paid === "1" ? "Fully Paid" : "Not Fully Paid";

    const interest = loan_amount * (loan_interest_rate / 100);
    const total_pay = parseInt(loan_amount) + parseInt(interest);

    return (
        <ListGroup>
            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Full name: </span>
                </div>
                <span className="ml-auto">
                    {last_name + ' ' + other_names}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Phone number: </span>
                </div>
                <span className="ml-auto">
                    {phone_number}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Loan Amount: </span>
                </div>
                <span className="ml-auto">
                    {loan_amount}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Interest Rate: </span>
                </div>
                <span className="ml-auto">
                    {loan_interest_rate}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Total Payable Amount: </span>
                </div>
                <span className="ml-auto">
                    {total_pay}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Loan Duration: </span>
                </div>
                <span className="ml-auto">
                    {loan_duration + ' month(s)'}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Payment Term: </span>
                </div>
                <span className="ml-auto">
                    {loan_payment_terms}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Created Date: </span>
                </div>
                <span className="ml-auto">
                    {created_at}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Approval Status: </span>
                </div>
                <span className="ml-auto">
                    {status}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Full Repayment Status: </span>
                </div>
                <span className="ml-auto">
                    {paid}
                </span>
            </ListGroupItem>
        </ListGroup>
    );
}

export default LoanRequestDetailList;