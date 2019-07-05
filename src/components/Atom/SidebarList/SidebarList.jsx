import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu} from 'antd';
 
const { Sider } = Layout;
   
class SidebarList extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const { collapsed } = this.state;
        const { MenuList } = this.props
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="white-background"
            >
                <Menu style={{ width: 239 }} mode="inline" >
                    {
                        MenuList.map(list =>
                             <Menu.Item className="removemargin" key={list.id}>
                                <NavLink to={list.link} activeClassName="active">
                                    {list.image}
                                    {
                                      list.name &&  
                                      <span className="ml-05 sider-text">{ list.name }</span>
                                    }
                                   
                                </NavLink>
                            </Menu.Item>
                        )
                    }
                </Menu>
            </Sider>
        );
    }
}

export default SidebarList;