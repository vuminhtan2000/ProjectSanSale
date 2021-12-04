import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/DashBoard/Dashboard";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import Home from "./pages/HomePage/Trangchu/Home";
import Baiviethome from "./pages/Baivietpage/Baiviet";
import Backtotop from "./components/backtotop/backtotop";
import Layout_chung from "./components/caterory_menu/showsanpham/Layout_chung";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/baiviet" component={Baiviethome} />
          <Route path="/layout_chung" component={Layout_chung} />
          <Route path="/" exact component={Home} />
          <Backtotop />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
