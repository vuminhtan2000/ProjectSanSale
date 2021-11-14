import React, { Component } from "react";
import Sort1 from "./Sort1";
import Search1 from "./Search1";

class Control1 extends Component {
  render() {
    return (
      <div class="row mt-15">
        {/* 2.1. Tìm kiếm theo tên */}
        <Search1 />

        {/* 2.2. Sắp xếp a-z */}
        <Sort1 />
      </div>
    );
  }
}

export default Control1;
