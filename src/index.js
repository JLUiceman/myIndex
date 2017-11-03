import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './resource.css';
import './about.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, Link, hashHistory, IndexRedirect } from 'react-router'
import {Blog, ListView, DetailView} from './Blog'
import Resource from './Resource'
import About from './About'


ReactDOM.render(
    <Router history={ hashHistory }>
        <Route path="/" component={App} />
        <Route path="blog" component={Blog}>
            <IndexRedirect to="list/javascript"></IndexRedirect>
            <Route path="list/:type" component={ListView}>
            </Route>
            <Route path="detail/:id" component={DetailView}/>
        </Route>
        <Route path="about" component={About} />
        <Route path="resource" component={Resource} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
