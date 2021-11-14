import React, { Component } from "react";
import Slider from "react-slick";
import "../caterory_menu/caregory_menu.css";
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
export default class slidecare extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
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
      <div className="card-i">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <a href="#">
            <div className="cardimg" key={1}>
              <div className="img-icon">
                <img src={categroty[0]} alt="iconcomputer" />
              </div>
              <div className="">
                <h5>Thiết bị Điện Tử </h5>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="cardimg" key={2}>
              <div className="img-icon">
                <img src={categroty[1]} alt="iconcomputer" />
              </div>
              <div className="">
                <h5>Food </h5>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="cardimg" key={3}>
              <div className="img-icon">
                <img src={categroty[2]} alt="iconcomputer" />
              </div>
              <div className="">
                <h5>Quần áo </h5>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="cardimg" key={4}>
              <div className="img-icon">
                <img src={categroty[3]} alt="iconcomputer" />
              </div>
              <div className="">
                <h5>Giày dép </h5>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="cardimg" key={5}>
              <div className="img-icon">
                <img src={categroty[4]} alt="iconcomputer" />
              </div>
              <div className="">
                <h5>Cosmectic</h5>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="cardimg" key={6}>
              <div className="img-icon">
                <img src={categroty[5]} alt="iconcomputer" />
              </div>
              <div className="">
                <h5>Đồng Hồ </h5>
              </div>
            </div>
          </a>
          <a href="#">
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
    );
  }
}
