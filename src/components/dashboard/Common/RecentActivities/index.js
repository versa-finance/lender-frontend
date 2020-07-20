import React from 'react';

const RecentActivities = ({recentData}) => {
    const {created_at, body, module} = recentData;
    return (
        <div className="media social-list-line">

            <div
                className={`border-primary bg-white icon-btn user-avatar size-40 z-index-20 align-item-self mr-3`}>
                <i className={`zmdi zmdi-local-activity text-primary zmdi-hc-fw`}/>
            </div>
            <div className="media-body">
                <h4 className="mb-1">{body}</h4>
                <h5 className="mb-1">{module}</h5>
                <p className="meta-date">{created_at}</p>
            </div>
        </div>
    );
};

export default RecentActivities;