import React from 'react';

export default class AdminPanel extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={obj:<div>CCCC</div>};
    }
    componentDidMount(){
        $.get('/web/admin/root',function(data){
            console.dir(JSON.parse(data));
        });
    }
    render() {
        return this.state.obj;
    }
}