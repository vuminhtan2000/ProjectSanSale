import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "../ProductList/component_product/TaskForm";
import TaskList from "./component_product/TaskList";
import Control from "./component_product/Control";
import { API_URL } from "../../constants/config";
import "./Product.css";

export default function ProductList(props) {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(0);
  const [truefalse, setTrueFalse] = useState(null);
  const [url, setUrl] = useState();
  const [valuesMonth, setValuesMonth] = useState(0);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  const employeeAPI = (url = `${API_URL}/Products/`) => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  const employeeAPI_month = (
    url = `${API_URL}/Products/GetProducts_day?month=${valuesMonth}`
  ) => {
    return {
      fetchAll: () => axios.get(url),
    };
  };

  async function refreshEmployeeList() {
    if (valuesMonth == 0) {
      await employeeAPI()
        .fetchAll()
        .then((res) => {
          setEmployeeList(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else if (valuesMonth != 0) {
      await employeeAPI_month()
        .fetchAll()
        .then((res) => {
          setEmployeeList(res.data);
        })
        .catch((err) => console.log(err));
    }
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

  return (
    <>
      <div class="container">
        <TaskForm
          addOrEdit={addOrEdit}
          recordForEdit={recordForEdit}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <Control
          // employeeList={employeeList}
          setSearch={setSearch}
          setNumber={setNumber}
          setTrueFalse={setTrueFalse}
          setValuesMonth={setValuesMonth}
          refreshEmployeeList={refreshEmployeeList}
        />
        <TaskList
          showRecordDetails={showRecordDetails}
          onDelete={onDelete}
          employeeList={employeeList}
          setIsVisible={setIsVisible}
          isVisible={isVisible}
          search={search}
          number={number}
          truefalse={truefalse}
          valuesMonth={valuesMonth}
        />
      </div>
    </>
  );
}

// export default ProductList;
