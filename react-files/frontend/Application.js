import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import NavBar from './NavBar.js';
export default class Application extends React.Component{
    //constructor(){
    //    super(arguments[0]);
    //    this.state={navbar: <div/>};
    //}
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

