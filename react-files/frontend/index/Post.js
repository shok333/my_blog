import React from 'react';
import {Link} from 'react-router-dom';

export default class Post extends React.Component{
    constructor() {
        super(arguments[0]);
        if(this.props.number%5==0||this.props.number%5==4){
            this.state={post:
                    <article className={"col-lg-"+this.props.width+" article small-article-right"}>
                        <div className="row">
                            <div className="col-lg-6 image col-lg-push-6" style={{backgroundImage: 'url('+this.props.image+')'}}>
                                <div className="arrow"></div>
                            </div>
                            <div className="col-lg-6 header col-lg-pull-6">
                                <h2>{this.props.header}</h2>
                            </div>
                        </div>
                        <div className='border'/>
                    </article>
                };
        }
        else if(this.props.number%5==1||this.props.number%5==2){
            this.state={post:
                <article className={"col-lg-"+this.props.width+" article small-article-left"}>
                    <div className="row">
                        <div className="col-lg-6 image "  style={{backgroundImage: 'url('+this.props.image+')'}}>
                            <div className="arrow"></div>
                        </div>
                        <div className="col-lg-6 header">
                            <h2>{this.props.header}</h2>
                        </div>
                    </div>
                    <div className='border'/>
                </article>};
        }
        else{
            this.state={post:
                <article className="col-lg-6 article big-article-right">
                    <div className="row">
                        <div className="col-lg-12 image" style={{backgroundImage: 'url('+this.props.image+')'}}>
                            <div className="arrow"></div>
                            <div className="row">
                                <div className="col-lg-6 header">
                                    <h2>{this.props.header}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border'/>
                </article>}
        }
    }
    render() {
        return this.state.post;
    }
};