import React, {Component} from 'react';
import Index from './Index';

export default class IndexContainer extends Component{
    constructor(){
        super(arguments[0]);
        let postArray=[];
        for(let i=0; i<8; i++){
            postArray[i]={
                header: 'Inika',
                p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum ipsam iusto magni! Aperiam cupiditate fuga incidunt ipsum maiores, natus nihil nobis nostrum perferendis possimus praesentium quis sint sit velit.'
            }
        }
        this.state={postArray: postArray};
    }
    render(){
        return <Index postArray={this.state.postArray}/>;
    }
}