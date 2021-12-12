import React, { Component, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function TaskList(props) {
  return (
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title"> Product </h4>
          </div>
          <div class="card-body" style={{ textAlign: "center" }}>
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-primary">
                  <th>Id</th>
                  <th width="350px" style={{ textAlign: "none" }}>
                    Tên
                  </th>
                  <th>Giá Gốc</th>
                  <th>Giá Bán</th>
                  <th>Clicked</th>
                  <th>Hàng Tồn</th>
                  <th>Hình Ảnh</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
                </thead>
                <tbody>
                  {props.employeeList
                    .sort((a, b) => {
                      if (props.number == 1) {
                        return a.name.toLowerCase() > b.name.toLowerCase()
                          ? 1
                          : -1;
                      } else if (props.number == -1) {
                        return a.name.toLowerCase() < b.name.toLowerCase()
                          ? 1
                          : -1;
                      }
                    })
                    .filter((val) => {
                      if (props.search == "") {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(props.search.toLowerCase())
                      ) {
                        return val;
                      } else if (props.truefalse == true) {
                        return val;
                      } else if (props.truefalse == false) {
                        return val;
                      }
                    })
                    .map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.promotionPrice}</td>
                          <td>{item.price}</td>
                          <td>{item.viewCount}</td>
                          <td>{item.quantity}</td>

                          <td className="text-center">
                            <img
                              src={item.imageSrc}
                              className="card-img-top"
                              style={{ height: 50, width: 50 }}
                            />
                          </td>

                          <td class="text-center">
                            <span
                              className={
                                item.status == true
                                  ? "label label-success"
                                  : "label label-warning"
                              }
                            >
                              {item.status == true ? "Còn" : "Hết"}
                            </span>
                          </td>
                          <td class="text-center">
                            <button
                              type="button"
                              class="btn btn-warning"
                              onClick={() => {
                                props.showRecordDetails(item);
                                props.setIsVisible(true);
                              }}
                            >
                              <AiOutlineEdit />
                            </button>
                            &nbsp;
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={(e) =>
                                props.onDelete(e, parseInt(item.id))
                              }
                            >
                              <AiOutlineDelete />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
