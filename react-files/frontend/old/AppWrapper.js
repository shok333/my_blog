import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import router from './router';

export default class AppWrapper extends React.Component{
    render(){
        return (
        <div>
            <header className="page-header">
            </header>
            <nav className="navbar">
                <div className="container">
                    <div className="row">
                        <ul className="nav navbar-nav col-lg-12">
                            <li><NavLink activeClassName='active' to="/track-list">Track List</NavLink></li>
                            <li><NavLink to="/ajax">Ajax</NavLink></li>
                            <li><NavLink to="/indexx">index</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {router}
            <main className="background-layer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <article className="col-lg-6 small-article-right">
                                    <div className="row">
                                        <div className="col-lg-6 article-image col-lg-push-6">
                                            <div className="arrow"></div>
                                        </div>
                                        <div className="col-lg-6 article-header article-left col-lg-pull-6">
                                            <h2>Игорь Чернат</h2>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-lg-6 small-article-left">
                                    <div className="row">
                                        <div className="col-lg-6 article-image image-1 ">
                                            <div className="arrow"></div>
                                        </div>
                                        <div className="col-lg-6 article-header article-right ">
                                            <h2>Надо побить палкой Никулина</h2>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="row">
                                <div className="double-article col-lg-6">
                                    <article className=" small-article-left">
                                        <div className="row">
                                            <div className="col-lg-6 article-image image-1 ">
                                                <div className="arrow"></div>
                                            </div>
                                            <div className="col-lg-6 article-header article-right ">
                                                <h2>Надо побить палкой Никулина</h2>
                                            </div>
                                        </div>
                                    </article>
                                    <article className=" small-article-right">
                                        <div className="row">
                                            <div className="col-lg-6 article-image col-lg-push-6">
                                                <div className="arrow"></div>
                                            </div>
                                            <div className="col-lg-6 article-header article-left col-lg-pull-6">
                                                <h2>Игорь Чернат</h2>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <article className="col-lg-6 big-article-right">
                                    <div className="row">
                                        <div className="col-lg-12 article-image">
                                            <div className="arrow"></div>
                                            <div className="row">
                                                <div className="col-lg-6 article-header big-article-header">
                                                    <h2>Игорь Чернат</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <aside className="col-lg-4"></aside>
                    </div>
                </div>
            </main>
            <div className="sidebar">
                <div className="sidebar-girl"></div>
            </div>
            <main className="background-layer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <article className="col-lg-6 small-article-right">
                                    <div className="row">
                                        <div className="col-lg-6 article-image col-lg-push-6">
                                            <div className="arrow"></div>
                                        </div>
                                        <div className="col-lg-6 article-header article-left col-lg-pull-6">
                                            <h2>Игорь Чернат</h2>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-lg-6 small-article-left">
                                    <div className="row">
                                        <div className="col-lg-6 article-image image-1 ">
                                            <div className="arrow"></div>
                                        </div>
                                        <div className="col-lg-6 article-header article-right ">
                                            <h2>Надо побить палкой Никулина</h2>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="row">
                                <div className="double-article col-lg-6">
                                    <article className=" small-article-left">
                                        <div className="row">
                                            <div className="col-lg-6 article-image image-1 ">
                                                <div className="arrow"></div>
                                            </div>
                                            <div className="col-lg-6 article-header article-right ">
                                                <h2>Надо побить палкой Никулина</h2>
                                            </div>
                                        </div>
                                    </article>
                                    <article className=" small-article-right">
                                        <div className="row">
                                            <div className="col-lg-6 article-image col-lg-push-6">
                                                <div className="arrow"></div>
                                            </div>
                                            <div className="col-lg-6 article-header article-left col-lg-pull-6">
                                                <h2>Игорь Чернат</h2>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <article className="col-lg-6 big-article-right">
                                    <div className="row">
                                        <div className="col-lg-12 article-image">
                                            <div className="arrow"></div>
                                            <div className="row">
                                                <div className="col-lg-6 article-header big-article-header">
                                                    <h2>Игорь Чернат</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <aside className="col-lg-4"></aside>
                    </div>
                </div>
            </main>
            <footer>
                <div className="container">
                    <div className="footer-left"></div>
                    <div className="footer-right"></div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <h2>About this website</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae, consectetur deserunt dolor ex expedita fugiat laborum nihil placeat porro, possimus praesentium, qui quia quo reprehenderit sapiente voluptas voluptates. Accusantium.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ducimus ea mollitia non obcaecati possimus suscipit tempore voluptates. Nihil, perspiciatis, quam. Accusantium, quis, tempora. Accusamus cum eum non quas similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, deserunt eligendi in perferendis praesentium quaerat quisquam quo sed! Blanditiis commodi delectus et expedita facere pariatur placeat, quam sit tempora totam.
                        </p>
                    </div>
                </div>
            </footer>
        </div>);
    }
}