import React from 'react';

export default class LoginForm extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={message: ''};
    }
    submit(event){
        event.preventDefault();
        let email=event.currentTarget.childNodes[0].childNodes[2].value;
        let password=event.currentTarget.childNodes[1].childNodes[2].value;
        $.post('web/login',{email: email, password: password},(function(data){
            this.setState({message: <div className="alert alert-danger">{data}</div>});
            console.log(data);
        }).bind(this));

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div>{this.state.message}</div>
                        </div>
                        <div className="row">
                            <form onSubmit={this.submit.bind(this)}>
                                <div className="form-group">
                                    <label>E-mail:</label><br />
                                    <input type="email" className="form-control" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label>Пароль:</label><br />
                                    <input type="password" className="form-control" type="text"/>
                                </div>
                                <input className="btn btn-default" type="submit" value="Отправить" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    

}
