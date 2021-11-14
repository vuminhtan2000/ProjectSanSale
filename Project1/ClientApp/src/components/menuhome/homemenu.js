import React, { Component } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Route, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./menuhome.css";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Giảm Giá",
    to: "/magiamgia",
    exact: true,
  },
  {
    name: "Bài Viết",
    to: "/baiviet",
    exact: true,
  },
  {
    name: "Hỗ Trợ",
    to: "/help",
    exact: true,
  },
  {
    name: "Thông Tin",
    to: "/info",
    exact: true,
  },
  {
    name: "Liên Hệ",
    to: "/call",
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
            <Link to={to}> {label} </Link>
          </li>
        );
      }}
    />
  );
};
export default class App extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <div className="header">
          <div className="navigation">
            <Link className="logo"> Săn Sale </Link>
            <div className="search">
              <div className="i-serach">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm sản phẩm "
                  alt=""
                />
              </div>
              <div className="b-serach">
                <button className="btn-primary  icon " type="button">
                  <BsSearch />
                </button>
              </div>
            </div>
            <button className="menu-btn btn-primary" onClick={this.Toggle}>
              <RiMenu3Fill />
            </button>
            <ul className={this.state.toggle ? "menu active" : "menu"}>
              <button className="close-btn" onClick={this.Toggle}>
                <RiCloseFill />
              </button>
              <li className="menu-item"> {this.showMenus(menus)} </li>
            </ul>
          </div>
        </div>
      </>
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
