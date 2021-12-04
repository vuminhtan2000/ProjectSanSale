import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Đăng nhập",
    to: "/login",
    exact: true,
  },
  {
    name: "Quản lý sản phẩm",
    to: "/dashboard",
    exact: true,
  },
  {
    name: "Setting",
    to: "/dashboard",
    exact: true,
  },
  {
    name: "ProductList",
    to: "/productlist",
    exact: true,
  },
  {
    name: "categorylist",
    to: "/categorylist",
    exact: true,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="nav navbar-nav-default" href={this.showMenus(menus)}></a>
      </div>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
