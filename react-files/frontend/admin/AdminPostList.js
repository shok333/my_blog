import React from 'react';

export default class AdminPostList extends React.Component{
    render(){
        return (
            <table className='table'>
                <thead>
                <tr>
                    <th></th>
                    <th>Статья</th>
                    <th>Автор</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img src="http://avotarov.net/picture/avatar-100/kartinki/10.gif" alt=""/></td>
                    <td>О Николае Чеулзе</td>
                    <td>Навальный</td>
                    <td><button className='btn'>Редактировать</button><button className='btn'>Удалить</button></td>

                </tr>
                </tbody>
            </table>
        );
    }
}