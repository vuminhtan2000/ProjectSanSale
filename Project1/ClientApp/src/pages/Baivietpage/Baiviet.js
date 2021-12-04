import React, { useEffect, useState } from "react";
import Header from "../../components/headerconteact/header";
import Homemenu from "../../components/menuhome/homemenu";
import Cateproduct from "../../components/Sanpham/cateproduct";
import Footer from "../../pages/footer/footer";
import axios from "axios";
import parse from "html-react-parser";
import { API_URL } from "../../constants/config";

import "./baiviet.css";
export default function Baiviethome() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  const contentsApi = (url = `${API_URL}/Contents`) => {
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
    <div>
      <Header />
      <Homemenu />
      <div className="container-bv">
        <div className="container">
          <div className="baiviet">
            {employeeList.map((item) => {
              return (
                <div className="baiviet-body">
                  <h1 className="title">{item.name}</h1>
                  <p className="metatitle">{item.metaTitle}</p>
                  <div className="meta-img"> {parse(item.content1)}</div>
                </div>
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
