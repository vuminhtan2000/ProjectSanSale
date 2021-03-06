import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { API_URL } from "../../constants/config";
export default function Productlist() {
  const [employeeList, setEmployeeList] = useState([]);
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(0);
  useEffect(() => {
    refreshEmployeeList();
  }, []);
  const onclick = (
    e,
    id,
    name,
    code,
    metaTitle,
    description,
    image,
    moreImages,
    price,
    promotionPrice,
    hotProduct,
    quantity,
    categoryId,
    detail,
    warranty,
    createdDate,
    createdBy,
    modifiedDate,
    modifiedBy,
    metaKeywords,
    metaDescriptions,
    status,
    topHot,
    viewCount,
    link,
    imageSrc
  ) => {
    axios
      .put(`${API_URL}/Products/body/${id}`, {
        id,
        name,
        code,
        metaTitle,
        description,
        image,
        moreImages,
        price,
        promotionPrice,
        hotProduct: (hotProduct = false
          ? hotProduct == true
          : hotProduct == false),
        //
        quantity,
        categoryId,
        detail,
        warranty,
        createdDate,
        createdBy,
        modifiedDate,
        modifiedBy,
        metaKeywords,
        metaDescriptions,
        status,
        topHot,
        viewCount,
        link,
        imageSrc,
      })
      .then((res) => {
        refreshEmployeeList();

      });
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

  
  const deleteCustomerByIds = (
    id,
    name,
    code,
    metaTitle,
    description,
    image,
    moreImages,
    price,
    promotionPrice,
    hotProduct,
    quantity,
    categoryId,
    detail,
    warranty,
    createdDate,
    createdBy,
    modifiedDate,
    modifiedBy,
    metaKeywords,
    metaDescriptions,
    status,
    topHot,
    viewCount,
    link,
    imageSrc
  ) => {
    let arrayids = [];
    {
      employeeList.forEach((d) => {
        if (d.hotProduct) {
          arrayids.push(d.id);
        }
      });
    }
    console.log("abc " + arrayids);
    axios
      .put(`${API_URL}/Products/body/${arrayids}`, {
        id,
        name,
        code,
        metaTitle,
        description,
        image,
        moreImages,
        price,
        promotionPrice,
        hotProduct,
        quantity,
        categoryId,
        detail,
        warranty,
        createdDate,
        createdBy,
        modifiedDate,
        modifiedBy,
        metaKeywords,
        metaDescriptions,
        status,
        topHot,
        viewCount,
        link,
        imageSrc,
      })
      .then((res) => {
        refreshEmployeeList();
       
      });
  };
  return (
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title"> Product </h4>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => {
                deleteCustomerByIds();
              }}
            />
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-primary">
                  <th>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        let value = e.target.checked;
                        setEmployeeList(
                          employeeList.map((item) => {
                            item.hotProduct = value;
                            onclick(
                              e,
                              parseInt(item.id),
                              item.name,
                              item.code,
                              item.metaTitle,
                              item.description,
                              item.image,
                              item.moreImages,
                              item.price,
                              item.promotionPrice,
                              item.hotProduct,
                              item.quantity,
                              item.categoryId,
                              item.detail,
                              item.warranty,
                              item.createdDate,
                              item.createdBy,
                              item.modifiedDate,
                              item.modifiedBy,
                              item.metaKeywords,
                              item.metaDescriptions,
                              item.status,
                              item.topHot,
                              item.viewCount,
                              item.link,
                              item.imageSrc
                            );
                            return item;
                          })
                        );
                      }}
                    />
                    All
                  </th>
                  <th>Id</th>
                  <th>T??n</th>
                  <th>Gi?? G???c</th>
                  <th>Gi?? B??n</th>
                  {/* <th>L?????ng Truy C???p</th>
                  <th>H??ng T???n</th> */}
                  <th>H??nh ???nh</th>
                  <th>Tr???ng Th??i</th>
                  {/* <th>H??nh ?????ng</th> */}
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
                        val.name.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <input
                              type="checkbox"
                              checked={item.hotProduct}
                              onChange={(e) =>
                                onclick(
                                  e,
                                  parseInt(item.id),
                                  item.name,
                                  item.code,
                                  item.metaTitle,
                                  item.description,
                                  item.image,
                                  item.moreImages,
                                  item.price,
                                  item.promotionPrice,
                                  item.hotProduct,
                                  item.quantity,
                                  item.categoryId,
                                  item.detail,
                                  item.warranty,
                                  item.createdDate,
                                  item.createdBy,
                                  item.modifiedDate,
                                  item.modifiedBy,
                                  item.metaKeywords,
                                  item.metaDescriptions,
                                  item.status,
                                  item.topHot,
                                  item.viewCount,
                                  item.link,
                                  item.imageSrc
                                )
                              }
                            />
                            {/* <input
                            type="checkbox"
                            id={item.id}
                            checked={item.hotProduct}
                           
                            onClick={(e) =>
                              onclick(
                                e,
                                parseInt(item.id),
                                item.name ,
                                item.code,
                                item.metaTitle ,
                                item.description,
                                item.image ,
                                item.moreImages ,
                                item.price,
                                item.promotionPrice ,
                                item.hotProduct ,
                                item.quantity ,
                                item.categoryId ,
                                item.detail,
                                item.warranty ,
                                item.createdDate,
                                item.createdBy ,
                                item.modifiedDate ,
                                item.modifiedBy ,
                                item.metaKeywords ,
                                item.metaDescriptions,
                                item.status ,
                                item.topHot  ,
                                item.viewCount ,
                                item.link ,
                                item.imageSrc 
                              )
                              
                            
                             
                            }
                            
                         
                            /> */}
                          </td>
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
                              {item.status == true ? "C??n" : "H???t"}
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
