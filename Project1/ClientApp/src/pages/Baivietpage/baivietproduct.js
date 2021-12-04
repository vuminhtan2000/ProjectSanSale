import React, { useEffect, useState } from "react";

import axios from "axios";
import parse from "html-react-parser";
import { API_URL } from "../../constants/config";
import { Route, Link } from "react-router-dom";
// import Baiviet from "./baivietid";

import "./baiviet.css";
import Baiviet from "./baivietid";

export default function Baiviethomeproduct() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  const contentsApi = (url = `${API_URL}/Contents/`) => {
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
  // const MenuLink = () => {
  //   return (
  //     <Route path="/id" component={Baiviet} />
  //   );
  // };
  

  return (
   
<>
    <div class="clearfix vi-header">
    <h3 class="vi-left-title pull-left">Bài Viết Liên Quan</h3>
    <div class="vi-right-link pull-right">
    <a class="vi-more" href="/baiviet">Xem tất cả »</a>
    </div>
  </div>
    <div className="container">
  
      <div className="baiviet">
    
      {/* <Link to="/a">taniarascia</Link> on GitHub. */}
        {employeeList.slice(0,3)
        .map((item) => {
          return (
            <a className="card-baiviet" href={`/post/${item.id}`}>
            <div class="row">
            <div class="col-12 mt-3">
                <div class="card">
                    <div class="card-horizontal-a">
                        <div class="img-square">
                            <img class="" src={item.imageSrc} alt="Card image cap"/>
                        </div>
                        <div class="card-body1">
                            <h4 class="card-title1">{item.name}</h4>
                            <p class="card-text1">{item.metaTitle}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
          </div>
          </a>
            // <div className="baiviet-body">
            //   <h1 className="title">{item.name}</h1>
            //   <p className="metatitle">{item.metaTitle}</p>
            //   <div className="meta-img"> {parse(item.content1)}</div>
            // </div>
          );
        })}
      </div>
      
    </div>

</>



  );
}
