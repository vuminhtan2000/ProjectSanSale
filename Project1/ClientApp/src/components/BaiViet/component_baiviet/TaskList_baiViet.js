import React, { Component } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function TaskList_baiViet(props) {
  return (
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title"> Product </h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-primary">
                  <th>Id</th>
                  <th>Tên bài viết</th>
                  <th>Category ID</th>
                  <th>tên bài viết</th>
                  <th>Hành Động</th>
                </thead>
                <tbody>
                  {props.employeeList.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.categoryId}</td>
                        <td>{item.metaTitle}</td>


                        <td class="text-center">
                          <button
                            type="button"
                            class="btn btn-warning"
                            onClick={() => {
                              props.setNumber(-1);
                              props.showRecordDetails(item);
                              props.setIsVisible(true);
                            }}
                          >
                            {/* {console.log(props.setNumber)} */}
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
