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
        var required=false;
        switch (this.props.type){
            case 'h1':
                required=true;
                element=<h1 className='col-lg-10'>{this.state.text}</h1>;
                break;
            case 'h2':
                element=<h2 className='col-lg-10'>{this.state.text}</h2>;
                break;
            case 'h3':
                element=<h3 className='col-lg-10'>{this.state.text}</h3>;
                break;
            case 'p':
                element=<p className='col-lg-10'>{this.state.text}</p>;
                break;
            case 'url':
                required=true;
                element=<span className='url col-lg-10'>{this.state.text}</span>;
                break;
        }
        let key=+(new Date);
        if(required){
            this.addElementToStore(
                <div key={key} data-key={key} className={'row '+this.props.type+'-rowz'}>
                    {element}
                    <div className='col-lg-2'>
                        <button key={2} data-key={key} className='btn glyphicon glyphicon-edit' onClick={this.editElement.bind(this)}></button>
                    </div>
                </div>,required);
        }
        else{
            this.addElementToStore(
                <div key={key} data-key={key} className='row'>
                    {element}
                    <div className='col-lg-2'>
                        <button key={2} data-key={key} className='btn glyphicon glyphicon-edit' onClick={this.editElement.bind(this)}></button>
                        <button key={3} data-key={key} className='btn glyphicon glyphicon-remove-sign' onClick={this.remoteElement.bind(this)}></button>
                    </div>
                </div>,false);
        }
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

    addElementToStore(element, required){
        this.props.dispatch({type: 'ADD_ELEMENT', element: element, required: required});
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