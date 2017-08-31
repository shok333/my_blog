import {Switch, Route} from 'react-router-dom';
import React from 'react';
import IndexContainer from './index/IndexContainer';

export default(
    <Switch>
        <Route exact path='/' component={IndexContainer}/>
        <Route exact path='/about' render={()=>(<h1>about</h1>)}/>
    </Switch>
);