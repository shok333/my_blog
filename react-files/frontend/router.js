import {Switch, Route} from 'react-router-dom';
import { Status } from 'rrc';
import React from 'react';
import IndexContainer from './index/IndexContainer';
import PostPageContainer from './post/PostPageContainer.js';
import AdminPanel from './admin/AdminPanel.js';
import LoginForm from './LoginForm.js';
import RegistrationForm from './RegistrationForm.js';

export default(
    <Switch>
        <Route exact path='/' component={IndexContainer}/>
        <Route exact path='/login-form' component={LoginForm}/>
        <Route exact path='/registration-form' component={RegistrationForm}/>
        <Route exact path='/about' render={()=>(<h1>about</h1>)}/>
        <Route path='/admin' component={AdminPanel}/>
        <Route component={PostPageContainer}/>
    </Switch>
);