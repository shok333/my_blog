import React from 'react';

export default class TrackList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                <li className="list-group-item">Zvezda po imeni</li>
                <li className="list-group-item">Peremen</li>
            </ul>
        );
    }
}