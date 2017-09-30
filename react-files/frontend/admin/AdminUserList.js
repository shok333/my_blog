import React from 'react';
import {Link} from 'react-router-dom';

export default class AdminUserList extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={page: <div/>, index: 0, tbody: [], preloader: <div className='preloader'><img src={'/web/images/prelodaer.gif'} alt=""/></div>};
    }
    deleteUser(event){
        if(confirm('Забанить пользователя?')){
            $.get(location.origin+'/web/admin/ban-user',{id: event.target.dataset.id},(data)=>{
                alert(data);
                this.state.page.splice(event.target.dataset.id-1,1);
                this.setState({page: this.state.page});
            })
        }
    }
    loadUserList(){
        this.setState({preloader: <div className='preloader'><img src={'/web/images/prelodaer.gif'} alt=""/></div>});
        $.getJSON(location.origin+'/web/admin/user-list',{index:this.state.index},(function(data){
            if(data.length!=0){

                let total=data.map((item,i)=>{
                    return (<tr key={this.state.index+i+1}>
                        <td><img src={'/web/images/small-user-image/'+item.image} alt=""/></td>
                        <td><Link to={'/'+item.name}>{item.name}</Link></td>
                        <td>{item.status}</td>
                        <td><button className='btn' data-id={item.id} data-key={this.state.index+i+1} onClick={this.deleteUser.bind(this)}>Забанить</button></td>
                    </tr>);
                });

                this.setState({tbody: this.state.tbody.concat(total),preloader: <div/>});


                    total=(
                        <table className='table'>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Имя пользователя</th>
                                <th>Статус</th>
                                <th>Заголовок 3</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.tbody}
                            </tbody>
                        </table>
                    )
                    this.setState({page: total});

                console.dir(data);
                if(data.lenght!=0){
                    this.setState({index: data[data.length-1].id});
                    window.onscroll=this.addElements.bind(this);
                }

            }
            else{
                this.setState({preloader: <div></div>});
            }
        }).bind(this));
    }
    addElements(){
        let main = document.querySelector('main');
        //let container = $('.container')[0];
        //console.log(container.offset().top);
        if((main.offsetHeight+main.offsetTop)-window.pageYOffset<850){
            window.onscroll=null;
            this.loadUserList();
        }
    }
    componentDidMount(){
        this.loadUserList();
        //this.props.getPostList.call(this);
        window.onscroll=this.addElements.bind(this);


    }
    componentWillReceiveProps(prevProps, prevState){
        this.loadUserList();
    }
    render(){
        return <div>
            {this.state.page}
            {this.state.preloader}
        </div>;
    }
}