import React from 'react';


export default class CommentsElement extends React.Component{
    render(){
        return (
            <div className="media">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object img-rounded" src={'/web/images/small-user-image/59cea84be6b68.png'} alt=""/>
                    </a>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <div className="author">Пётр</div>
                        <div className="metadata">
                            <span className="date">19 ноября 2015, 10:28</span>
                        </div>
                    </div>
                    <div className="media-text text-justify">Dolor sit, amet, consectetur, adipisci velit. Aperiam eaque ipsa, quae. Amet, consectetur, adipisci velit, sed quia consequuntur magni dolores. Ab illo inventore veritatis et quasi architecto. Quisquam est, omnis voluptas nulla. Obcaecati cupiditate non numquam eius modi tempora. Corporis suscipit laboriosam, nisi ut labore et aut reiciendis.</div>
                    <div className="footer-comment">
            <span className="vote plus" title="Нравится">
              <i className="fa fa-thumbs-up"></i>
            </span>
            <span className="rating">
              +0
            </span>
            <span className="vote minus" title="Не нравится">
              <i className="fa fa-thumbs-down"></i>
            </span>
            <span className="devide">
              |
            </span>
            <span className="comment-reply">
              <a href="#" className="reply">ответить</a>
            </span>
                    </div>

                    {this.props.children}

                </div>
            </div>
        );
    }
}