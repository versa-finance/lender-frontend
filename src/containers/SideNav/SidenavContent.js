import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from "util/CustomScrollbars";
import {connect} from 'react-redux'
import {userSignOut} from "actions";


class SidenavContent extends Component {

    state = {
        user_category: ""
    };

    componentDidMount() {
        const {history} = this.props;
        const that = this;
        const pathname = `#${history.location.pathname}`;// get current path

        const subMenuLi = document.querySelectorAll('.sub-menu > li');
        for (let i = 0; i < subMenuLi.length; i++) {
            subMenuLi[i].onclick = function (event) {
                event.stopPropagation();
            }
        }

        const menuLi = document.getElementsByClassName('menu');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function (event) {
                for (let j = 0; j < menuLi.length; j++) {
                    const parentLi = that.closest(this, 'li');
                    if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
                        menuLi[j].classList.remove('open')
                    }
                }
                this.classList.toggle('open');
                event.stopPropagation();
            }
        }

        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        } catch (error) {

        }

        const userInfo = JSON.parse(localStorage.getItem('user'));
        this.setState({user_category: userInfo.user_category})
    }

    closest(el, selector) {
        try {
            let matchesFn;
            // find vendor prefix
            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
                if (typeof document.body[fn] == 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            let parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }
        } catch (e) {

        }

        return null;
    }

    displaySettingsForSuperAdmin(user_category)
    {
        if(user_category === "SuperAdmin")
        {
            return (
                <li className="ui_tooltip menu">
                    <a role="button" href="javascript:void(0)">
                        <i className="zmdi zmdi-settings zmdi-hc-fw"/>
                        <span className="nav-text"><IntlMessages id="sidebar.setting.name"/></span>
                    </a>

                    <ul className="sub-menu">
                        <li>
                            <NavLink className="prepend-icon" to="/app/manage-loans">
                                <i className="zmdi zmdi-settings-square zmdi-hc-fw"/>
                                <span className="nav-text"><IntlMessages id="sidebar.manage.loans"/></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="prepend-icon" to="/app/sms-filter">
                                <i className="zmdi zmdi-settings-square zmdi-hc-fw"/>
                                <span className="nav-text"><IntlMessages id="sidebar.sms.filter"/></span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="prepend-icon" to="/app/bank-filter">
                                <i className="zmdi zmdi-settings-square zmdi-hc-fw"/>
                                <span className="nav-text"><IntlMessages id="sidebar.bank.sms.filter"/></span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="prepend-icon" to="/app/default-message">
                                <i className="zmdi zmdi-settings-square zmdi-hc-fw"/>
                                <span className="nav-text"><IntlMessages id="sidebar.default.message"/></span>
                            </NavLink>
                        </li>
                    </ul>
                </li>

            );
        }
    }

    render() {
        return (
            <CustomScrollbars className="scrollbar" style={{height: 'calc(100vh - 70px)'}}>
                <ul className="nav-menu">

                    <li className="nav-header"><IntlMessages id="sidebar.main"/></li>

                  {/*  <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>
                            <span className="nav-text">
                            <IntlMessages id="sidebar.dashboard"/>
                        </span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/dashboard/default">
                                    <span className="nav-text"><IntlMessages id="sidebar.dashboard.default"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/dashboard/eCommerce">
                                <span className="nav-text text-transform-none"><IntlMessages
                                    id="sidebar.dashboard.ecommerce"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/dashboard/news">
                                    <span className="nav-text"><IntlMessages id="sidebar.dashboard.news"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/dashboard/intranet">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.dashboard.intranet"/></span>
                                </NavLink>
                            </li>
                        </ul>

                    </li>*/}

                    <li className="no-arrow menu">
                        <NavLink className="prepend-icon" to="/app/dashboard/intranet">
                            <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>

                            <span className="nav-text"><IntlMessages
                                            id="sidebar.dashboard.intranet"/></span>
                        </NavLink>
                    </li>

                    <li className="ui_tooltip menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-accounts-list zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.users"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/users">
                                    <i className="zmdi zmdi-accounts-list zmdi-hc-fw"/>
                                    <span className="nav-text"><IntlMessages id="sidebar.menuname"/></span>
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/system-users">
                                    <i className="zmdi zmdi-accounts-list zmdi-hc-fw"/>
                                    <span className="nav-text"><IntlMessages id="sidebar.system.users"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="no-arrow menu">
                        <NavLink className="prepend-icon" to="/app/request-loans">
                            <i className="zmdi zmdi-trending-up zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.request.loans"/></span>
                        </NavLink>
                    </li>

                    <li className="no-arrow menu">
                        <NavLink className="prepend-icon" to="/app/logs">
                            <i className="zmdi zmdi-flag zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.logs"/></span>
                        </NavLink>
                    </li>

                    <li className="ui_tooltip menu">
                      {/*  <NavLink className="prepend-icon" to="/app/faq">
                            <i className="zmdi zmdi-widgets zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="side.faq.menuname"/></span>
                        </NavLink>*/}
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-help zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="side.faq.menuname"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/faq">
                                    <i className="zmdi zmdi-help-outline zmdi-hc-fw"/>
                                    <span className="nav-text"><IntlMessages id="sidebar.manage.faq"/></span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="prepend-icon" to="/app/categories/faq">
                                    <i className="zmdi zmdi-pin-help zmdi-hc-fw"/>
                                    <span className="nav-text"><IntlMessages id="sidebar.list.faq.categories"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="ui_tooltip menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-settings zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.setting.name"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/manage-loans">
                                    <i className="zmdi zmdi-settings-square zmdi-hc-fw"/>
                                    <span className="nav-text"><IntlMessages id="sidebar.manage.loans"/></span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="prepend-icon" to="/app/pre-approved">
                                    <i className="zmdi zmdi-settings-square zmdi-hc-fw"/>
                                    <span className="nav-text"><IntlMessages id="sidebar.preapproved.list"/></span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="prepend-icon" to="/app/sms-filter">
                                    <i className="zmdi zmdi-settings-square zmdi-hc-fw"/>
                                    <span className="nav-text"><IntlMessages id="sidebar.sms.filter"/></span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="prepend-icon" to="/app/bank-filter">
                                    <i className="zmdi zmdi-settings-square zmdi-hc-fw"/>
                                    <span className="nav-text"><IntlMessages id="sidebar.bank.sms.filter"/></span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="prepend-icon" to="/app/default-message">
                                    <i className="zmdi zmdi-settings-square zmdi-hc-fw"/>
                                    <span className="nav-text"><IntlMessages id="sidebar.default.message"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    {/*{*/}
                        {/*this.displaySettingsForSuperAdmin(this.state.user_category)*/}
                    {/*}*/}

                    <a className="dropdown-item text-muted" style={{paddingBottom: 20, paddingTop: 20,
                        backgroundColor: 'gainsboro'}} href="javascript:void(0)" onClick={() => {
                        this.props.userSignOut()
                    }}>
                        <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-1" style={{fontSize: 18, color: 'red'}}/>
                        <span className="nav-text" style={{marginLeft: 18, fontSize: 15, fontWeight: 'bold', color: 'red'}}><IntlMessages id="sidebar.logout"/></span>
                    </a>

                    {/*<li className="nav-header"><IntlMessages id="sidebar.form"/></li>*/}

                    {/*<li className="menu">*/}
                        {/*<a role="button" href="javascript:void(0)">*/}
                            {/*<i className="zmdi zmdi-book-image zmdi-hc-fw"/>*/}
                            {/*<span className="nav-text"><IntlMessages id="sidebar.forms"/></span>*/}
                        {/*</a>*/}
                        {/*<ul className="sub-menu">*/}
                            {/*<li>*/}
                                {/*<NavLink className="prepend-icon" to="/app/form/components">*/}
                                    {/*<span className="nav-text"><IntlMessages id="sidebar.forms.components"/></span>*/}
                                {/*</NavLink>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</li>*/}

                   {/* <li className="ui_tooltip menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-folder zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.components"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/alerts">
                                    <span className="nav-text"><IntlMessages id="sidebar.components.alerts"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/appbar">
                                    <span className="nav-text"><IntlMessages id="sidebar.components.appbar"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/auto-complete">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.components.autocomplete"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/avatars">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.avatars"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/badges">
                                    <span className="nav-text"><IntlMessages id="sidebar.components.badge"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/breadcrumbs">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.components.breadcrumbs"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/buttons">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.buttons"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/button-group">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.components.buttonGroup"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/cards">
                                    <span className="nav-text"><IntlMessages id="sidebar.components.cards"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/carousel">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.carousel"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/color-picker">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.components.colorPicker"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/dividers">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.dividers"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/drawer">
                                    <span className="nav-text"><IntlMessages id="sidebar.components.drawer"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/expansion-panel">
                                <span className="nav-text"><IntlMessages
                                    id="sidebar.components.expansionPanel"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/grid-list">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.gridList"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/list">
                                    <span className="nav-text"><IntlMessages id="sidebar.components.lists"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/modals">
                                    <span className="nav-text"><IntlMessages id="sidebar.components.modals"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/pickers">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.pickers"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/popovers">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.popovers"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/progressbar">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.progress"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/selection">
                                <span className="nav-text"><IntlMessages
                                    id="sidebar.components.selectionControl"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/selects">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.selects"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/tabs">
                                    <span className="nav-text"><IntlMessages id="sidebar.components.tabs"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/text-fields">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.components.textFields"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/tooltips">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.components.tooltips"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/components/typography">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.components.typography"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>*/}

                  {/*  <li className="menu no-arrow">
                        <NavLink to="/app/widgets">
                            <i className="zmdi zmdi-widgets zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.widgets"/></span>
                        </NavLink>
                    </li>

                    <li className="menu no-arrow">
                        <NavLink to="/app/metrics">
                            <i className="zmdi zmdi-trending-up zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.metrics"/></span>
                        </NavLink>
                    </li>

                    <li className="nav-header"><IntlMessages id="sidebar.view"/></li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.tables"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/table/basic">
                                    <span className="nav-text"><IntlMessages id="sidebar.tables.basicTable"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/table/data">
                                    <span className="nav-text"><IntlMessages id="sidebar.tables.dataTable"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="timeline_tooltip menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-swap-alt zmdi-hc-fw zmdi-hc-rotate-90"/>
                            <span className="nav-text"><IntlMessages id="sidebar.timeLine"/></span>
                        </a>
                        <ul className="sub-menu">

                            <li>
                                <NavLink className="prepend-icon" to="/app/time-line/default">
                                    <span className="nav-text"><IntlMessages id="sidebar.timeLine.default"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/time-line/default-with-icon">
                                <span className="nav-text"><IntlMessages
                                    id="sidebar.timeLine.defaultwithIcons"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/time-line/left-align">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.timeLine.leftAligned"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-view-list zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.customViews"/></span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/custom-views/simple-list">
                                <span className="nav-text"><IntlMessages
                                    id="sidebar.customViews.plainListView"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/custom-views/strip-list">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.customViews.withDivider"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/custom-views/card-list">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.customViews.cardListView"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-header"><IntlMessages id="sidebar.form"/></li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-book-image zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.forms"/></span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/form/components">
                                    <span className="nav-text"><IntlMessages id="sidebar.forms.components"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-header"><IntlMessages id="sidebar.extensions"/></li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-code-setting zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.editors"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/editor/ck">
                                    <span className="nav-text"><IntlMessages id="sidebar.editors.CKEditor"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/editor/wysiswyg">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.editors.WYSISWYGEditor"/></span>
                                </NavLink>
                            </li>
                        </ul>

                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-brush zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.pickers"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/pickers/date-time">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.pickers.dateTimePickers"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/pickers/color">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.pickers.colorPickers"/></span>
                                </NavLink>
                            </li>
                        </ul>

                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-key zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.extensions"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/extensions/dnd">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.extensions.dragNDrop"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extensions/dropzone">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.extensions.dropzone"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extensions/sweet-alert">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.extensions.sweetAlert"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extensions/notification">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.extensions.notification"/></span>
                                </NavLink>
                            </li>
                        </ul>

                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-chart zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.chart"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/chart/line">
                                    <span className="nav-text"><IntlMessages id="sidebar.chart.line"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/chart/bar">
                                    <span className="nav-text"><IntlMessages id="sidebar.chart.bar"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/chart/area">
                                    <span className="nav-text"><IntlMessages id="sidebar.chart.area"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/chart/composed">
                                <span className="nav-text"><IntlMessages
                                    id="sidebar.chart.composed"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/chart/scatter">
                                <span className="nav-text"><IntlMessages
                                    id="sidebar.chart.scatter"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/chart/pie">
                                    <span className="nav-text"><IntlMessages id="sidebar.chart.pie"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/chart/radial">
                                    <span className="nav-text"><IntlMessages id="sidebar.chart.radial"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/chart/radar">
                                    <span className="nav-text"><IntlMessages id="sidebar.chart.radar"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/chart/treemap">
                                    <span className="nav-text"><IntlMessages id="sidebar.chart.tree"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="map_tooltip menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-google-maps zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.map"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/simple">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.simple"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/styled">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.styled"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/geo-location">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.geoLocation"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/directions">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.mapDirection"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/overlay">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.overlay"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/kml">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.kmLayer"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/popup-info">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.popupInfo"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/traffic">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.trafficLayer"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/street-view">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.streetView"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/event">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.eventListener"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/drawing">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.mapDrawing"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/map/clustering">
                                    <span className="nav-text"><IntlMessages id="sidebar.map.mapClustering"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-header"><IntlMessages id="sidebar.modules"/></li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-calendar zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.calendar"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/calendar/basic">
                                    <span className="nav-text"><IntlMessages id="sidebar.calendar.basic"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/calendar/cultures">
                                    <span className="nav-text"><IntlMessages id="sidebar.calendar.cultures"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/calendar/dnd">
                                    <span className="nav-text"><IntlMessages id="sidebar.calendar.dnd"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/calendar/popup">
                                    <span className="nav-text"><IntlMessages id="sidebar.calendar.popup"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/calendar/rendering">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.calendar.rendering"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/calendar/selectable">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.calendar.selectable"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/calendar/timeslots">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.calendar.timeslots"/></span>
                                </NavLink>
                            </li>
                        </ul>

                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-shopping-cart zmdi-hc-fw"/>
                            <span className="nav-text text-transform-none"><IntlMessages
                                id="sidebar.eCommerce"/></span>
                        </a>

                        <ul className="sub-menu">

                            <li>
                                <NavLink className="prepend-icon" to="/app/ecommerce/products-list">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.eCommerce.productsList"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/ecommerce/products-grid">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.eCommerce.productsGrid"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-collection-item-8 zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.appModule"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/app-module/login">
                                    <span className="nav-text"><IntlMessages id="sidebar.appModule.login"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/app-module/sign-up">
                                    <span className="nav-text"><IntlMessages id="sidebar.appModule.signup"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/app-module/forgot-password">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.appModule.forgotPassword"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/app-module/lock-screen">
                                    <span className="nav-text"><IntlMessages id="sidebar.appModule.lock"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="menu no-arrow">
                        <NavLink to="/app/to-do">
                            <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.appModule.toDo"/></span>
                        </NavLink>
                    </li>

                    <li className="menu no-arrow">
                        <NavLink to="/app/to-do-redux">
                            <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.appModule.toDoRedux"/></span>
                        </NavLink>
                    </li>

                    <li className="menu no-arrow">
                        <NavLink to="/app/mail">
                            <i className="zmdi zmdi-email zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.appModule.mail"/></span>
                        </NavLink>
                    </li>

                    <li className="menu no-arrow">
                        <NavLink to="/app/mail-redux">
                            <i className="zmdi zmdi-email zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.appModule.mailRedux"/></span>
                        </NavLink>
                    </li>


                    <li className="menu no-arrow">
                        <NavLink to="/app/chat">
                            <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.appModule.chat"/></span>
                        </NavLink>
                    </li>

                    <li className="menu no-arrow">
                        <NavLink to="/app/chat-redux">
                            <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.appModule.chatRedux"/></span>
                        </NavLink>
                    </li>

                    <li className="menu no-arrow">
                        <NavLink to="/app/contact">
                            <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.appModule.contact"/></span>
                        </NavLink>
                    </li>

                    <li className="menu no-arrow">
                        <NavLink to="/app/contact-redux">
                            <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.appModule.contactRedux"/></span>
                        </NavLink>
                    </li>

                    <li className="nav-header"><IntlMessages id="sidebar.extras"/></li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.icons"/></span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/icons/material">
                                    <span className="nav-text"><IntlMessages id="sidebar.icons.material"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-collection-bookmark zmdi-hc-fw zmdi-hc-rotate-90"/>
                            <span className="nav-text"><IntlMessages id="sidebar.extraElements"/></span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-elements/pricing-table">
                                <span className="nav-text"><IntlMessages
                                    id="sidebar.extraElements.pricingTable"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-elements/callouts">
                                    <span className="nav-text"><IntlMessages
                                        id="sidebar.extraElements.callouts"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-elements/testimonials">
                                <span className="nav-text"><IntlMessages
                                    id="sidebar.extraElements.testimonials"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-pages zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.extraPages"/></span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-pages/about-us">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.extraPages.aboutUs"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-pages/contact-us">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.extraPages.contactUs"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-pages/blog">
                                    <span className="nav-text"><IntlMessages id="sidebar.extraPages.blog"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-pages/faq">
                                    <span className="nav-text"><IntlMessages id="sidebar.extraPages.faq"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-pages/portfolio">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.extraPages.portfolio"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-pages/error-404">
                                    <span className="nav-text"><IntlMessages id="sidebar.extraPages.404"/></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="prepend-icon" to="/app/extra-pages/error-500">
                                    <span className="nav-text"><IntlMessages id="sidebar.extraPages.500"/></span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="menu">
                        <a role="button" href="javascript:void(0)">
                            <i className="zmdi zmdi-device-hub zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="sidebar.menuLevels"/></span>
                        </a>

                        <ul className="sub-menu">
                            <li>
                                <a role="button" className="prepend-icon" href="javascript:void(0)">
                                    <span className="nav-text"><IntlMessages id="sidebar.menuLevels.level1"/></span>
                                </a>
                            </li>
                            <li className="menu">
                                <a role="button" className="prepend-icon" href="javascript:void(0)">
                                    <span className="nav-text"><IntlMessages id="sidebar.menuLevels.level1"/></span>
                                </a>

                                <ul className="sub-menu">
                                    <li>
                                        <a role="button" href="javascript:void(0)">
                                            <span className="nav-text"><IntlMessages
                                                id="sidebar.menuLevels.level2"/></span>
                                        </a>
                                    </li>
                                    <li className="menu">
                                        <a role="button" href="javascript:void(0)">
                                        <span className="nav-text"><IntlMessages
                                            id="sidebar.menuLevels.level2"/></span>
                                        </a>

                                        <ul className="sub-menu">
                                            <li>
                                                <a role="button" href="javascript:void(0)">
                                                <span className="nav-text"><IntlMessages
                                                    id="sidebar.menuLevels.level3"/></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button" href="javascript:void(0)">
                                                <span className="nav-text"><IntlMessages
                                                    id="sidebar.menuLevels.level3"/></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>*/}

                </ul>
            </CustomScrollbars>
        );
    }
}

export default connect(null, {userSignOut})(withRouter(SidenavContent));