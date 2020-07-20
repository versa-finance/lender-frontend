import React from 'react';

import CardBox from 'components/CardBox/index';
import TextFields from '../../../components/routes/textFields/textField/TextFields';
import IntlMessages from 'util/IntlMessages';

const Form = ({match}) => {
    return (

        <div className="animated slideInUpTiny animation-duration-3">
            <div className="jr-card-header d-flex align-items-center">
                <h3 className="mb-0"><IntlMessages id="notification.title"/></h3>
                <div className="ml-3">
                    <span className="text-white badge badge-success"><IntlMessages id="sidebar.decision.matrix"/></span>
                </div>
            </div>
            <div className="row">
                <CardBox styleName="col-lg-12">
                    <TextFields/>
                </CardBox>
            </div>

        </div>

    );
};

export default Form;
