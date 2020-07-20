import React from 'react';


const NotificationItem = ({notification}) => {
    const {image, badge, name, time, message} = notification;
    return (
        <li className="media">
            <div className="user-thumb mr-3">
                <img className="rounded-circle avatar-sm"
                     alt={name}
                     src={image}
                />
                <span className="badge badge-danger rounded-circle">{badge}</span>
            </div>
            <div className="media-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-capitalize user-name mb-0"><a href="javascript:void(0)">{name}</a></h5>
                    <span className="meta-date"><small>{time}</small></span>
                </div>
                <p className="sub-heading">{message}</p>
                <span className="jr-btn jr-btn-xs text-muted"><i
                    className="zmdi zmdi-mail-reply"/><span>Reply</span></span>
                <span className="jr-btn jr-btn-xs text-muted"><i className="zmdi zmdi-eye"/><span>Read</span></span>
            </div>
        </li>
    );
};

export default NotificationItem;
