/**
 * Created by caiyongbin on 2017/10/29.
 */
import React, { Component } from 'react';
import { Layout, Menu, Card } from 'antd';
import RotateElement from './ui-component/rotateLogo.js'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import axios from 'axios'


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
        key: 'other',
        title: '其他'
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
                    <div className="rotate-wrap" onClick={this.handleClick}>
                        <RotateElement source={textSet}>

                        </RotateElement>
                    </div>

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


function _getList(source, type) {
    return source.filter(m => m.article_type == type).map(m =>
    <li key={m.id} className="mb10">
        <Card title={m.article_title} extra={<Link to={'blog/detail/' + m.id}>点击进入详情</Link>}>
            <p>{m.shortcut || '暂无简介'}</p>
        </Card>
    </li>
    )
}


class ListView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loadType: props.params.type,
            list: []
        }
    }

    componentDidMount() {
        axios.get('http://www.jluicem.com/api/articles/list/').then(res => {
            const list = res.data
            this.setState({list})
        }
        )
    }

    render() {
        return(
            <div>
                <ul>
                    {_getList(this.state.list, this.props.params.type).length ? _getList(this.state.list, this.props.params.type) : <li>暂无内容哦</li>}
                </ul>
            </div>
        )
    }
}




class DetailView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title: props.params.id + '的标题',
            content: props.params.id + '的内容'
        }
    }
    componentDidMount() {
        axios.get('http://www.jluiceman.com/api/article/detail/' + this.props.params.id + '/').then(res => {
            if (res && res.data) {
                this.setState(
                    {
                        title: res.data.article_title,
                        content: res.data.article_content
                    }
                )
            }
        })
    }
    render(){
        return(
            <div>
                <Card title={this.state.title} >
                    <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                </Card>
            </div>
        )
    }
}

export {Blog, ListView, DetailView};