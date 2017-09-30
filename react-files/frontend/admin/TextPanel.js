import React from 'react';
import {Provider} from 'react-redux';
import store from '../store.js';
import { connect } from 'react-redux';
import EditTextPanel from './EditTextPanel';

class TextPanel extends React.Component{
    textareaBlur(event){
        this.setState({text: event.target.value});
    }

    cancel(){
        this.props.dispatch({type: 'ADD_ELEMENT_FOR_EDIT'});
    }

    textEnter(event){
        this.cancel();
        let element;
        switch (this.props.type){
            case 'h1':
                element=<h1>{this.state.text}</h1>;
                break;
            case 'h2':
                element=<h2>{this.state.text}</h2>;
                break;
            case 'h3':
                element=<h3>{this.state.text}</h3>;
                break;
            case 'p':
                element=<p>{this.state.text}</p>;
                break;
        }
        let key=+(new Date);
        this.addElementToStore(<div key={key}>
            {element}
            <button key={2} data-key={key} className='btn' onClick={this.editElement.bind(this)}>Редактировать</button>
            <button key={3} data-key={key} className='btn' onClick={this.remoteElement.bind(this)}>Удалить</button>
        </div>);
    }

    editElement(event){
        this.props.dispatch({type: 'ADD_ELEMENT_FOR_EDIT', element:
            <Provider store={store}>
                <EditTextPanel  keyOfElement={event.target.dataset.key}/>
            </Provider>});
    }

    remoteElement(event){
        this.props.dispatch({type: 'REMOVE_ELEMENT',key:event.target.dataset.key});
    }

    addElementToStore(element){
        this.props.dispatch({type: 'ADD_ELEMENT', element: element});
    }

    render(){
        return(
            <div className='text-panel'>
                <div id='container'>
                    <textarea onBlur={this.textareaBlur.bind(this)}/>
                </div>
                <div>
                    <button className='btn' onClick={this.textEnter.bind(this)}>Готово</button>
                    <button className='btn' onClick={this.cancel.bind(this)}>Отмена</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        adminState: state.adminState
    }
}
export default connect(mapStateToProps)(TextPanel);