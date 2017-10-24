import React from 'react';
import Comments from './Comments.js';

export default class PostPageContainer extends React.Component{
    constructor(){
        super(arguments[0]);
        window.scrollTo(0,0);//Временный скролл
        this.state={page: null};
    }
    componentDidMount(){
        $.get('web/'+this.props.location.pathname,(function(data){
            if(data){

                let postElements=JSON.parse(data);

                postElements=postElements.sort((a,b)=>{
                    if(a.number>b.number){
                        return 1;
                    }
                    if(a.number<b.number){
                        return -1;
                    }
                    return 0;
                });

                let postElementObjects=postElements.map((item,i)=>{
                    if(item.type.toUpperCase()=='img'.toUpperCase()){
                        return <div className='row'>
                            {React.createElement(item.type,{src: '/web/images/small-user-image/'+item.value,key:i,className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12'},null)}
                        </div>;
                    }
                    else{
                        return <div className='row'>
                            {React.createElement(item.type,{key:i,className: 'col-lg-12 '},item.value)}
                        </div>;
                    }
                });
                this.setState({page: <div>{postElementObjects}</div>});
            }
            else{
                this.setState({page: <div>
                    <h1>ERROR</h1>
                </div>});

            }

        }).bind(this));
    }
    componentWillReceiveProps(prevProps, prevState){
        $.get('web/'+this.props.location.pathname,(function(data){
            if(data){

                let postElements=JSON.parse(data);

                postElements=postElements.sort((a,b)=>{
                    if(a.number>b.number){
                        return 1;
                    }
                    if(a.number<b.number){
                        return -1;
                    }
                    return 0;
                });

                let postElementObjects=postElements.map((item,i)=>{
                    if(item.type.toUpperCase()=='img'.toUpperCase()){
                        return React.createElement(item.type,{src: '/web/images/small-user-image/'+item.value,key:i},null);
                    }
                    else{
                        return React.createElement(item.type,{key:i},item.value);
                    }
                });
                this.setState({page: <div>{postElementObjects}</div>});
            }
            else{
                this.setState({page: <div>
                    <h1>ERROR</h1>
                </div>});

            }

        }).bind(this));
        return true;
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 post">
                            {this.state.page}
                        <Comments/>
                    </div>
                </div>
            </div>
        );
    }
}