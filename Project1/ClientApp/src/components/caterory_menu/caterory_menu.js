import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import "../caterory_menu/caregory_menu.css";
import { API_URL } from "../../constants/config";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const categroty = [
  "./img/iconcomputer.PNG",
  "./img/food.png",
  "./img/discount.png",
  "./img/shoes.png",
  "./img/conmectic.png",
  "./img/clock.png",
  "./img/thecao.png",

  //src={categroty[1]}
];

const menus = [
  {
    name: "Thiết bị Điện Tử",
    to: "/layout_chung/thietbidientu",
    exact: true,
    img: categroty[0],
  },
  {
    name: "Food",
    to: "/layout_chung/food",
    exact: true,
    img: categroty[1],
  },
  {
    name: "Quần áo",
    to: "/layout_chung/quanao",
    exact: true,
    img: categroty[2],
  },
  {
    name: "Giày dép",
    to: "/layout_chung/giaydep",
    exact: true,
    img: categroty[3],
  },
  {
    name: "Cosmetic",
    to: "/layout_chung/cosmetic",
    exact: true,
    img: categroty[4],
  },
  {
    name: "Trang sức",
    to: "/layout_chung/trangsuc",
    exact: true,
    img: categroty[5],
  },
  {
    name: "nạp Card",
    to: "/layout_chung/card",
    exact: true,
    img: categroty[6],
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact, img, component }) => {
  return (
    <Route
      path={to}
      component={component}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <div className={active}>
            <Link to={to}>
              <img className="img" src={img} alt="iconcomputer" />
              <hr />
              {label}
            </Link>
          </div>
        );
      }}
    />
  );
};
export default class category_menu extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.values = 1;
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
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
            img={menu.img}
            component={menu.component}
          />
        );
      });
    }
    return result;
  };
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,

      slidesToScroll: 1,
      slidesToShow: 7,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
    return (
      <BrowserRouter>
        <div className="card-i">
          {/* <div className="menu-item"> {this.showMenus(menus)} </div> */}

          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <a href="http://localhost:3000/layout_chung/thietbidientu">
              <div className="cardimg" key={1}>
                <div className="img-icon">
                  <img src={categroty[0]} alt="iconcomputer" />
                </div>
                <div className="">
                  <h5>Thiết bị Điện Tử </h5>
                </div>
              </div>
            </a>
            <a href="http://localhost:3000/layout_chung/food">
              <div className="cardimg" key={2}>
                <div className="img-icon">
                  <img src={categroty[1]} alt="iconcomputer" />
                </div>
                <div className="">
                  <h5>Food </h5>
                </div>
              </div>
            </a>
            <a href="http://localhost:3000/layout_chung/quanao">
              <div className="cardimg" key={3}>
                <div className="img-icon">
                  <img src={categroty[2]} alt="iconcomputer" />
                </div>
                <div className="">
                  <h5>Quần áo </h5>
                </div>
              </div>
            </a>
            <a href="http://localhost:3000/layout_chung/giaydep">
              <div className="cardimg" key={4}>
                <div className="img-icon">
                  <img src={categroty[3]} alt="iconcomputer" />
                </div>
                <div className="">
                  <h5>Giày dép </h5>
                </div>
              </div>
            </a>
            <a href="http://localhost:3000/layout_chung/cosmetic">
              <div className="cardimg" key={5}>
                <div className="img-icon">
                  <img src={categroty[4]} alt="iconcomputer" />
                </div>
                <div className="">
                  <h5>Cosmectic</h5>
                </div>
              </div>
            </a>
            <a href="http://localhost:3000/layout_chung/dongho">
              <div className="cardimg" key={6}>
                <div className="img-icon">
                  <img src={categroty[5]} alt="iconcomputer" />
                </div>
                <div className="">
                  <h5>Đồng Hồ </h5>
                </div>
              </div>
            </a>
            <a href="http://localhost:3000/layout_chung/napthe">
              <div className="cardimg" key={7}>
                <div className="img-icon">
                  <img src={categroty[6]} alt="iconcomputer" />
                </div>
                <div className="">
                  <h5>Nạp thẻ </h5>
                </div>
              </div>
            </a>
          </Slider>

          <div style={{ textAlign: "center" }}>
            <button className="btnpre" onClick={this.previous}>
              <BsChevronLeft />
            </button>
            <button className="btnnext" onClick={this.next}>
              <BsChevronRight />
            </button>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
