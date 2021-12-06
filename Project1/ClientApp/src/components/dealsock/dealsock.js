import React, { useEffect,useState } from 'react';

import {AiOutlineHeart} from 'react-icons/ai';
import axios from 'axios';
import { API_URL } from "../../constants/config";
import './dealsock.css';
export default function Dealsockid() {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
      refreshEmployeeList();
    }, []);
  
    const contentsApi = (url = `${API_URL}/Products/GetProducts_hotProduct?hotProduct=true`) => {
      return {
        fetchAll: () => axios.get(url),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      };
    };
  
    function refreshEmployeeList() {
      contentsApi()
        .fetchAll()
        .then((res) => {
          setEmployeeList(res.data);
        })
        .catch((err) => console.log(err));
    }
  
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
                     {employeeList.slice(0,3).map((item) => {
                       return (
                        <div className="gird__column-2-cate">
                              <div className="dealsock-body-item">
                                 <a className="home-product-item">
                                     <div className="home-product-item-img">
                                     <img src={item.imageSrc}></img>
                                     </div>
                                  <h4 className="home-product-item__name">{item.name}</h4>
                                  <div className="home-product-item__price">
                                  <span className="home-product-item__price-old">{item.promotionPrice}</span>
                                  <span className="home-product-item__price-new">{item.price}</span>
                                  </div>
                                   <div className="home-product-item__action">
                                     <span className="home-product-item__like-cate">
                                       <i><AiOutlineHeart/></i>
                                     </span>
                                     <span className="home-product-item__sub">
                                       <i>{item.viewCount}</i>
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
                                      <span className="home-product-item__saleoff-percent">{item.detail}%</span>
                                      <span className="home-product-item__saleoff-label">GIẢM</span>
                                   </div>
  
                                  </a>
                              </div>
                          </div>
                       );
                     })}
                          
                  
                      </div>
                      </div>
                </div>
              </div>
      );
  }
  