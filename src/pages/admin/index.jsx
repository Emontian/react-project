import React, {Component} from 'react';
import { Row, Col } from 'antd';
import {Route} from 'react-router-dom'
import NavList from '../../components/navlist';
import RightHeader from '../../components/right-header';
import Home from '../home';
import Product from '../product';
import Category from '../category';
import Line from '../line';
import Pie from '../pie';
import Bar from '../bar';
import Role from '../role';
import User from '../user';
import logo from '../../assets/logo.png';
import './index.less'
export default class Admin extends Component {
    render() {
        return ( <Row className="admin">
            <Col span={5} className="admin-nav-list">
                <header className="left-header">
                    <img src={logo} alt="logo"/>
                    <h2>react:后台管理系统</h2>
                </header>
                        <NavList />
            </Col>
            <Col span={19} className="admin-content">
                <RightHeader/>
                <section>
                    <Route path="/home" component={Home}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/role" component={Role}/>
                    <Route path="/user" component={User}/>
                    <Route path="/charts/line" component={Line}/>
                    <Route path="/charts/pie" component={Pie}/>
                    <Route path="/charts/bar" component={Bar}/>
                </section>
                <footer className="right-footer">
                    Made with ❤ byAFX
                </footer>
            </Col>
        </Row>)
    }
}