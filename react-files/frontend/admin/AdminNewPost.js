import React from 'react';
import dragula from 'dragula';
import { connect } from 'react-redux';
import store from '../store.js';

class AdminNewPost extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={elements: <div/>};
    }
    componentDidMount(){
        dragula([document.querySelector('#drag')]);
        let state=store.getState();
        this.setState({elements: state.adminState.elementsFromRendering});
        store.subscribe(()=>{
            let state=store.getState();
            this.setState({elements: state.adminState.elementsFromRendering});
        });
    }
    componentWillMount(){

    }
    render(){
        return (
            <div id='drag' className='container'>
                {this.state.elements}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        adminState: state.adminState //Указываем state у store, относящийся к данному компоненту.
        //В props будут указаны state относящийся к этому компоненту(С именем adminState, который мы указали в имени параметра объекта) и метод dispatch
    }
}
export default connect(mapStateToProps)(AdminNewPost);