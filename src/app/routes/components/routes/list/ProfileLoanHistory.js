import React from 'react';
import {Badge, ListGroup, ListGroupItem} from 'reactstrap';

const ProfileLoanHistory = (props) => {
    const {loanHistory} = props.data;
    let color, status, paid, paidColor;

    console.log("loanhistory", loanHistory)
    // console.log("loanHistory.length()", loanHistory.isEmpty())

    let loanHistory2;
    if(loanHistory !== undefined)
    {
        loanHistory2 = loanHistory;
    }
    else
        loanHistory2 = [];

    return (
        <ListGroup>
            {loanHistory2.map((data,index) => {
                status = data.is_approved === "1" ? "Approved" : status = data.is_approved === "-1" ? "Disapproved" : "Pending";
                color = data.is_approved === "1" ? "success" : color = data.is_approved === "-1" ? "danger" : "warning";
                paid = data.is_fully_paid === "1" ? "Paid" : "Not Paid";
                paidColor = data.is_fully_paid === "1" ? "success" : "danger";

                return <div key={index} style={{marginBottom: 20}}>
                            <ListGroupItem>

                                <div className="media">
                                    <div className="mr-3 mb-2">
                                        <span className="text-muted">{index + 1}</span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="mb-0" style={{fontWeight: 'bold'}}>NGN {data.loan_amount}</h3>
                                        <span className="text-muted"><small>{data.created_at}</small></span>
                                    </div>
                                </div>

                                <div style={{marginLeft: 20, marginTop: 5}}>
                                    <Badge className="text-uppercase ml-auto" color={color} pill>{status}</Badge>

                                    <Badge className="text-uppercase ml-auto" color={paidColor} pill>{paid}</Badge>
                                </div>

                            </ListGroupItem>
                        </div>
            })}
        </ListGroup>
    )
};

export default ProfileLoanHistory;