import React from 'react';
import router from './router'

export default class Main extends React.Component{
    render(){
        return <main>
            {router}
        </main>;
    }
}