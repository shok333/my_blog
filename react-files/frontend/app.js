import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();
import Application from './Application.js';
import './style.sass';

ReactDOM.render(
        <Router history={history}>
            <Application/>
        </Router>,
    document.querySelector('#root'));