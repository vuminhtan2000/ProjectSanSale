import React, { Component } from "react";
import TaskItem1 from "./TaskItem1";

export default function TaskList1(props) {
  return (
    <div class="row mt-15">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th class="text-center">STT</th>
              <th class="text-center">Image</th>
              <th class="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {props.employeeList.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td className="text-center">
                          <img
                            src={item.imageSrc}
                            className="card-img-top"
                            style={{ height: 30, width: 100 }}
                          />
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
                      <span class="fa fa-pencil"></span>
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={(e) => props.onDelete(e, parseInt(item.id))}
                    >
                     <span class="fa fa-trash"></span>
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
