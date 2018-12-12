import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <Layout style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        style={{lineHeight: '64px', paddingLeft: '16px'}}
                    >
                        <Menu.Item key="1">
                            <a href='/'>Home</a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a href='/doctor'>Doctor</a>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <a href='/pharmacist'>Pharmacist</a>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <a href='/insurance'>Insurance</a>
                        </Menu.Item>
                    </Menu>
                </Layout>
            </nav>
        );
    }
}