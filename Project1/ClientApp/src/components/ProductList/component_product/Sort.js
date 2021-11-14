import React, { Component, useState } from "react";
import axios from "axios";

function Sort(props) {
  const number_1 = () => {
    props.setNumber(1);
  };
  const number__1 = () => {
    props.setNumber(-1);
  };
  return (
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div class="dropdown" style={{ marginTop: 10, padding: 10 }}>
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sắp Xếp <span class="fa fa-caret-square-o-down ml-5"></span>
        </button>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <a role="button" onClick={number_1}>
              <span class="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
            </a>
          </li>
          <li>
            <a role="button" onClick={number__1}>
              <span class="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
            </a>
          </li>
        </ul>
        {/* {props.employeeList
          .Sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((item, i) => {
            return (
              <td class="row" key={i}>
                <td>{item.name}</td>
              </td>
            );
          })} */}
      </div>
    </div>
  );
}

export default Sort;
