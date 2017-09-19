import React from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={user: <div className='user-bar'></div>};
    }
    componentDidMount(){
        $.getJSON('web/login-test',((data)=>{
           if(data){
               this.setState({user: <div className='user-bar'>Привет {data.name}, как жизнь?</div>});
           }
        }).bind(this));
    }
    render(){
        return <nav className="navbar">
            <div className="container">
                <div className="row">
                    <ul className="nav navbar-nav col-lg-12">
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/about">О сайте</NavLink></li>
                        <li><NavLink to="/cms">CMS</NavLink></li>
                        <li><NavLink to="/inika">inika</NavLink></li>
                        {this.state.user}
                    </ul>
                </div>
            </div>
        </nav>;
    }
}