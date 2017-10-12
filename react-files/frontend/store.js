import React from 'react';
import {createStore,combineReducers} from 'redux';
import indexReducer from './index/indexReducer.js';
import adminReducer from './admin/adminReducer.js';
import generalReducer from './generalReducer.js';

let reducers = combineReducers({
    indexState: indexReducer,
    adminState: adminReducer,
    generalState: generalReducer
});

export default createStore(reducers);
