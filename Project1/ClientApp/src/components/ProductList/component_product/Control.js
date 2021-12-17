import React, { useState } from "react";
import Sort from "./Sort";
import Search from "./Search";
import SortMonth from "./SortMonth";

function Control(props) {
  return (
    <div class="row mt-15">
      {/* 2.1. Tìm kiếm theo tên */}
      <Search employeeList={props.employeeList} setSearch={props.setSearch} />

      {/* 2.2. Sắp xếp a-z */}
      <Sort
        employeeList={props.employeeList}
        setNumber={props.setNumber}
        setTrueFalse={props.setTrueFalse}
      />
      <SortMonth
        setValuesMonth={props.setValuesMonth}
        refreshEmployeeList={props.refreshEmployeeList}
      />
    </div>
  );
}

export default Control;
