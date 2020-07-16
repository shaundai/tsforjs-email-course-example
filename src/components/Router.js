import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import NotFound from './NotFound';
import Redirecting from './Redirecting';
import App from './App';

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/redirect" component={Redirecting} />
        <Route path="/app" component={App} />
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
)

export default Router;