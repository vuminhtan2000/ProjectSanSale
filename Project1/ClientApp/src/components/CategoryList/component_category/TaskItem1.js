import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 22}</td>
        <td>{task.name}</td>
        <td class="text-center">
          <span class="label label-success">Kích Hoạt</span>
        </td>
        <td class="text-center">
          <button type="button" class="btn btn-warning">
            <span class="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button type="button" class="btn btn-danger">
            <span class="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
