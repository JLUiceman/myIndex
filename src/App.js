import React, { Component } from 'react';
import './App.css';
import  './resetBroswer.css'
import RotateElement from './ui-component/rotateLogo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <RotateElement>

            </RotateElement>
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
