import React from 'react';
import {myIcon} from "../../shared/Methods";
import CardBox from "components/CardBox";
import IntlMessages from "util/IntlMessages";
import ProfileList from "app/routes/components/routes/list/ProfileList";
import ProfileLoanHistory from "app/routes/components/routes/list/ProfileLoanHistory";

const ProfileCard = (props) => {
    console.log('adsas', props)
    const data = props.data.length > 0 ? props.data[0] : {};
    const {last_name, other_names} = data;
    console.log(myIcon(last_name));
    return (
        <div className="profile-intro card text-center">

            <div className="pi-header">
                <div className="card-image layer">
                    <div className="avatar-logo"><span>{myIcon(last_name)}</span><span>{myIcon(other_names)}</span></div>
                </div>
            </div>
            <div className="pi-content">
                <h1>{data.last_name} {data.other_names}</h1>
            </div>

            <div className="row mb-md-4" style={{margin: 10}}>
                <CardBox
                    styleName="col-lg-7 col-12"
                    cardStyle="p-0 overflow-hidden border-0"
                    heading={<IntlMessages id="text.user.profile"/>}
                    headerOutside
                >
                    <ProfileList data={data}/>
                </CardBox>

                <CardBox
                    styleName="col-lg-5 col-12"
                    cardStyle="p-0 overflow-hidden border-0"
                    heading={<IntlMessages id="text.user.loan.history"/>}
                    headerOutside>
                    <ProfileLoanHistory data={data}/>
                </CardBox>
            </div>
        </div>
    )
};

export default ProfileCard;

