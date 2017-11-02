import React, { Component } from 'react';
import './App.css';
import  './resetBroswer.css'
import  './common.css'
import 'antd/dist/antd.css';
import RotateElement from './ui-component/rotateLogo.js'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <RotateElement>

            </RotateElement>
            <Link to="about" className="effect-btn pull-right mr10">关于</Link>
            <Link to="resource" className="effect-btn pull-right mr10">资源站</Link>
            <Link to="blog" className="effect-btn pull-right mr10">博客</Link>
        </div>
        <div className="content-wrap clearfix">
            <div className="banner left">

            </div>
            <div className="banner right">

            </div>
            <h1 className="colorful-font">
                <span>极</span>
            </h1>
        </div>
      </div>
    );
  }
}

export default App;
