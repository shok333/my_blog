import React from 'react';
import {createStore,combineReducers} from 'redux';
import indexReducer from './index/indexReducer.js';

let reducers = combineReducers({
    indexState: indexReducer
});

export default createStore(reducers);
