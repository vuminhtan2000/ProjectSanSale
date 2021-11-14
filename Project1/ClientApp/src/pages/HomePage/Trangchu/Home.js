import React, { Component } from "react";
import "./Home.css";
import Categorymenu from "../../../components/caterory_menu/caterory_menu";
import Slides from "../../slide/slide";
import Dealsock from "../../../components/dealsock/dealsock";
import EmployeeList from "../../../components/productimage/EmployeeList";
import Homemenu from "../../../components/menuhome/homemenu";
import Header from "../../../components/headerconteact/header";
import Cateproduct from "../../../components/Sanpham/cateproduct";
import Footer from "../../footer/footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homemenu />
        <Slides />
        <Categorymenu />
        <Dealsock />
        <Cateproduct />
        <Footer />
      </div>
    );
  }
}

export default Home;
