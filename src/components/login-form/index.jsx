import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Icon,
    Input,
    Button,
    message
} from 'antd';



class LoginForm extends Component {
    static propTypes = {
      login : PropTypes.func.isRequired
    };
    //自定义用户输入检测规则
    /*handle = (rule, value, callback) => {

    };*/
    //登录按钮单击函数检验表单数据,禁止默认行为
    loginBtn = e =>{
        e.preventDefault();
        const {resetFields,validateFields} = this.props.form;
        validateFields(async (errors,valus) => {
            //表单无错误发送请求
            if (!errors){
               await this.props.login(valus);
             resetFields(['password']);
            }else {
                resetFields(['password']);
                const errMsg = Object.values(errors).reduce((prev, curr) => prev +curr.errors[0].message + ' ','');
                message.error(errMsg)
            }
        })
    };



    render() {
        const {Item} = Form;
        const { getFieldDecorator } = this.props.form;
        return (<Form  className="App-form">
            <Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' },
                        {min:5,message:'用户名长度为5~13位'},
                        {max:13,message:'用户名长度为5~13位'},
                        {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名须为大小写字母或数字和下划线'},
                        // {validator:this.handle}
                    ]
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
            </Item>
            <Item>
                {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' },
                    {min:5,message:'密码长度为5~16位'},
                    {max:16,message:'密码长度为5~16位'},
                    {pattern:/^[a-zA-Z0-9_]+$/,message:'密码须为大小写字母或数字和下划线'}],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
            </Item>


            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.loginBtn}>登录</Button>
        </Form>)
    }
}
const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm;