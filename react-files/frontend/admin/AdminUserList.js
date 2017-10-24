import React from 'react';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AdminUserList extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={page: <div/>, index: 0, tbody: [], preloader: <div className='preloader first-preloader'><img src={'/web/images/prelodaer.gif'} alt=""/></div>};
    }
    deleteUser(event){
        if(confirm('Забанить пользователя?')){
            this.ajax= $.get(location.origin+'/web/admin/ban-user',{id: event.target.dataset.id},(data)=>{
                alert(data);
                this.state.page.splice(event.target.dataset.id-1,1);
                this.setState({page: this.state.page});
            })
        }
    }
    loadUserList(){
        if(this.state.index==0)
            this.setState({preloader: <div className='preloader first-preloader'><img src={'/web/images/prelodaer.gif'} alt=""/></div>});
        else
            this.setState({preloader: <div className='preloader'><img src={'/web/images/prelodaer.gif'} alt=""/></div>});

        this.ajax2 = $.getJSON(location.origin+'/web/admin/user-list',{index:this.state.index},(function(data){
            if(data.length!=0){
                let total=data.map((item,i)=>{
                    return (
                        <ReactCSSTransitionGroup key={item.id} component="tr" transitionName={"post-item-"+(i+1)} transitionAppear={true} transitionAppearTimeout={5000} transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
                            <td>
                                <img src={'/web/images/small-user-image/'+item.image} alt=""/>
                            </td>
                            <td>
                                <Link to={'/'+item.name}>{item.name}</Link>
                            </td>
                            <td>
                                {item.status}
                            </td>
                            <td>
                                <button className='btn' data-id={item.id} data-key={this.state.index+i+1} onClick={this.deleteUser.bind(this)}>Забанить</button>
                            </td>
                        </ReactCSSTransitionGroup>);
                });

                this.setState({tbody: this.state.tbody.concat(total), preloader: <div/>});

                total=(
                    <table className='table'>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Имя пользователя</th>
                            <th>Статус</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.tbody}
                        </tbody>
                    </table>
                );

                this.setState({page: total});
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
    componentWillUnmount(){
        if(this.ajax){
            this.ajax.abort();
        }
        if(this.ajax2){
            this.ajax2.abort();
        }
    }
    componentWillReceiveProps(prevProps, prevState){
        this.loadUserList();
    }
    render(){
        return <div className="col-lg-9">
            {this.state.page}
            {this.state.preloader}
        </div>;
    }
}