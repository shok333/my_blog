import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AdminMenu from './AdminMenu';
import AdminUserList from './AdminUserList';
import AdminPostList from './AdminPostList';
import AdminCreatePost from './AdminCreatePost';
import TestReducer from './TestReducer.js'

export default class AdminPanel extends React.Component{
    constructor() {
        super(arguments[0]);
        this.state = {obj: <div></div>, render: <div/>};
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
                            <Switch>
                                <Route exact path='/admin/create-post' component={AdminCreatePost}/>
                                <Route exact path='/admin/post-list' component={AdminPostList}/>
                                <Route exact path='/admin/user-list' component={AdminUserList}/>
                                <Route exact path='/admin/test' component={TestReducer}/>
                            </Switch>


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