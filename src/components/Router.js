import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import LoginSuccessful from './LoginSuccessful';
import NotFound from './NotFound';
import App from './App';

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/salesloft" component={LoginSuccessful} />
        <Route path="/salesloft/main" component={App} />
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
)

export default Router;