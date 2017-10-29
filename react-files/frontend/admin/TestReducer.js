import React from 'react';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore,combineReducers,bindActionCreators,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

let pageActions = {
    addItem: function(item){
        return {type:'ADD_ITEM',payload: item}
    }
}

function loadImages(){
    return function(dispatch){
        dispatch({
            type: 'AJAX_REQUEST' //выведем на экран прелоадер
        });
    }
}

function firstReducer(state={},action=null){
    return state;
}
function secondReducer(state=[],action=null){
    switch(action.type){
        case 'ADD_ITEM':
            return [...state,action.payload];

        case 'AJAX_REQUEST':
            console.dir('AJAX_REQUEST');
            return state;

        case 'AJAX_SUCCESS':
            console.dir('AJAX_SUCCESS');
            return state;

        default :
            return state;
    };
}

let reducers=combineReducers({
    firstState: firstReducer,
    secondState: secondReducer
});

let initialObject={
    firstState: {initItem: 'init'},
    secondState: ['init_item']
};


function middleWare(store){
    return function(next){
        return function(action){
            console.dir(next);
            console.dir(action);
            return next(action);
        }
    }
}
function middleWare2(store){
    return function(next){
        return function(action){
            console.dir('2');
            return next(action);
        }
    }
}


let store = createStore(reducers, initialObject, applyMiddleware(middleWare,middleWare2));











class TestReducer extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={elements:null};
        //console.dir(store.getState());

        store.subscribe(()=>{
            let total=store.getState().secondState.map((item,i)=>{
                return <li key={i}>{item}</li>;
            });
            this.setState({elements:
                <ul>
                    {total}
                </ul>
            })
        });
    }
    render(){
        return <Provider store={store}>
            <div>
                <button onClick={this.addItem.bind(this)}>Добавить элемент</button>
                {this.state.elements}
            </div>
        </Provider>
    }
    addItem(){
        this.props.addItem('cms');
        //store.dispatch({type:'ADD_ITEM',item: 'item'});
    }
    componentDidMount(){
        //console.dir(this.props);
    }
}

function mapStateToProps(state){
    let newState=store.getState();
    return {
        firstState: newState.firstState,
        secondState: newState.secondState
    }
}

function mapDispatchToProps(dispatch){
    return {
        addItem: bindActionCreators(pageActions.addItem, store.dispatch)
        //addItem: store.dispatch(pageActions.addItem)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestReducer);