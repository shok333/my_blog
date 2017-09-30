import React from 'react';
import {Provider} from 'react-redux';
import store from '../store.js';
import { connect } from 'react-redux';

class EditTextPanel extends React.Component{
    constructor(){
        super(arguments[0]);
        let elements=store.getState().adminState.elementsFromRendering;
        elements.forEach((item)=>{
            if(item.key==this.props.keyOfElement){
                this.state={textForEdit: item.props.children[0].props.children};
            }
        });
        console.dir(elements);
    }
    textareaBlur(event){
        this.setState({text: event.target.value});
    }
    cancel(){
        this.props.dispatch({type: 'ADD_ELEMENT_FOR_EDIT'});
    }
    componentDidMount(){
        let a=9;
    }
    updateElement(event){
        this.props.dispatch({type: 'UPDATE_ELEMENT', value: this.state.text, key: this.props.keyOfElement});
    }
    render(){
        return(
            <div className='text-panel'>
                <div id='container'>
                    <textarea ref='textarea' onBlur={this.textareaBlur.bind(this)} defaultValue={this.state.textForEdit}/>
                </div>
                <div>
                    <button className='btn' onClick={this.updateElement.bind(this)}>Готово</button>
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
export default connect(mapStateToProps)(EditTextPanel);