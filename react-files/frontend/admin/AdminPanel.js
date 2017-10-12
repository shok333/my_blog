import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AdminMenu from './AdminMenu';
import AdminUserList from './AdminUserList';
import AdminPostList from './AdminPostList';
import AdminCreatePost from './AdminCreatePost';

export default class AdminPanel extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={obj:<div></div>, render: <div/>};

    }
    componentDidMount(){
        $.get('/web/get-status',(data) => {
            if(data === 'user'){
                this.setState({render: <div>Извините, но данное поле доступно только админам</div>});
            }
            else if(data === 'admin'){
                this.setState({render:
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="row">
                                    <AdminMenu/>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <Switch>
                                        <Route exact path='/admin/create-post' component={AdminCreatePost}/>
                                        <Route exact path='/admin/post-list' component={AdminPostList}/>
                                        <Route exact path='/admin/user-list' component={AdminUserList}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>});
            }
            else{
                this.setState({render: <div>Извините, но данное поле доступно только админам</div>});
            }
        });
    }
    render() {
        return this.state.render;
    }
}