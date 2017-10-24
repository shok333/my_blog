import React from 'react';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AdminPostList extends React.Component{
    constructor(){
        super(arguments[0]);
        this.state={page: <div/>, index: 0, tbody: [], preloader: <div className='preloader first-preloader'><img src={'/web/images/prelodaer.gif'} alt=""/></div>};
    }
    loadUserList(){
        if(this.state.index==0)
            this.setState({preloader: <div className='preloader first-preloader'><img src={'/web/images/prelodaer.gif'} alt=""/></div>});
        else
            this.setState({preloader: <div className='preloader'><img src={'/web/images/prelodaer.gif'} alt=""/></div>});

        this.ajax=$.getJSON(location.origin+'/web/admin/post-list',{index:this.state.index},(function(data){
            if(data.length!=0){
                let total=data.map((item,i)=>{
                    return (
                        <ReactCSSTransitionGroup key={item.id} component="tr" transitionName={"post-item-"+(i+1)} transitionAppear={true} transitionAppearTimeout={5000} transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
                            <td>
                                <Link to={'/'+item.url}>{item.header}</Link>
                            </td>
                        </ReactCSSTransitionGroup>);
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
    componentWillUnmount(){
        if(this.ajax){
            this.ajax.abort();
        }
    }
    render(){
        return <div className="col-lg-9">
            {this.state.page}
            {this.state.preloader}
        </div>;
    }
}