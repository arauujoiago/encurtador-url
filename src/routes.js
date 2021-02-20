import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home/home';
import ListaUrls from './pages/listaUrls/listaUrls';
import Login from './pages/login/login'

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={ListaUrls} path="/listaUrls" />
            <Route component={Home} path="/home" />
        </BrowserRouter>
    )
}

export default Routes;