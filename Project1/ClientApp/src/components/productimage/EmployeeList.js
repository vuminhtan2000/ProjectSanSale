import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import "./1.css";
import { API_URL } from "../../constants/config";

export default function EmployeeList() {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  const employeeAPI = (url = `${API_URL}/Slides`) => {
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
      })
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    //if (formData.get('id') == "0")
    employeeAPI()
      .create(formData)
      .then((res) => {
        onSuccess();
        refreshEmployeeList();
      })
      .catch((err) => console.log(err));
    // else
    //     employeeAPI().update(formData.get('id'), formData)
    //         .then(res => {
    //             onSuccess();
    //             refreshEmployeeList();
    //         })
    //         .catch(err => console.log(err))
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

  const imageCard = (data) => (
    <div
      className="card"
      onClick={() => {
        showRecordDetails(data);
      }}
    >
      <img src={data.imageSrc} className="card-img-top rounded-circle" />
      <div className="card-body">
        <h5>{data.description}</h5>
        <span>{data.link}</span> <br />
        <button
          className="btn btn-light delete-button"
          onClick={(e) => onDelete(e, parseInt(data.id))}
        >
          <i>
            <AiFillDelete />
          </i>
        </button>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="jumbotron jumbotron-fluid py-4">
          <div className="container text-center">
            <h1 className="display-4">Employee Register</h1>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <Employee addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </div>
      <div className="col-md-8">
        <table>
          <tbody>
            {
              //tr > 3 td
              [...Array(Math.ceil(employeeList.length / 3))].map((e, i) => (
                <tr key={i}>
                  <td>{imageCard(employeeList[3 * i])}</td>
                  <td>
                    {employeeList[3 * i + 1]
                      ? imageCard(employeeList[3 * i + 1])
                      : null}
                  </td>
                  <td>
                    {employeeList[3 * i + 2]
                      ? imageCard(employeeList[3 * i + 2])
                      : null}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
