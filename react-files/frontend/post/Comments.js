import React from 'react';
import ComponentsElement from './CommentsElement.js';

export default class Comments extends React.Component{
    render(){
        return (<div className="comments">
                    <h3 className="title-comments">Комментарии (6)</h3>
                    <div className="media-list">
                        <ComponentsElement children={<ComponentsElement/>}/>
                        <ComponentsElement/>
                    </div>
                </div>);
    }
}