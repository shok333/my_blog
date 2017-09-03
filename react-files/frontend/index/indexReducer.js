import React from 'react';

export default function indexReducer(state=[],action=null){
    if(action.type=='ADD_POSTS'){
        return state.concat(action.postArray);
    }
    return state;
}