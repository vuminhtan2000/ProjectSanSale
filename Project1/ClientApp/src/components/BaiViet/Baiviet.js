import React, { useState, useEffect } from "react";
import TaskForm_baiviet from "./component_baiviet/TaskForm_baiviet";
import TaskList_baiViet from "./component_baiviet/TaskList_baiViet";
import axios from "axios";
import parse from "html-react-parser";
import { API_URL } from "../../constants/config";

export default function BaiViet(props) {
  // const [editor, setEditor] = useState(null);
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  const employeeAPI = (url = `${API_URL}/Contents/`) => {
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
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div class="container">
      <div class="baiviet">
        <TaskForm_baiviet
          addOrEdit={addOrEdit}
          recordForEdit={recordForEdit}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          number={number}
          setNumber={setNumber}
        />
        <TaskList_baiViet
          showRecordDetails={showRecordDetails}
          onDelete={onDelete}
          employeeList={employeeList}
          setIsVisible={setIsVisible}
          isVisible={isVisible}
          setNumber={setNumber}
        />
      </div>
    </div>
  );
}
