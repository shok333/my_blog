import React from 'react';
import Post from './Post.js';
import './index.sass'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Index extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={totalArray: <div></div>,index: 0, keyIndex: 0};
    }
    postList(data){
        let postArray=data;

        let totalArray=[];
        let totalArrayIndex=0;

        for(let i=0;i<postArray.length;i++){
            if(i%5==0){
                if(postArray[i+1])
                    continue;
                else{
                    totalArray[totalArrayIndex]=(
                        <div className="row" key={this.state.keyIndex+totalArrayIndex}>
                            <Post key={i} number={i} width={6} header={postArray[i].header} a={postArray[i].a} image={postArray[i].image}/>
                        </div>
                    )
                }
            }
            if(i%5==1){
                totalArray[totalArrayIndex]=(

                        <div className="row" key={this.state.keyIndex+totalArrayIndex}>
                            <ReactCSSTransitionGroup transitionName="post-item-1" transitionAppear={true} transitionAppearTimeout={5000} transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
                                <Post key={i-1} number={i-1} width={6} header={postArray[i-1].header} a={postArray[i].a} image={postArray[i].image}/>
                            </ReactCSSTransitionGroup>
                            <ReactCSSTransitionGroup transitionName="post-item-2" transitionAppear={true} transitionAppearTimeout={7000} transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
                                <Post key={i} number={i} width={6} header={postArray[i].header} a={postArray[i].a} image={postArray[i].image}/>
                            </ReactCSSTransitionGroup>
                        </div>

                );
                totalArrayIndex++;
            }
            if(i%5==2){
                if(postArray[i+1])
                    continue;
                else{
                    totalArray[totalArrayIndex]=(

                            <div className="row" key={this.state.keyIndex+totalArrayIndex}>
                                <Post key={i} number={i} width={6} header={postArray[i].header} a={postArray[i].a} image={postArray[i].image}/>
                            </div>

                    );
                }
            }
            if(i%5==3){
                if(postArray[i+1])
                    continue;
                else{
                    totalArray[totalArrayIndex]=(
                        <div className="row" key={this.state.keyIndex+totalArrayIndex}>
                            <div className="double-article col-lg-6">
                                <Post key={i-1} number={i-1} width={12} header={postArray[i-1].header} a={postArray[i].a} image={postArray[i].image}/>
                            </div>
                            <Post key={i} number={i} width={6} header={postArray[i].header} a={postArray[i].a} image={postArray[i].image}/>
                        </div>);
                }
            }
            if(i%5==4){
                totalArray[totalArrayIndex]=(
                    <div className="row" key={this.state.keyIndex+totalArrayIndex}>
                        <div className="double-article col-lg-6">
                            <ReactCSSTransitionGroup transitionName="post-item-3" transitionAppear={true} transitionAppearTimeout={5000} transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
                                <Post key={i-2} number={i-2} width={12} header={postArray[i-2].header} a={postArray[i].a} image={postArray[i].image}/>
                            </ReactCSSTransitionGroup>
                            <ReactCSSTransitionGroup transitionName="post-item-5" transitionAppear={true} transitionAppearTimeout={5000} transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
                                <Post key={i} number={i} width={12} header={postArray[i].header} a={postArray[i].a} image={postArray[i].image}/>
                            </ReactCSSTransitionGroup>
                        </div>
                        <ReactCSSTransitionGroup transitionName="post-item-4" transitionAppear={true} transitionAppearTimeout={5000} transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
                            <Post key={i-1} number={i-1} width={6} header={postArray[i-1].header} a={postArray[i].a} image={postArray[i].image}/>
                        </ReactCSSTransitionGroup>

                    </div>);
                totalArrayIndex++;
            }

        }
        return totalArray;

    }
    //componentDidMountt(){
    //    function addElements(){
    //        if((main.offsetHeight+main.offsetTop)-window.pageYOffset<920){
    //            this.setState({totalArray: this.state.totalArray.concat([
    //                <ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
    //                    <div className="row" key={1000}>
    //                        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
    //                            <Post key={100} number={100} width={6} header={'cms'} a={postArray[1].a} image={postArray[1].image}/>
    //                        </ReactCSSTransitionGroup>
    //                        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={10000} transitionEnter={false} transitionLeave={false}>
    //                            <Post key={101} number={101} width={6} header={'cms'} a={postArray[1].a} image={postArray[1].image}/>
    //                        </ReactCSSTransitionGroup>
    //                    </div>
    //                </ReactCSSTransitionGroup>
    //            ])});
    //            document.removeEventListener('scroll',addElements.bind(this));
    //        }
    //
    //    }
    //    let postArray=this.props.postArray;
    //    let main = document.querySelector('main');
    //    document.addEventListener('scroll',addElements.bind(this));
    //}
    addElements(){
        let main = document.querySelector('main');
        //let container = $('.container')[0];
        //console.log(container.offset().top);
        if((main.offsetHeight+main.offsetTop)-window.pageYOffset<750){
            console.log('cms');
            window.onscroll=null;
            this.props.getPostList.call(this,this.state.index);
        }
    }
    componentDidMount(){
        this.props.getPostList.call(this);
        window.onscroll=this.addElements.bind(this);


    }
    render(){
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                {this.state.totalArray}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}