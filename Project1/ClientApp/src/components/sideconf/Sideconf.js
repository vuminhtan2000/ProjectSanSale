import React, { useState, useEffect } from "react";
import TaskForm1 from "./component_Slides/TaskFormside";
import Control1 from "./component_Slides/Control1";
import TaskList1 from "./component_Slides/TaskListside";
import axios from "axios";
import { API_URL } from "../../constants/config";

export default function Slides() {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [isDisplayForm, setIsDisplayForm] = useState(false);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  const employeeAPI = (url = `${API_URL}/Slides/`) => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshEmployeeList() {
    employeeAPI()
      .fetchAll()
      .then((res) => {
        setEmployeeList(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("id") == "0")
      employeeAPI()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshEmployeeList();
          window.confirm("Bạn đã Thêm thành công");
        })
        .catch((err) => {
          console.log(err);
          window.confirm("Bạn đã Thêm thất bại");
        });
    else
      employeeAPI()
        .update(formData.get("id"), formData)
        .then((res) => {
          onSuccess();
          refreshEmployeeList();
          window.confirm("Bạn đã update thành công");
        })
        .catch((err) => {
          console.log(err);
          window.confirm("Mời bạn nhập lại");
        });
  };

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Are you sure to delete this record?"))
      employeeAPI()
        .delete(id)
        .then((res) => refreshEmployeeList())
        .catch((err) => console.log(err));
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div class="container">
      {/* <div class="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div> */}
      <TaskForm1
        addOrEdit={addOrEdit}
        recordForEdit={recordForEdit}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Control1 />
        <TaskList1
          showRecordDetails={showRecordDetails}
          onDelete={onDelete}
          employeeList={employeeList}
          setIsVisible={setIsVisible}
          isVisible={isVisible}
        />
      </div>
    </div>
  );
}

// export default ProductList;
