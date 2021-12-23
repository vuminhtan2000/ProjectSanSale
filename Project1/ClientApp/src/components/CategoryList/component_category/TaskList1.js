import React, { Component } from "react";
import TaskItem1 from "./TaskItem1";

export default function TaskList1(props) {
  return (
    <div class="row mt-15">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15">
        <table class="table table-bordered table-hover">
          <thead>
            <div>
              <h4 class="card-title"> Categories </h4>
            </div>

            <tr>
              <th class="text-center">STT</th>
              <th class="text-center">Tên danh mục</th>
              <th class="text-center">Meta Title</th>
              <th class="text-center">Trạng Thái</th>
              <th class="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {props.employeeList
              .sort((a, b) => {
                if (props.number == 1) {
                  return a.nameCategory.toLowerCase() >
                    b.nameCategory.toLowerCase()
                    ? 1
                    : -1;
                } else if (props.number == -1) {
                  return a.nameCategory.toLowerCase() <
                    b.nameCategory.toLowerCase()
                    ? 1
                    : -1;
                }
              })
              .filter((val) => {
                if (props.search == "") {
                  return val;
                } else if (
                  val.nameCategory
                    .toLowerCase()
                    .includes(props.search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  <tr>
                    <td style={{ textAlign: "center" }}>{item.id}</td>
                    <td>{item.nameCategory}</td>
                    <td>{item.metaTitle}</td>
                    <td class="text-center">
                      <span
                        className={
                          item.status == true
                            ? "label label-success"
                            : "label label-warning"
                        }
                      >
                        {item.status == true ? "Còn hoạt động" : "Tạm dừng"}
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
                        <span class="fa fa-pencil mr-5"></span>Sửa
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={(e) => props.onDelete(e, parseInt(item.id))}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// export default TaskList;
