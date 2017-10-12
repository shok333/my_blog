import React from 'react';

export default function generalReducer(state=[],action=null){
    if(action.type=='REMOVE_ALL_IMAGES'){
        return [];
    }
    if(action.type=='REMOVE_IMAGE'){
        let newElementsFromRendering=state.filter((item)=>{
            if(action.key!=item.key){
                return item;
            }
        });
        return newElementsFromRendering;
    }
    if(action.type=='ADD_IMAGE'){
        return state.concat({key: action.key, image: action.image, smallImage: action.smallImage, imageForRendering: action.imageForRendering});
    }
    return state;
}