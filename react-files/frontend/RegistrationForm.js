import React from 'react';
import ImageSizeElement from './ImageSizeElement';

export default class RegistrationForm extends React.Component{
    constructor(){
        super(arguments[0]);
        let fileInput=<input id='file' type="file" onChange={this.imageUploaded.bind(this)}/>;
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
                {fileInput}
                <input className="btn btn-default" type="submit" value="Отправить" />
            </form>,
            imagePanel: <div></div>,
            submitOff: false
        };

    }
    setImages(image,smallImage){
        this.setState({image: image});
        this.setState({smallImage: smallImage});
    }

    imageUploaded(event){
        var fr = new FileReader();
        this.setState({imagePanel: <div></div>});
        fr.addEventListener("load", (function (event) {
            this.setState({imagePanel:<ImageSizeElement loadedImage={event.target.result} setImages={this.setImages.bind(this)}/>});
        }).bind(this));
        fr.readAsDataURL(event.target.files[0]);

    }
    submit(event){
        event.preventDefault();
        if(this.state.submitOff){
            return;
        }
        this.setState({submitOff: true});
        let name=event.currentTarget.childNodes[0].childNodes[2].value;
        let email=event.currentTarget.childNodes[1].childNodes[2].value;
        let password=event.currentTarget.childNodes[2].childNodes[2].value;

        var formData = new FormData($(this).parents('form').get(0));

        if(this.state.image)
            formData.append('image', this.state.image);

        if(this.state.smallImage)
            formData.append('smallImage', this.state.smallImage);

        //присоединяем остальные поля
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);

        var param = $('meta[name=csrf-param]').attr("content");
        var token = $('meta[name=csrf-token]').attr("content");

        formData.append(param, token);

        $.ajax({url:'/web/registration', type: 'post', data: formData,processData: false, contentType: false,success:((data)=>{
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
                            {this.state.imagePanel}
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}
