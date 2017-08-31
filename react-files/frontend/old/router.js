import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Error404 from './Error404';
import UserListLayout from './UserListLayout';
import AjaxComponentContainer from './AjaxComponentContainer';
import TrackList from './TrackList';
import IndexComponentContainer from './IndexComponentContainer';

export default(
    <Switch>
        <Route exact path='/' component={UserListLayout}/>
        <Route exact path='/track-list' component={TrackList}/>
        <Route exact path='/ajax' component={AjaxComponentContainer}/>
        <Route exact path='/indexx' component={IndexComponentContainer}/>
        <Route component={Error404}/>
    </Switch>);