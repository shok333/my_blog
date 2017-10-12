import React from 'react';
import router from './router'
import store from './store.js';
import {Provider} from 'react-redux';

export default class Main extends React.Component{
    render(){
        return <main>
            <Provider store={store}>
                {router}
            </Provider>
        </main>;
    }
}