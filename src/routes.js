import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home/home';
import ListaUrls from './pages/listaUrls/listaUrls';
import Login from './pages/login/login'
import useToken from './useToken';


function Routes() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/" exact>{token ? <Redirect to="/home" /> : <Home />}</Route>
                <Route component={ListaUrls} path="/listaUrls" />
                <Route component={Home} path="/home" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;