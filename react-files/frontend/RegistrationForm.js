import React from 'react';

export default class RegistrationForm extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={data:
            <form onSubmit={this.submit.bind(this)} encType='multipart/form-data'>
                <div className="form-group">
                    <label>Имя:</label><br />
                    <input type="name" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label>E-mail:</label><br />
                    <input type="email" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label>Пароль:</label><br />
                    <input type="password" className="form-control" type="text"/>
                </div>
                <input id='file' type="file"/>
                <input className="btn btn-default" type="submit" value="Отправить" />
            </form>
        };
    }
    submit(event){
        event.preventDefault();
        let name=event.currentTarget.childNodes[0].childNodes[2].value;
        let email=event.currentTarget.childNodes[1].childNodes[2].value;
        let password=event.currentTarget.childNodes[2].childNodes[2].value;

        var formData = new FormData($(this).parents('form').get(0));

        formData.append('file_v', event.currentTarget.childNodes[3].files[0]);

        //присоединяем остальные поля
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);

        console.dir(event.currentTarget.childNodes[3].value);

        $.ajax({url:'web/registration', type: 'post', data: formData,processData: false, contentType: false,success:((data)=>{
            if(data==='ok'){
                this.setState({data: <div>Подтвердите email, перейдя по ссылке отправленной на email</div>});
            }
        }).bind(this)});

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            {this.state.data}
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}
