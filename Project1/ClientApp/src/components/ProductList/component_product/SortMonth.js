import React, { Component, useState, useEffect } from "react";
import { API_URL } from "../../../constants/config";
import axios from "axios";

function SortMonth(props) {
  // const [data, setData] = useState([]);
  // const [values, setValues] = useState(1);

  // const getInitialState = () => {
  //   const value = 0;
  //   return value;
  // };

  // const employeeAPI_month = (
  //   url = `${API_URL}/Products/GetProducts_day?month=${values}`
  // ) => {
  //   return {
  //     fetchAll: () => axios.get(url),
  //   };
  // };
  // const employeeAPI_pro = (url = `${API_URL}/Products/`) => {
  //   return {
  //     fetchAll: () => axios.get(url),
  //   };
  // };
  // useEffect(() => {
  //   refreshEmployeeList_pro();
  // }, []);

  // async function refreshEmployeeList_pro() {
  //   if (values == 0) {
  //     await employeeAPI_pro()
  //       .fetchAll()
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   } else if (values != 0) {
  //     await employeeAPI_month()
  //       .fetchAll()
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }

  return (
    <>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 sort_button">
        <div class="dropdown">
          <div className="sortMonth">
            <select
              type="text"
              class="select-input"
              name=""
              onChange={(e) => {
                props.setValuesMonth(e.target.value);
              }}
            >
              <option value={0}>All</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
            </select>
          </div>
          {/* {console.log(values)} */}
        </div>
      </div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
        <button className="" onClick={props.refreshEmployeeList}>
          Xuất
        </button>
      </div>
    </>
  );
}

export default SortMonth;
