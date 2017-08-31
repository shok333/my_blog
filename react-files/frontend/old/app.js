import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from  './store';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

import AppWrapper from './AppWrapper';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <AppWrapper/>
        </BrowserRouter>
    </Provider>
, document.querySelector('#root'));