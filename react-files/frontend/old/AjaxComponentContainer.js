import React from 'react';
import AjaxComponent from './AjaxComponent';
import {connect} from 'react-redux';
class AjaxComponentContainer extends React.Component{
    updateList(){
        $.get('/web/inika',function(data){
            console.log('ajaxLog');
            console.dir(data);
            this.props.dispatch({type:'ADD_TRACK_LIST',data:JSON.parse(data)});
        }.bind(this));
    }
    componentWillUnmount(){
        //clearInterval(this.ajaxUpdate);
    }
    componentWillMount(){
        this.updateList();
        //this.ajaxUpdate=setInterval(this.updateList.bind(this),5000);
    }
    render(){
        return <AjaxComponent totalArray={this.props.store}/>;
    }
}
export default connect(
    (store)=>{return {store:store.ajaxComponentState}},
    (dispatch)=>{return {dispatch:dispatch}}
)(AjaxComponentContainer);