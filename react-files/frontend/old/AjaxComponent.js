import React from 'react';

export default class AjaxComponent extends React.Component{
    render(){
        let totalArray=this.props.totalArray.map(function(element,i)
        {
            return <li className="list-group-item" key={i}>{element}</li>
        });
        return (
            <ul className="list-group">
                {totalArray}
            </ul>);
    }
}