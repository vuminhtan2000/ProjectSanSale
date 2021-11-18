import React, { useState } from "react";
import { getToken, getUser, removeUserSession } from "../../Utils/Common";
import "./Dashboard.css";
import axios from "axios";
import {
  BsShop,
  BsFillJournalBookmarkFill,
  BsCartDashFill,
} from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";
import ProductList from "../../components/ProductList/ProductList";
import Setting from "../../components/Setting/Setting";
import CategoryList from "../../components/CategoryList/CategoryList";
import BaiViet from "../../components/BaiViet/Baiviet";
import Slides from "../../components/sideconf/Sideconf";
import { API_URL } from "../../constants/config";
import DashDefault from "../../components/Dashboard_real";

function Dashboard(props) {
  const [isVisible, setIsVisible] = useState(true);

  const name = getUser();
  const token = getToken();

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  axios
    .get(`${API_URL}/Tags`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (response) => {
        //var response = response.data;
      },
      (error) => {
        removeUserSession();
        props.history.push("/login");
      }
    );
  const menus = [
    {
      name: "DashBoard",
      to: "/dashboard",
      exact: true,
      icon: <BsCartDashFill />,
    },
    {
      name: "Product",
      to: "/dashboard/productlist",
      exact: true,
      icon: <BsShop />,
    },
    {
      name: "Category",
      to: "/dashboard/categorylist",
      exact: true,
      icon: <MdCategory />,
    },
    {
      name: "Setting Slides",
      to: "/dashboard/slides",
      exact: true,
      icon: <AiFillSetting />,
    },
    {
      name: "Admin",
      to: "/dashboard/dashdefault",
      exact: true,
      icon: <RiAdminLine />,
    },
    {
      name: "Bài Viết ",
      to: "/dashboard/baiviet",
      exact: true,
      icon: <BsFillJournalBookmarkFill />,
    },
  ];
  const MenuLink = ({ icon, label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? "active" : "";
          return (
            <li className={active}>
              <Link to={to}>
                <i>{icon}</i> <p>{label}</p>{" "}
              </Link>
            </li>
          );
        }}
      />
    );
  };
  const showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            icon={menu.icon}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  const state = {
    toggle: false,
  };
  const Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  return (
    <BrowserRouter>
      <div>
        <div class="wrapper ">
          <div
            class="sidebar"
            data-color="white"
            data-active-color="danger"
            style={{ display: isVisible ? "block" : "none" }}
          >
            <div class="logo">
              <a href="/dashboard" class="simple-text logo-mini">
                <div class="logo-image-small">
                  <img src="../assets/img/logo-small.png" />
                </div>
              </a>
              <a href="/dashboard" class="simple-text logo-normal">
                {name}
              </a>
            </div>
            <div class="sidebar-wrapper">
              <ul className={state.toggle ? "nav active" : "nav"}>
                <li> {showMenus(menus)} </li>
              </ul>
            </div>
          </div>
          <div
            className="main-panel"
            style={{ width: isVisible ? "calc(100% - 260px)" : "100%" }}
          >
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
              <div class="container-fluid">
                <div class="navbar-wrapper">
                  <div class="navbar">
                    <button
                      class="iconmo"
                      type="button"
                      onClick={() => setIsVisible(false)}
                      style={{ display: isVisible ? "block" : "none" }}
                    >
                      <BsArrowDownCircle />
                    </button>
                    <button
                      class="iconmo"
                      type="button"
                      onClick={() => setIsVisible(true)}
                      style={{ display: isVisible ? "none" : "block" }}
                    >
                      <BsArrowRightCircle />
                    </button>
                  </div>
                  <a class="navbar-brand" href="/">
                    <h5>QUẢN LÝ SẢN PHẨM</h5>
                  </a>
                </div>

                <div
                  class="collapse navbar-collapse justify-content-end"
                  id="navigation"
                >
                  <form>
                    <div class="input-group no-border">
                      <input
                        type="text"
                        value=""
                        class="form-control"
                        placeholder="Search..."
                      />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="nc-icon nc-zoom-split"></i>
                        </div>
                      </div>
                    </div>
                  </form>
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link btn-magnify" href="javascript:;">
                        <i class="nc-icon nc-layout-11"></i>
                        <p>
                          <span class="d-lg-none d-md-block">Stats</span>
                        </p>
                      </a>
                    </li>
                    <li class="nav-item btn-rotate dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="http://example.com"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="nc-icon nc-bell-55"></i>
                        <p>
                          <span class="d-lg-none d-md-block">Some Actions</span>
                        </p>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </li>
                    <li class="nav-item btn-rotate dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="http://example.com"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="nc-icon nc-settings-gear-65"></i>
                        <p>
                          <span class="d-lg-none d-md-block">Account</span>
                        </p>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a
                          class="dropdown-item"
                          href="#"
                          type="button"
                          onClick={handleLogout}
                          value="Logout"
                        >
                          LogOut
                        </a>
                        <a class="dropdown-item" href="#">
                          Setting
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar --> */}
            <div class="content">
              <Route path="/dashboard/categorylist" component={CategoryList} />
              <Route path="/dashboard/productlist" component={ProductList} />
              <Route path="/dashboard/baiviet" component={BaiViet} />
              <Route path="/dashboard/slides" component={Slides} />
              <Route path="/dashboard/dashdefault" component={DashDefault} />
              <div class="card col-md-3 align-items-center  " id="info">
                <div class="card-header">
                  <h4 class="card-title">Team Members</h4>
                </div>
                <div class="card-body">
                  <ul class="list-unstyled team-members">
                    <li>
                      <div class="row">
                        <div class="col-md-2 col-2">
                          <div class="avatar">
                            <img
                              src="../assets/img/faces/anhduc.jpg"
                              alt="Circle Image"
                              class="img-circle img-no-padding img-responsive"
                            />
                          </div>
                        </div>
                        <div class="col-md-7 col-7">
                          Anh Đức
                          <br />
                          <span class="text-success">
                            <small>Available</small>
                          </span>
                        </div>
                        <div class="col-md-3 col-3 text-right">
                          <btn class="btn btn-sm btn-outline-success btn-round btn-icon">
                            <i class="fa fa-envelope"></i>
                          </btn>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-md-2 col-2">
                          <div class="avatar">
                            <img
                              src="../assets/img/faces/minh_tan.jpg"
                              alt="Circle Image"
                              class="img-circle img-no-padding img-responsive"
                            />
                          </div>
                        </div>
                        <div class="col-md-7 col-7">
                          Tân
                          <br />
                          <span class="text-success">
                            <small>Available</small>
                          </span>
                        </div>
                        <div class="col-md-3 col-3 text-right">
                          <btn class="btn btn-sm btn-outline-success btn-round btn-icon">
                            <i class="fa fa-envelope"></i>
                          </btn>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <footer class="footer footer-black  footer-white col-md-12">
              <div class="container-fluid">
                <div class="row">
                  <nav class="footer-nav">
                    <ul>
                      <li>
                        <a href="" target="_blank">
                          {name}
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank">
                          Licenses
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div class="credits ml-auto">
                    <span class="copyright">
                      ©{" "}
                      <script>document.write(new Date().getFullYear())</script>,
                      made with <i class="fa fa-heart heart"></i> by {name}
                    </span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Dashboard;
