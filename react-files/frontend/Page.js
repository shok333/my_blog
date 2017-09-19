import React from 'react';
import { Status } from 'rrc';
export default class Page extends React.Component{
    constructor(){
        super(arguments[0]);
        window.scrollTo(0,0);//Временный скролл
        this.state={page: <div>555</div>};
    }
    componentDidMount(){
        $.get('web/'+this.props.location.pathname,(function(data){
            if(data){

                this.setState({page: <div>{JSON.parse(data).header}</div>});
            }
            else{
                this.setState({page: <div>
                    <h1>ERROR</h1>
                </div>});

            }

        }).bind(this));
    }
    componentWillReceiveProps(prevProps, prevState){
        console.log(prevProps.location.pathname);
        $.get('web'+prevProps.location.pathname,(function(data){
            if(data){

                this.setState({page: <div>{JSON.parse(data).header}</div>});
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
        return this.state.page;
    }
}