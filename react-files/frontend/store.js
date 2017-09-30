import React from 'react';
import {createStore,combineReducers} from 'redux';
import indexReducer from './index/indexReducer.js';
import adminReducer from './admin/adminReducer.js';

let reducers = combineReducers({
    indexState: indexReducer,
    adminState: adminReducer
});

export default createStore(reducers);
