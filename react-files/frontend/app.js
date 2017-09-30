import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();
import Application from './Application.js';
import store from './store.js';
import {Provider} from 'react-redux';
import './style.sass';
import './index/index.sass';
import './admin/admin.sass';

ReactDOM.render(
        <Router history={history}>
            <Provider store={store}>
                <Application/>
            </Provider>
        </Router>,
    document.querySelector('#root'));