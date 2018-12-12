import React, { Component } from 'react';
import { Card, Layout, Menu } from 'antd';
import PatientSearch from '../../containers/PatientSearch';
import RxHistory from '../../containers/RxHistory';
import PatientInfo from '../../containers/PatientInfo';
import NewRx from '../../containers/NewRx';
const { Sider, Content, Header } = Layout;
const { Meta } = Card;

export default class Provider extends Component {
    renderRxButton() {
        if (this.props.provider.type === 'doctor') {
            return (
                <Menu.Item style={{float: 'right', background: null}}>
                    <NewRx provider={this.props.provider}/>
                </Menu.Item>
            )
        }
    }

    renderProvider() {
        return(
            <Layout className="profile-layout" style={{width:'100%', margin: 'auto' }}>
                <Sider width={300}>
                    <Card style={{ width: 300 }} cover={this.props.provider.cover}>
                        <Meta avatar={this.props.provider.avatar} title={this.props.provider.title} description={this.props.provider.description} />
                    </Card>
                    <PatientInfo />
                </Sider>
                <Layout>
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item>
                                <PatientSearch />
                            </Menu.Item>
                            {this.renderRxButton()}
                        </Menu>
                    </Header>
                    <Content>
                        <RxHistory provider={this.props.provider} />
                    </Content>
                </Layout>
            </Layout>
        )
    };

    render() {
        return (
            this.renderProvider()
        );
    }
}
