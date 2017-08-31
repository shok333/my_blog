import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import UserList from './UserList'
export default class UserListLayout extends React.Component{
    render(){
        return (
            <main>
                <UserList/>
            </main>
        );
    }
}