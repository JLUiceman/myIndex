/**
 * Created by caiyongbin
 * Date: 17/11/1
 */

import React, { Component } from 'react'
import { Layout, Menu, Button, Tooltip, message } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class VerifyAccess extends Component{
    constructor(props){
        super(props)
        this.state = {
            isFriend: !1,
            loading: !1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            isFriend: !0,
            loading: !0
        })
        message.success('验证成功,正在跳转')
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
                               <input type="text" className="verify-input"/>
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