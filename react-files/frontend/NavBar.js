import React from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends React.Component{
    render(){
        return <nav className="navbar">
            <div className="container">
                <div className="row">
                    <ul className="nav navbar-nav col-lg-12">
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/about">О сайте</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>;
    }
}