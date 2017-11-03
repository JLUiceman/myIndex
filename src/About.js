/**
 * Created by caiyongbin
 * Date: 17/11/1
 */

import React, { Component } from 'react';
import {Layout, Row, Col, Card} from 'antd'

const {Content, Sider} = Layout

class About extends Component {
    render() {
        return (
            <Layout className="layout" style={{height: '100%'}}>
                <Sider style={{padding: '30px 20px 0 20px', width: '300px'}}>
                    <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                            <img alt="example" width="100%" src="https://www.weibangong.com/files/58bbe6ba642b75667d444e21-big" />
                        </div>
                        <div className="custom-card">
                            <h3>基本信息</h3>
                            <h5>jluiceman@gmail.com</h5>
                            <h5>Caiyongbin</h5>
                            <h5>吉林大学</h5>
                            <h5>前端</h5>
                        </div>
                    </Card>
                </Sider>
                <Content style={{padding: '30px'}}>
                    <Card title="关于网站" bordered={false} extra={<a href="#/">返回首页</a>}>
                        <p className="info-p">其实就是买了自己想要的域名..正好有台国外的云服务器...恰巧会一点儿python...正好想学学react...So...</p>
                        <p className="info-p">规划中这个个人站除了博客以外还会提供一些影视资源爬取的模块...目前爬虫已经写完...还没整合...</p>
                        <p className="info-p">网站前台部分是react...后端部分是django+djangoframework...数据库是Sqlite...云服务器是搬瓦工的...nginx什么的也配置了一下...</p>
                        <p className="info-p">目前来看这个个人站还很挫(主要是没有UI的审美)...如果不小心被你发现了...请不要喷我...</p>
                        <p className="info-p">想吐槽的可以加wechatID:laocai359亲自和我说...</p>
                        <p className="info-p">没了..</p>
                    </Card>
                </Content>
            </Layout>
        )
    }
}

export default About;