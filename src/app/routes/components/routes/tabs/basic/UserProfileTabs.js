import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {myIcon} from "../../../../../../shared/Methods";

const UserProfileTabs = (props) => {
    const data = props.data.length > 0 ? props.data[0] : {};
    const {last_name, other_names} = data;
    console.log(last_name)
    // console.log(myIcon(last_name));

    return (
        <div className="profile-intro card text-center">

            <div className="pi-header">
                <div className="card-image layer">
                    <img className="avatar-circle" src="http://via.placeholder.com/150x150" alt="Team Member"/>
                </div>
            </div>
            <div className="pi-content">
                <h4>Robert Johnson</h4>
                <p>Designer</p>
                <p className="card-text">Hello everyone, I am Maryam. My designs are used in several big companies in
                    United State and other
                    countries.</p>
            </div>
            <div className="pi-footer">
                <div className="icons-wrapper">
                    <a className="icon facebook-icon" href="javascript:void(0)">
                        <i className="zmdi zmdi-facebook zmdi-hc-fw zmdi-hc-lg"/>
                    </a>

                    <a className="icon twitter-icon" href="javascript:void(0)">
                        <i className="zmdi zmdi-twitter zmdi-hc-fw zmdi-hc-lg"/>
                    </a>

                    <a className="icon linkedin-icon" href="javascript:void(0)">
                        <i className="zmdi zmdi-linkedin zmdi-hc-fw zmdi-hc-lg"/>
                    </a>
                </div>
            </div>
        </div>
    )
    //
    // return (
    //     <Tabs>
    //         <TabList>
    //             <Tab>Profile</Tab>
    //             <Tab>Loan History</Tab>
    //             <Tab>Payment History</Tab>
    //         </TabList>
    //
    //         <TabPanel>
    //             <div className="profile-intro card text-center">
    //
    //                 <div className="pi-header">
    //                     <div className="card-image layer">
    //                         {/*<div className="avatar-logo"><span>{myIcon(last_name)}</span><span>{myIcon(other_names)}</span></div>*/}
    //                     </div>
    //                 </div>
    //                 <div className="pi-content">
    //                     <h4>{data.last_name} {data.other_names}</h4>
    //                     <p>{data.user_category}</p>
    //                     <p>{data.phone_number}</p>
    //                     <p className="card-text">Hello everyone, I am Maryam. My designs are used in several big companies in
    //                         United State and other
    //                         countries.</p>
    //                 </div>
    //                 <div className="pi-footer">
    //                     <div className="icons-wrapper">
    //                         <a className="icon facebook-icon" href="javascript:void(0)">
    //                             <i className="zmdi zmdi-facebook zmdi-hc-fw zmdi-hc-lg"/>
    //                         </a>
    //
    //                         <a className="icon twitter-icon" href="javascript:void(0)">
    //                             <i className="zmdi zmdi-twitter zmdi-hc-fw zmdi-hc-lg"/>
    //                         </a>
    //
    //                         <a className="icon linkedin-icon" href="javascript:void(0)">
    //                             <i className="zmdi zmdi-linkedin zmdi-hc-fw zmdi-hc-lg"/>
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </TabPanel>
    //         <TabPanel>
    //             <h2>Any content 2</h2>
    //         </TabPanel>
    //     </Tabs>
    // )
};

export default UserProfileTabs;

