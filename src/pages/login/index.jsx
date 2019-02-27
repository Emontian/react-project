import React, {Component} from 'react';
import {ajaxLogin} from '../../api'
import WrappedNormalLoginForm from '../../components/login-form'

import logo from '../../assets/logo.png';

import './index.less';
export default class Login extends Component {
    state = {
      errMsg:''
    };
    login =async data => {
       const result = await ajaxLogin(data);
        console.log(result);
        if (result.status === 0){
            this.props.history.replace('./');
        }else if (result.status === 1){
            const resultMsg = result.msg;
           this.setState({
               errMsg:resultMsg
           })
        }
    };

    render() {
        const height = this.state.errMsg ? 35:0 ;
        return (<div className="App-wrap">
            <header className="App-header">
                <img className="App-logo" src={logo} alt="logo"/>
                <h1>React:登录管理系统</h1>
            </header>
            <section className="App-container">
                <div style={{height}} className="err-msg">{this.state.errMsg}</div>
                <h2>用户登录</h2>
                <WrappedNormalLoginForm className="App-form" login={this.login}/>
            </section>
        </div>)
    }
}

