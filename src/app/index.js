import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
import Dashboard from './routes/dashboard';
import Components from './routes/components';
import Icons from './routes/icons/index';
import Form from './routes/form';
import Editors from './routes/editors';
import Pickers from './routes/pickers';
import Extensions from './routes/extensions';
import Table from './routes/table';
import Chart from './routes/charts';
import Map from './routes/map';
import Calendar from './routes/calendar';
import TimeLine from './routes/timeLine';
import CustomViews from './routes/customViews';
import ExtraElements from './routes/extraElements'
import eCommerce from './routes/eCommerce'
import AppModule from './routes/appModule'
import ExtraPages from './routes/extraPages';

import {
    ABOVE_THE_HEADER,
    BELOW_THE_HEADER,
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
    HORIZONTAL_NAVIGATION
} from 'constants/ActionTypes';
import ColorOption from 'containers/Customizer/ColorOption';
import {isIOS, isMobile} from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';
import TopNav from 'components/TopNav';
import Tour from "components/Tour/index";


class App extends React.Component {

    render() {
        const {match, drawerType, navigationStyle, horizontalNavPosition} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';

        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            document.body.classList.add('ios-mobile-view-height')
        }
        else if (document.body.classList.contains('ios-mobile-view-height')) {
            document.body.classList.remove('ios-mobile-view-height')
        }
        return (
            <div className={`app-container ${drawerStyle}`}>
{/*
                <Tour/>
*/}

                <Sidebar/>
                <div className="app-main-container">
                    <div className="app-header">
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
                        <TopNav styleName="app-top-header"/>}
                        <Header/>
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
                        <TopNav/>}

                    </div>

                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Switch>
                                <Route path={`${match.url}/dashboard`} component={Dashboard}/>
                                <Route path={`${match.url}/components`} component={Components}/>
                                <Route path={`${match.url}/icons`} component={Icons}/>
                                <Route path={`${match.url}/form`} component={Form}/>
                                <Route path={`${match.url}/editor`} component={Editors}/>
                                <Route path={`${match.url}/pickers`} component={Pickers}/>
                                <Route path={`${match.url}/extensions`} component={Extensions}/>
                                <Route path={`${match.url}/table`} component={Table}/>
                                <Route path={`${match.url}/chart`} component={Chart}/>
                                <Route path={`${match.url}/map`} component={Map}/>
                                <Route path={`${match.url}/calendar`} component={Calendar}/>
                                <Route path={`${match.url}/time-line`} component={TimeLine}/>
                                <Route path={`${match.url}/custom-views`} component={CustomViews}/>
                                <Route path={`${match.url}/default-message`} component={asyncComponent(() => import('./routes/defaultMessage'))}/>
                                <Route path={`${match.url}/pre-approved`} exact component={asyncComponent(() => import('./routes/preApproved'))}/>
                                <Route path={`${match.url}/pre-approved/list/:id`} exact component={asyncComponent(() => import('./routes/preApproved/preApprovedList'))}/>
                                <Route path={`${match.url}/request-loans/detail/:id`} component={asyncComponent(() => import('./routes/loanRequests/loanRequestDetail'))}/>
                                <Route path={`${match.url}/users/:phoneNumber`}  component={asyncComponent(() => import('./routes/userList/userDetail'))}/>
                                <Route path={`${match.url}/users`}  component={asyncComponent(() => import('./routes/userList'))}/>
                                <Route path={`${match.url}/system-users`}  component={asyncComponent(() => import('./routes/userList/systemUsers'))}/>
                                <Route path={`${match.url}/logs`}  component={asyncComponent(() => import('./routes/logs'))}/>
                                <Route path={`${match.url}/decision-metric`} component={asyncComponent(() => import('./routes/decisionMetric'))}/>
                                <Route path={`${match.url}/manage-loans`} component={asyncComponent(() => import('./routes/manageLoans'))}/>
                                <Route path={`${match.url}/request-loans`} component={asyncComponent(() => import('./routes/loanRequests'))}/>
                                <Route path={`${match.url}/sms-filter`} component={asyncComponent(() => import('./routes/smsFilter'))}/>
                                <Route path={`${match.url}/bank-filter`} component={asyncComponent(() => import('./routes/bankFilter'))}/>
                                <Route path={`${match.url}/faq`} exact component={asyncComponent(() => import('./routes/faq'))}/>
                                <Route path={`${match.url}/categories/faq`} exact component={asyncComponent(() => import('./routes/faq/faqCategories'))}/>
                                <Route path={`${match.url}/widgets`}
                                       component={asyncComponent(() => import('./routes/widgets'))}/>
                                <Route path={`${match.url}/metrics`}
                                       component={asyncComponent(() => import('./routes/metrics'))}/>
                                <Route path={`${match.url}/extra-elements`} component={ExtraElements}/>
                                <Route path={`${match.url}/ecommerce`} component={eCommerce}/>
                                <Route path={`${match.url}/app-module`} component={AppModule}/>
                                <Route path={`${match.url}/to-do`}
                                       component={asyncComponent(() => import('./routes/todo/basic/index'))}/>
                                <Route path={`${match.url}/to-do-redux`}
                                       component={asyncComponent(() => import('./routes/todo/redux/index'))}/>
                                <Route path={`${match.url}/mail`}
                                       component={asyncComponent(() => import('./routes/mail/basic/index'))}/>
                                <Route path={`${match.url}/mail-redux`}
                                       component={asyncComponent(() => import('./routes/mail/redux/index'))}/>
                                <Route path={`${match.url}/chat`}
                                       component={asyncComponent(() => import('./routes/chatPanel/basic/index'))}/>
                                <Route path={`${match.url}/chat-redux`}
                                       component={asyncComponent(() => import('./routes/chatPanel/redux/index'))}/>
                                <Route path={`${match.url}/contact`}
                                       component={asyncComponent(() => import('./routes/contact/basic/index'))}/>
                                <Route path={`${match.url}/contact-redux`}
                                       component={asyncComponent(() => import('./routes/contact/redux/index'))}/>
                                <Route path={`${match.url}/extra-pages`} component={ExtraPages}/>
                                <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </main>
                </div>
{/*
                <ColorOption/>
*/}
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {drawerType, navigationStyle, horizontalNavPosition} = settings;
    return {drawerType, navigationStyle, horizontalNavPosition}
};
export default withRouter(connect(mapStateToProps)(App));