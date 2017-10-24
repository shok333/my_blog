import React from 'react';
import {Link} from 'react-router-dom';

export default class Post extends React.Component{
    constructor() {
        super(arguments[0]);
        if(this.props.number%5==0||this.props.number%5==4){
            this.state={post:
                    <article className={"col-xs-"+this.props.width+" col-sm-"+this.props.width+" col-md-"+this.props.width+" col-lg-"+this.props.width+" article small-article-right"}>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 image col-lg-push-6" style={{backgroundImage: 'url('+'/web/images/small-user-image/'+this.props.image+')'}}>
                                <div className="arrow"></div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 header col-lg-pull-6">
                                <span>{this.props.header}</span>
                            </div>
                        </div>
                        <div className='border'/>
                    </article>
                };
        }
        else if(this.props.number%5==1||this.props.number%5==2){
            this.state={post:
                <article className={"col-xs-"+this.props.width+" col-sm-"+this.props.width+" col-md-"+this.props.width+" col-lg-"+this.props.width+" article small-article-left"}>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 image "  style={{backgroundImage: 'url('+'/web/images/small-user-image/'+this.props.image+')'}}>
                            <div className="arrow"><div></div></div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 header">
                            <span>{this.props.header}</span>
                        </div>
                    </div>
                    <div className='border'/>
                </article>};
        }
        else{
            this.state={post:
                <article className="col-xs-6 col-sm-6 col-md-6 col-lg-6 article big-article-right">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image" style={{backgroundImage: 'url('+'/web/images/small-user-image/'+this.props.image+')'}}>
                            <div className="arrow">
                                <div></div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 header">
                                    <span>{this.props.header}</span>
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