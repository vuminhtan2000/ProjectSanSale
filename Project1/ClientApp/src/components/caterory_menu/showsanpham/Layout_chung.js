import React, { useState } from "react";
// import { getToken, getUser, removeUserSession } from "../../Utils/Common";
import { API_URL } from "../../../constants/config";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";
import Homemenu from "../../../components/menuhome/homemenu";
import Header from "../../../components/headerconteact/header";
import Cateproduct from "../../../components/Sanpham/cateproduct";
import Footer from "../../../pages/footer/footer";
import DienTu from "../showsanpham/dientu/dientu";
import Food from "../showsanpham/food/food";
import QuanAo from "./quanao/quanao";
import GiayDep from "./giaydep/giaydep";
import Cosmetic from "./cosmestic/cosmestic";
import DongHo from "./dongho/dongho";
import NapThe from "./napthe/napthe";

// import { API_URL } from "../../constants/config";
export default function Layout_chung(props) {
  const [categoryId, setCategoryId] = useState();

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Homemenu />
        <Route path="/layout_chung/thietbidientu" component={DienTu} />
        <Route path="/layout_chung/food" component={Food} />
        <Route path="/layout_chung/quanao" component={QuanAo} />
        <Route path="/layout_chung/giaydep" component={GiayDep} />
        <Route path="/layout_chung/cosmetic" component={Cosmetic} />
        <Route path="/layout_chung/dongho" component={DongHo} />
        <Route path="/layout_chung/napthe" component={NapThe} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
