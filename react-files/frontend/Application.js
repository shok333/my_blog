import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import NavBar from './NavBar.js';
export default class Application extends React.Component{
    constructor(){
        super(arguments[0]);
        document.cookie = "react=react";
        window.onbeforeunload = function() {
            function delete_cookie ( cookie_name )
            {
                var cookie_date = new Date ( );  // Текущая дата и время
                cookie_date.setTime ( cookie_date.getTime() - 1 );
                document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
            }
            delete_cookie('react');
        };
    }
    //clickFunc(){
    //    //import NavBar from './NavBar';
    //    require.ensure([],(function(){
    //        let NavBar = require('./NavBar').default;
    //        this.setState({navbar: <NavBar/>});
    //    }).bind(this));
    //}
    render(){
        return <div>
            <Header/>
            <NavBar/>
            <Main/>
            <Footer/>
        </div>;
    }
}

