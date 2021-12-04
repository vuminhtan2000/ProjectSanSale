import React, { useEffect, useState } from "react";
import Header from "../../components/headerconteact/header";
import Homemenu from "../../components/menuhome/homemenu";
import Cateproduct from "../../components/Sanpham/cateproduct";
import Footer from "../../pages/footer/footer";
import axios from "axios";
import parse from "html-react-parser";
import { API_URL } from "../../constants/config";
import { Route, Link } from "react-router-dom";
// import Baiviet from "./baivietid";

import "./baiviet.css";
import Baiviet from "./baivietid";

export default function Baiviethome() {
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
    <div>
      <Header />
      <Homemenu />
     
      <div className="container-bv">
        <div className="container">
          <div className="baiviet">
          <h2 style={{ textAlign: "center" }}>BÀI VIẾT</h2>
          {/* <Link to="/a">taniarascia</Link> on GitHub. */}
            {employeeList.map((item) => {
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
          <Cateproduct />
        </div>
      </div>
      <Footer />
    </div>
  );
}
