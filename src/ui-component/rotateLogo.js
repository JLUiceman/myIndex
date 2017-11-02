import React, { Component } from 'react';
import './ui-component.css'

class RotateElement extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            textArr: props.source
        }
    }
    render() {
        return (
        <div className="wrap2">
            <div className="one">
                {this.state.textArr[0]}
            </div>
            <div className="two">
                {this.state.textArr[4]}
            </div>
            <div className="three">
                {this.state.textArr[1]}
            </div>
            <div className="four">
                {this.state.textArr[3]}
            </div>
            <div className="five">
                {this.state.textArr[2]}
            </div>
            <div className="six">
                {this.state.textArr[5]}
            </div>
        </div>
        )
    }
}

export default RotateElement