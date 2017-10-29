import React from 'react';
import {Link} from 'react-router-dom';

export default class AdminMenu extends React.Component{
    render(){
        return (
            <div id='admin-menu' className="list-group">
                <Link to='/admin/create-post' className="list-group-item" >Создать новый пост</Link>
                <Link to='/admin/user-list' className="list-group-item" >Список пользователей</Link>
                <Link to='/admin/post-list' className="list-group-item" >Список постов</Link>
                <Link to='/admin/test' className="list-group-item" >test</Link>

            </div>
        );
    }
}