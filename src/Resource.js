/**
 * Created by caiyongbin
 * Date: 17/11/1
 */

import React, { Component } from 'react'
import { Layout, Menu, Button, Tooltip, message } from 'antd';
import RotateElement from './ui-component/rotateLogo.js'
import axios from 'axios'

const { Header, Content, Footer, Sider } = Layout;
const textSet = ['点','我','返','回','首','页']

class VerifyAccess extends Component{
    constructor(props){
        super(props)
        this.state = {
            isFriend: !1,
            loading: !1,
            value: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.backToIndex = this.backToIndex.bind(this)
    }
    backToIndex() {
        window.location.hash='#/'
    }
    handleChange(event) {
        this.setState({value: event.target.value})
    }
    handleClick() {
        var _this = this
        let url = 'http://127.0.0.1:8081/api/isFriend/' + this.state.value
        axios.get(url).then(function (response) {
            _this.setState({
                isFriend: !0,
                loading: !0
            })
            message.success('验证成功,正在跳转')
        }).catch(function (error) {
            message.error('验证失败！more access required!')
        })
    }
    render () {
        let isFriend = this.state.isFriend
        return(
           <Layout className="layout" style={{height: '100%'}}>
               { isFriend ? (
                       <Header style={{backgroundColor: '#49a9ee'}}>

                       </Header>
                   ):(
                   <Header  style={{backgroundColor: '#49a9ee'}}>
                       <div className="rotate-wrap" onClick={this.backToIndex}>
                           <RotateElement source={textSet}>

                           </RotateElement>
                       </div>
                   </Header>
                   )
               }
               <Content>
                   {
                       isFriend ?
                           <p>该功能暂未推出</p>:
                           <div className="verify-wrap">
                               <Tooltip title="资源站功能只针对微信好友开放,验证身份以继续">
                                   <span>输入微信ID以验证身份</span>
                               </Tooltip>
                               <input type="text" className="verify-input" value={this.state.value} onChange={this.handleChange}/>
                               <Button type="primary" style={{marginLeft: '15px'}} loading={this.state.loading} onClick={this.handleClick}>
                                   点我验证
                               </Button>
                           </div>
                   }
               </Content>
               <Footer>

               </Footer>
           </Layout>
        )
    }
}


class Resource extends Component {
    render () {
        return(
            <VerifyAccess></VerifyAccess>
        )
    }
}

export default Resource;