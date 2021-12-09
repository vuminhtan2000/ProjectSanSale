import React, { Component } from "react";
import Sort1 from "./Sort1";
import Search1 from "./Search1";

function Control1(props) {
  return (
    <div class="row mt-15">
      {/* 2.1. Tìm kiếm theo tên */}
      <Search1 employeeList={props.employeeList} setSearch={props.setSearch} />

      {/* 2.2. Sắp xếp a-z */}
      <Sort1 employeeList={props.employeeList} setNumber={props.setNumber} />
    </div>
  );
}

export default Control1;
