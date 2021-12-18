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
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 sort_button">
        <div class="dropdown">
    
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
            
   
     
          {/* {console.log(values)} */}
        </div>
        <div className="buttonxuat">
        <button className="btn btn-primary buttonxuat" onClick={props.refreshEmployeeList}>
          Xuất
        </button>
        </div>
      </div>

    </>
  );
}

export default SortMonth;
