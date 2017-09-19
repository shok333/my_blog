import React from 'react';
export default class PostPageContainer extends React.Component{
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
        $.get('web'+prevProps.location.pathname,(function(data){
            if(data){

                this.setState({page: <h1>{JSON.parse(data).header}</h1>});
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
                    <div className="col-lg-8">
                        <div className="row">
                            {this.state.page}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}