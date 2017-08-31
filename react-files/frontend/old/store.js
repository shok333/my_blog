import {createStore,combineReducers} from 'redux';

function ajaxComponentReducer(state=[],action){
    if(action.type==='ADD_TRACK_LIST'){
        return action.data;
    }
    return state
}
function postComponentReducer(state=[],action){
    if(action.type==='ADD_POST_ELEMENTS'){
        return action.data;
    }
    return state
}
const redusers = combineReducers({
    ajaxComponentState:ajaxComponentReducer,
    postComponentState:postComponentReducer
});
const store=createStore(redusers);
//store.dispatch({type:'ADD_TRACK_LIST',data:'Белый снег, серый лёд'});
export default store;