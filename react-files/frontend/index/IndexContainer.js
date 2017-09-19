import React, {Component} from 'react';
import Index from './Index';
import {connect} from 'react-redux';

class IndexContainer extends Component{
    render(){
        return <Index getPostList={this.getPostList}/>;
    }
    getPostList(index=0){
        let state=this.state.totalArray;
        if(state.type=='div'){
            state=[];
        }
        if(this.state.id!=99999999){
            $.getJSON('web/get-posts.json',{index: index},(function(data){
                let total=state.concat(this.postList(data));
                let id;
                if(data.length>0){
                    id=data[data.length-1].id;
                }
                else{
                    id=this.state.id=99999999;
                }
                this.setState({totalArray: total,index: id,keyIndex: this.state.keyIndex+2});
                window.onscroll=this.addElements.bind(this);
            }).bind(this));
        }

    }
    componentWillUnmount(){
        window.onscroll=null;
    }

}

export default connect(
        state =>({stateTest :state}),
        dispatch => ({})
)(IndexContainer);