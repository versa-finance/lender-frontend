import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import StarRatings from 'react-star-ratings';

const ProfileList = (props) => {
    const {last_name, other_names, loan_level, phone_number, email, date_of_birth, bvn, user_category, device_id,
        one_signal_id, gender, is_corporate_user, loanHostoryRatingValue} = props.data;

    const loanRating = (loanHostoryRatingValue / 100) * 5;

    let userType;
    if(is_corporate_user)
        userType = "Corporate";
    else
        userType = "General";

    return (
        <ListGroup>
            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Last Name: </span>
                </div>
                <span className="ml-auto">
                    {last_name}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Other Names: </span>
                </div>
                <span className="ml-auto">
                    {other_names}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Gender: </span>
                </div>
                <span className="ml-auto">
                    {gender}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Loan Level: </span>
                </div>
                <span className="ml-auto">
                    {loan_level}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> User Category: </span>
                </div>
                <span className="ml-auto">
                    {user_category}
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

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Email: </span>
                </div>
                <span className="ml-auto">
                    {email}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Mobile: </span>
                </div>
                <span className="ml-auto">
                    {phone_number}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Date of birth: </span>
                </div>
                <span className="ml-auto">
                    {date_of_birth}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> BVN: </span>
                </div>
                <span className="ml-auto">
                    {bvn}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Device ID: </span>
                </div>
                <span className="ml-auto">
                    {device_id}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> One Signal ID: </span>
                </div>
                <span className="ml-auto">
                    {one_signal_id}
                </span>
            </ListGroupItem>

            <ListGroupItem className="d-flex" action>
                <div className="form-checkbox mr-3">
                    <span className="check" style={{fontWeight: "bold"}}> Rating: </span>
                </div>

                <span className="ml-auto">
                    <StarRatings
                        rating={loanRating}
                        starRatedColor="blue"
                        name='rating'
                        starDimension="20px"
                        starSpacing="2px"
                    />
                </span>
            </ListGroupItem>
        </ListGroup>
    );
}

export default ProfileList;