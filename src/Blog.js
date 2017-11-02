/**
 * Created by caiyongbin on 2017/10/29.
 */
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import RotateElement from './ui-component/rotateLogo.js'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const { Header, Content, Footer, Sider } = Layout;
const tabListSource = [
    {
        key: 'javascript',
        title: 'Javascript'
    },
    {
        key: 'css',
        title: 'Css'
    },
    {
        key: 'git',
        title: 'Git'
    },
    {
        key: 'python',
        title: 'Python'
    },
    {
        key: 'aaa',
        title: '我去'
    }
]

const textSet = ['点','我','返','回','首','页']

const tabList = tabListSource.map((m) =>
    <Menu.Item key={m.key}><Link to={'blog/list/' + m.key}>{m.title}</Link></Menu.Item>
)


function _calcActived() {
    let matchedStr = window.location.hash.replace('#/blog/list/', '')
    return tabListSource.filter((m) => m.key === matchedStr )
}

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            hash: _calcActived().length ? [_calcActived()[0].key] : ['javascript']
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        window.location.hash='#/'
    }
    render() {
        return(
            <Layout className="layout" style={{height: '100%'}}>
                <Header style={{backgroundColor: '#fff'}}>
                    <RotateElement source={textSet} onClick={this.handleClick}>

                    </RotateElement>
                </Header>
                <Layout>
                    <Sider>
                        <Menu mode="vertical" theme="dark" defaultSelectedKeys={this.state.hash} style={{ lineHeight: '64px'}}>
                            {tabList}
                        </Menu>
                    </Sider>
                    <Content>
                        <div style={{ padding: 24, minHeight: 280, height: '100%' }}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}


function _getList (type) {
    let list = []
    if (!type) {
        return list
    }
    switch (type) {
        case 'javascript':
            list = [
                {
                    title: 'js测试',
                    id: 1
                }
            ];
            break;
        case 'css':
            list = [
                {
                    title: 'css测试',
                    id: 2
                }
            ];
            break;
        case 'git':
            list = [
                {
                    title: 'git测试',
                    id: 3
                }
            ];
            break;
        case 'python':
            list = [
                {
                    title: 'python测试',
                    id: 4
                }
            ];
            break;
    }
    return list.map((m) => <li key={m.id}><Link to={'blog/detail/' + m.id}>{m.title}</Link></li>)
}

class ListView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loadType: props.params.type
        }
    }

    render() {
        return(
            <div>
                {this.props.params.type}列表
                <ul>
                    {_getList(this.props.params.type)}
                </ul>
            </div>
        )
    }
}




class DetailView extends Component{
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            title: props.params.id + '的标题',
            content: props.params.id + '的内容'
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export {Blog, ListView, DetailView};