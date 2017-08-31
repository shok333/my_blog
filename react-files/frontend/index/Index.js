import React from 'react';
import Post from './Post.js';
import './index.sass'
export default class Index extends React.Component{
    constructor(){
        super(arguments[0]);
        let postArray=this.props.postArray;
        let totalArray=[];
        let totalArrayIndex=0;

        for(let i=0;i<postArray.length;i++){
            if(i%5==0){
                if(postArray[i+1])
                    continue;
                else{
                    totalArray[totalArrayIndex]=(
                        <div className="row" key={totalArrayIndex}>
                            <Post key={i} number={i} width={6} header={postArray[i].header}/>
                        </div>
                    )
                }
            }
            if(i%5==1){
                totalArray[totalArrayIndex]=(
                    <div className="row" key={totalArrayIndex}>
                        <Post key={i-1} number={i-1} width={6} header={postArray[i-1].header}/>
                        <Post key={i} number={i} width={6} header={postArray[i].header}/>
                    </div>
                )
                totalArrayIndex++;
            }
            if(i%5==2){
                if(postArray[i+1])
                    continue;
                else{
                    totalArray[totalArrayIndex]=(
                        <div className="row" key={totalArrayIndex}>
                            <Post key={i} number={i} width={6} header={postArray[i].header}/>
                        </div>);
                }
            }
            if(i%5==3){
                if(postArray[i+1])
                    continue;
                else{
                    totalArray[totalArrayIndex]=(
                        <div className="row" key={totalArrayIndex}>
                            <div className="double-article col-lg-6">
                                <Post key={i-1} number={i-1} width={12} header={postArray[i-1].header}/>
                            </div>
                            <Post key={i} number={i} width={6} header={postArray[i].header}/>
                        </div>);
                }
            }
            if(i%5==4){
                totalArray[totalArrayIndex]=(
                    <div className="row" key={totalArrayIndex}>
                        <div className="double-article col-lg-6">
                            <Post key={i-2} number={i-2} width={12} header={postArray[i-2].header}/>
                            <Post key={i} number={i} width={12} header={postArray[i].header}/>
                        </div>
                        <Post key={i-1} number={i-1} width={6} header={postArray[i-1].header}/>
                    </div>);
            }
            totalArrayIndex++;
        }
        this.state={totalArray: totalArray};
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            {this.state.totalArray}
                        </div>
                    </div>
                </div>
            </div>);
    }
}