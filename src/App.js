import React, {Component} from 'react';
import {Router, Route} from "react-router-dom";
import history from './history';
import {Layout} from 'antd';
import { Landing } from './components/Misc/Landing';
import Doctor from './components/Doctor';
import Pharmacist from "./components/Pharmacist";
import Insurance from './components/Insurance';
import Nav from "./components/Misc/Nav";
import './css/App.css';


const { Content } = Layout;

export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Layout className="card-layout">
                    <Nav/>
                    <Content style={{padding: '0 50px', marginTop: 64}}>
                        <div style={{background: '#fff', padding: 24}}>
                            <Route exact path="/" component={Landing}/>
                            <Route path="/doctor" component={Doctor}/>
                            <Route path="/pharmacist" component={Pharmacist}/>
                            <Route path="/insurance" component={Insurance}/>
                        </div>
                    </Content>
                </Layout>
            </Router>
        )
    }
}
