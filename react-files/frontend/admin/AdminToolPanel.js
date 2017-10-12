import React from 'react';
import { connect } from 'react-redux';
import TextPanel from './TextPanel.js';
import store from '../store.js';
import {Provider} from 'react-redux';
import ImageSizeElement from '../ImageSizeElement';


class AdminToolPanel extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={elementForEdit: <div/>};
    }
    addText(event){
        this.props.dispatch({type: 'ADD_ELEMENT_FOR_EDIT', element:
            <Provider store={store}>
                <TextPanel type={event.target.dataset.type}/>
            </Provider>});
    }
    addImage(event){
        var fr = new FileReader();
        fr.addEventListener("load", (function (event) {
            this.props.dispatch({type: 'ADD_ELEMENT_FOR_EDIT', element:
                <Provider store={store}>
                    <ImageSizeElement loadedImage={event.target.result} square={false}/>
                </Provider>});
        }).bind(this));
        fr.readAsDataURL(event.target.files[0]);


    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({elementForEdit: store.getState().adminState.elementForEdit});
        });
    }
    render(){
        return (
            <div className='tools'>
                <button className='btn' data-type='h1' onClick={this.addText.bind(this)}>Заголовок H1</button>
                <button className='btn' data-type='url' onClick={this.addText.bind(this)}>Url</button>
                <button className='btn' data-type='h2' onClick={this.addText.bind(this)}>Заголовок H2</button>
                <button className='btn' data-type='h3' onClick={this.addText.bind(this)}>Заголовок H3</button>
                <button className='btn' data-type='p' onClick={this.addText.bind(this)}>Абзац</button>
                <div className="file-upload">
                    <label>
                        <input type="file" onChange={this.addImage.bind(this)} name="file"/>
                        <span className='btn'>Картинка</span>
                    </label>
                </div>



                {this.state.elementForEdit}

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        adminState: state.adminState
    }
}
export default connect(mapStateToProps)(AdminToolPanel);