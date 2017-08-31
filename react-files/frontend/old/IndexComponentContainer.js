import React from 'react';
import IndexComponent from './IndexComponent';
import {connect} from 'react-redux';
class IndexComponentContainer extends React.Component{
    updateList(){
        $.get('/index',function(data){
            this.props.dispatch({type:'ADD_POST_ELEMENTS',data:JSON.parse(data)});
        }.bind(this));
    }
    componentWillUnmount(){
        clearInterval(this.ajaxUpdate);
    }
    componentWillMount(){
        this.updateList();
        this.ajaxUpdate=setInterval(this.updateList.bind(this),5000);
    }
    render(){
        return <IndexComponent totalArray={this.props.store}/>;
    }
}
export default connect(
    (store)=>{return {store:store.postComponentState}},
    (dispatch)=>{return {dispatch:dispatch}}
)(IndexComponentContainer);