import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const Dashboard = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/intranet`}/>
            <Route path={`${match.url}/default`} component={asyncComponent(() => import('./routes/Default'))}/>
            <Route path={`${match.url}/eCommerce`} component={asyncComponent(() => import('./routes/ECommerce'))}/>
            <Route path={`${match.url}/news`} component={asyncComponent(() => import('./routes/News'))}/>
            <Route path={`${match.url}/intranet`} component={asyncComponent(() => import('./routes/Intranet'))}/>
            <Route
                component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
        </Switch>
    </div>
);

export default Dashboard;