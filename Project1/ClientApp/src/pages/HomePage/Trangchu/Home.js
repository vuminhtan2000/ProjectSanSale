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
import Baiviethomeproduct from "../../Baivietpage/baivietproduct";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homemenu />
        <Slides />
        <Categorymenu />
        <Dealsock />
        <div class="clearfix vi-header">
          <h3 class="vi-left-title pull-left">Sản phẩm Hot Hằng Ngày</h3>
          <div class="vi-right-link pull-right">
            <a class="vi-more" href="/baiviet">
              Xem tất cả »
            </a>
          </div>
        </div>
        <Cateproduct />

        <Baiviethomeproduct />
        <Footer />
      </div>
    );
  }
}

export default Home;
