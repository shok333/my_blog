import React from 'react';
import dragula from 'dragula';
import { connect } from 'react-redux';
import store from '../store.js';

class AdminNewPost extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={elements: null, submitButton: null};
    }
    componentDidMount(){
        dragula([document.querySelector('#drag')]);
        let state=store.getState();
        this.setState({elements: state.adminState.elementsFromRendering});
        store.subscribe(()=>{
            let state=store.getState().adminState.elementsFromRendering;
            if(state.length==0){
                this.setState({elements: state, submitButton: <div/>});
            }
            else{
                this.setState({elements: state, submitButton: <button className='btn' onClick={this.createPost.bind(this)}>Опубликовать пост</button>});
            }
        });
    }
    createPost(){
        let elementsForDB=store.getState().adminState.elementsFromDB;
        let generalState=store.getState().generalState;
        let keyArray=[];
        let formData=new FormData();
        let url=false;
        let h1=false;
        let image=false;
        document.querySelector('#drag').childNodes.forEach((item)=>{
            let key=item.dataset.key;
            if(key){
                keyArray.push(key);
                if(item.childNodes[0].tagName.toUpperCase()==='IMG'){
                    generalState.forEach((item)=>{
                        if(key==item.key){
                            formData.append(item.key,item.image);
                            formData.append('s'+item.key,item.smallImage);
                            image=true;
                        }
                    });
                }
                else{
                    console.dir(elementsForDB);
                    elementsForDB.forEach(function(item){
                        if(item.key==key){
                            if(item.type.toUpperCase()=='span'.toUpperCase()){
                                url=true;
                            }
                            if(item.type.toUpperCase()=='H1'.toUpperCase()){
                                h1=true;
                            }
                            formData.append(key,JSON.stringify(item));
                        }
                    })

                }
            }

        });

        formData.append('keyArray',JSON.stringify(keyArray));
        var param = $('meta[name=csrf-param]').attr("content");
        var token = $('meta[name=csrf-token]').attr("content");
        if(h1){
            if(url){
                if(image){
                    formData.append(param, token);
                    this.ajax=$.ajax({url:'/web/admin/create-new-post', type: 'post', data: formData, processData: false, contentType: false,success:((data)=>{
                        alert('ok');
                    })});
                }
                else{
                    alert('Добавьте изображение ');
                }
            }
            else{
                alert('Добавьте url страницы');
            }
        }
        else{
            alert('Добавьте заголовок H1');
        }
    }
    componentWillUnmount(){
        if(this.ajax){
            this.ajax.abort();
        }
    }
    render(){
        return (
           <div>
               <div id='drag' className='admin'>
                   {this.state.elements}
               </div>
               {this.state.submitButton}
           </div>
        )
    }
}

function mapStateToProps(state){
    return {
        adminState: state.adminState //Указываем state у store, относящийся к данному компоненту.
        //В props будут указаны state относящийся к этому компоненту(С именем adminState, который мы указали в имени параметра объекта) и метод dispatch
    }
}
export default connect(mapStateToProps)(AdminNewPost);