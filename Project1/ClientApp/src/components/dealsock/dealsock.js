import React from 'react'
import './dealsock.css'
import {AiOutlineHeart} from 'react-icons/ai';

export default function dealsock() {
    return (
            <div className="container dealsock">
            
            <div className="dealsock-body">
                <div className="dealsock-time">
                    <div className="main-example">
                        
                        
                       
                        <h3 className="title-holder">Deal Sock</h3>
                    </div>
                    
                    
                </div>
              <div className="home-product-cate">
                  <div className="grid_row_anh">
                  <img src="./img/dealsock1.png"></img>
                  </div>
                      {/* grid ->row -Column */}
                    <div className="grid_row-cate">
                        <div className="gird__column-2-cate">
                            <div className="dealsock-body-item">
                               <a className="home-product-item">
                                   <div className="home-product-item-img">
                                   <img src="./img/dealsock-pro1.png"></img>
                                   </div>
                                <h4 className="home-product-item__name">Kem hiệu chỉnh nâng tông làm trắng da Laneige White Dew Tone-Up Cream 50Ml</h4>
                                <div className="home-product-item__price">
                                <span className="home-product-item__price-old">700.000</span>
                                <span className="home-product-item__price-new">450.000</span>
                                </div>
                                 <div className="home-product-item__action">
                                   <span className="home-product-item__like-cate">
                                     <i><AiOutlineHeart/></i>
                                   </span>
                                   <span className="home-product-item__sub">
                                     <i>Số lượng Click 1</i>
                                   </span>
                                 </div>
                                 <div className="home-product-item__origin">
                                   <span className="home-product-item__brand">Whoo</span>
                                   {/* <a href="" className="home-product-item__origin-btn btn-primary"><p>Mua ngay</p></a> */}
                                 </div>
                                 {/* <div className="home-product-item__favourite">
                                    Yêu thích
                                 </div> */}
                                 <div className="home-product-item__saleoff">
                                    <span className="home-product-item__saleoff-percent">25%</span>
                                    <span className="home-product-item__saleoff-label">GIẢM</span>
                                 </div>

                                </a>
                            </div>
                        </div>
                        <div className="gird__column-2-cate">
                            <div className="dealsock-body-item">
                               <a className="home-product-item">
                                   <div className="home-product-item-img">
                                   <img src="./img/dealsock-pro2.png"></img>
                                   </div>
                                <h4 className="home-product-item__name">Kem phấn nền 2 lần che phủ Laneige Layering Cover Cushion & Concealing Base (16.5g)</h4>
                                <div className="home-product-item__price">
                                <span className="home-product-item__price-old">899.000</span>
                                <span className="home-product-item__price-new">799.000</span>
                                </div>
                                 <div className="home-product-item__action">
                                   <span className="home-product-item__like-cate">
                                     <i><AiOutlineHeart/></i>
                                   </span>
                                   <span className="home-product-item__sub">
                                     <i>Số lượng Click 1</i>
                                   </span>
                                 </div>
                                 <div className="home-product-item__origin">
                                   <span className="home-product-item__brand">Whoo</span>
                                   {/* <a href="" className="home-product-item__origin-btn btn-primary"><p>Mua ngay</p></a> */}
                                 </div>
                                 {/* <div className="home-product-item__favourite">
                                    Yêu thích
                                 </div> */}
                                 <div className="home-product-item__saleoff">
                                    <span className="home-product-item__saleoff-percent">10%</span>
                                    <span className="home-product-item__saleoff-label">GIẢM</span>
                                 </div>

                                </a>
                            </div>
                        </div>
                        <div className="gird__column-2-cate">
                            <div className="dealsock-body-item">
                               <a className="home-product-item">
                                   <div className="home-product-item-img">
                                   <img src="./img/dealsock-pro3.png"></img>
                                   </div>
                                <h4 className="home-product-item__name">Bộ dưỡng ẩm da từ trong giấc ngủ Laneige Good Night Kit Advanced 2021 </h4>
                                <div className="home-product-item__price">
                                <span className="home-product-item__price-old">650.000</span>
                                <span className="home-product-item__price-new">500.000</span>
                                </div>
                                 <div className="home-product-item__action">
                                   <span className="home-product-item__like-cate">
                                     <i><AiOutlineHeart/></i>
                                   </span>
                                   <span className="home-product-item__sub">
                                     <i>Số lượng Click 1</i>
                                   </span>
                                 </div>
                                 <div className="home-product-item__origin">
                                   <span className="home-product-item__brand">Whoo</span>
                                   {/* <a href="" className="home-product-item__origin-btn btn-primary"><p>Mua ngay</p></a> */}
                                 </div>
                                 {/* <div className="home-product-item__favourite">
                                    Yêu thích
                                 </div> */}
                                 <div className="home-product-item__saleoff">
                                    <span className="home-product-item__saleoff-percent">50%</span>
                                    <span className="home-product-item__saleoff-label">GIẢM</span>
                                 </div>

                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
              </div>
            </div>
    )
}