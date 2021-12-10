import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { API_URL } from "../../constants/config";
export default function Productlist() {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(0);
  const [url, setUrl] = useState();
  const [rememberUser, setRememberUser] = useState(true)
  useEffect(() => {
    refreshEmployeeList();
  }, []);
  const saveclick = (

  ) => {
    axios.put(`${API_URL}/Products/54`, {
        id:employeeList.id,
        name:employeeList.name,
        metaTitle:employeeList.metaTitle,
        description:employeeList.description,
        image:employeeList.image,
        price:employeeList.price,
        promotionPrice:employeeList.promotionPrice,
        hotProduct:employeeList.hotProduct,
        categoryId:employeeList.categoryId,
        quantity:employeeList.quantity,
        detail:employeeList.detail,
        metaKeywords:employeeList.metaKeywords,
        metaDescriptions:employeeList.metaDescriptions,
        status:employeeList.status,
        viewCount: employeeList.viewCount,
        link:employeeList.link,
        imageFile:employeeList.imageFile,
        imageSrc:employeeList.imageSrc,
    }).then(resp => {
        console.log('loi')
        console.log(resp.data)
      });;
   
  };
  const employeeAPI = (url = `${API_URL}/Products/`) => {
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
                  <th>Chọn</th>
                  <th>Id</th>
                  <th>Tên</th>
                  <th>Giá Gốc</th>
                  <th>Giá Bán</th>
                  {/* <th>Lượng Truy Cập</th>
                  <th>Hàng Tồn</th> */}
                  <th>Hình Ảnh</th>
                  <th>Trạng Thái</th>
                  {/* <th>Hành Động</th> */}
                </thead>
                <tbody>
                  {employeeList
                    .sort((a, b) => {
                      if (number == 1) {
                        return a.name.toLowerCase() > b.name.toLowerCase()
                          ? 1
                          : -1;
                      } else if (number == -1) {
                        return a.name.toLowerCase() < b.name.toLowerCase()
                          ? 1
                          : -1;
                      }
                      {
                        /* a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1 */
                      }
                    })

                    .filter((val) => {
                      if (search == "") {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((item, i) => {
                      return (
                        <tr key={i}>
                          <td><input
                            type="checkbox"
                            id={item.id}
                            checked={item.hotProduct}
                            onChange={saveclick}
                            /></td>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.promotionPrice}</td>
                          <td>{item.price}</td>


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
