import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [{
    path: '/',
    name: 'Home page',
    exact: true,
},{
    path: '/products',
    name: 'Product list',
    exact: false,
}];

const MenuLink = ({menu}) => {
    return (
        <Route 
            path={menu.path} 
            exact={menu.exact}
            children={({match}) => {
                var active = match ? 'active' : '';
                return(
                    <li className={active}>
                        <Link to={menu.path}>
                            {menu.name}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">CALL API</a>
                <ul className="nav navbar-nav">
                    { this.showMenu(menus) }
                </ul>
            </div>
        )
    }

    showMenu = (menus) => {
        var result = null;
        if (menus && menus.length > 0) {
            result = menus.map((menu, index) => {
                return(
                    <MenuLink key={index} menu={menu} />
                )
            });
        }

        return result;
    }
}

export default Menu;