import React from 'react';

export default function adminReducer(state={elementsFromRendering:[],elementsFromDB:[],elementForEdit:null},action=null){
    if(action.type=='ADD_ELEMENT'){
        let element= action.element.props.children[0];

        if(action.required){
            var elementsFromRendering= [action.element].concat(state.elementsFromRendering);

            var newHTMLElement={type: element.type, value: element.props.children, key: action.element.key};
            var elementsFromDB=[{key: action.element.key, value: newHTMLElement.value, type:newHTMLElement.type}].concat(state.elementsFromDB);
        }
        else{
            var elementsFromRendering= state.elementsFromRendering.concat(action.element);

            var newHTMLElement={type: element.type, value: element.props.children, key: action.element.key};
            var elementsFromDB=state.elementsFromDB.concat({key: action.element.key, value: newHTMLElement.value, type:newHTMLElement.type});
        }

        return {elementsFromRendering:elementsFromRendering,elementsFromDB:elementsFromDB,elementForEdit:state.elementForEdit};
    }

    if(action.type=='REMOVE_ELEMENT'){
        let newElementsFromRendering=state.elementsFromRendering.filter((item)=>{
            if(action.key==item.key){
                return false;
            }
            return true;
        });
        let newElementsFromDB=state.elementsFromDB.filter((item)=>{
            if(action.key==item.key){
                return false;
            }
            return true;
        });

        return {elementsFromRendering: newElementsFromRendering,elementsFromDB: newElementsFromDB,elementForEdit:state.elementForEdit};
    }

    if(action.type=='REMOVE_ALL_ELEMENTS'){
        return {elementsFromRendering:[],elementsFromDB:[],elementForEdit:null};
    }

    if(action.type=='UPDATE_ELEMENT'){
        let type;
        let newElementsFromRendering=state.elementsFromRendering.map((item)=>{
            if(action.key==item.key){
                console.dir(item.props.children[0])
                type=item.props.children[0].type;
                return (<div key={action.key} data-key={action.key} className='row'>{[React.createElement(item.props.children[0].type,{key: 1, className: item.props.children[0].props.className},action.value),item.props.children[1],item.props.children[2]]}</div>);
            }
            return item;
        });
        let newElementsFromDB=state.elementsFromDB.map((item)=>{
            if(action.key==item.key){
                return '<'+type+'>'+action.value+'</'+type+'>';
            }
        });
        return {elementsFromRendering: newElementsFromRendering,elementsFromDB: state.elementsFromDB,elementForEdit:<div/>};
    }

    if(action.type=='ADD_ELEMENT_FOR_EDIT'){
        if(action.key){
            action.element.children='gfdsd';
        }
        return {elementsFromRendering:state.elementsFromRendering,
                elementsFromDB:state.elementsFromDB,
                elementForEdit:action.element};
    }

    if(action.type=='REMOVE_ELEMENT_FOR_EDIT'){
        return {elementsFromRendering:state.elementsFromRendering,
                elementsFromDB:state.elementsFromDB,
                elementForEdit:<div/>};
    }
    return state;
}