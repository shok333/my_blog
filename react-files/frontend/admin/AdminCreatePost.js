import React from 'react';
import AdminToolPanel from './AdminToolPanel';
import AdminNewPost from './AdminNewPost';
import {Provider} from 'react-redux';
import store from './../store.js';

export default class AdminCreatePost extends React.Component{
    render(){
        return (
            <div className="col-lg-9">
                <Provider store={store}>
                    <AdminToolPanel/>
                </Provider>
                <Provider store={store}>
                    <AdminNewPost/>
                </Provider>
            </div>
        );
    }
}