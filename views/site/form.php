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
</form