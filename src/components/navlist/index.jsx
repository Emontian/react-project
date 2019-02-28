import React, {Component} from 'react';
import List from '../../config/navListConfig';
import {NavLink,withRouter} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const {Item,SubMenu} = Menu;

 class NavList extends Component {
     componentWillMount(){
         this.menu = this.createItem(List);
     }
   createItem = navData => {
       return navData.map(item =>{
            if (item.children){
                const {pathname} = this.props.location;
                const result = item.children.find(item => item.key === pathname);
                if (result){
                    this.openKey = item.key;

                }
                return <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                    { this.createItem(item.children)}
                </SubMenu>
            }else{
                return <Item key={item.key}>
                    <NavLink to={item.key}>
                        <Icon type={item.icon}/>
                        <span>{item.title}</span>
                    </NavLink>
                </Item>
            }
        })
    };

    render() {
        const {pathname} = this.props.location;
        return(<Menu
                selectedKeys={[pathname]}
                defaultOpenKeys={[this.openKey]}
                mode="inline"
                theme="dark"
            >
                {this.menu}
            </Menu>)

    }
}

//高阶组件是一个传入参数为组件返回值为一个组件的函数
export default withRouter(NavList);