import { SchoolOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function TaskList(props) {
  function topFunction() {
    document.body.scrollTop = 50;
    document.documentElement.scrollTop = 50;
  }



  return (
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title"> Product </h4>
          </div>
          <div class="card-body" style={{ textAlign: "center" }}>
            <div class="table-responsive " >
              <table class="table"  >
                <thead class=" text-primary">
                <th>
                <input
                      type="checkbox"
                      onChange={(e) => {
                        let value = e.target.checked;
                        props.setEmployeeList(
                          props.employeeList.map((item) => {
                            item.hotProduct = value;
                            props.onclick(
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
                  <th width="350px" style={{ textAlign: "none" }}>
                    T??n
                  </th>
                  <th>Gi?? G???c</th>
                  <th>Gi?? B??n</th>
                  <th>Clicked</th>
                  <th>H??ng T???n</th>
                  <th>H??nh ???nh</th>
                  <th>Tr???ng Th??i</th>
                  <th>H??nh ?????ng</th>
                </thead>
                <tbody >
                  {props.employeeList

                    .filter((val) => {
                      if (props.search == "") {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(props.search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .filter((val) => {
                      if (props.truefalse == null) {
                        return val;
                      } else if (val.status == props.truefalse) {
                        return val;
                      } else if (val.status == props.truefalse) {
                        return val;
                      }
                    })
                    .sort((a, b) => {
                      if (props.number == 1) {
                        return a.name.toLowerCase() > b.name.toLowerCase()
                          ? 1
                          : -1;
                      } else if (props.number == -1) {
                        return a.name.toLowerCase() < b.name.toLowerCase()
                          ? 1
                          : -1;
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
                                props.onclick(
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
                            </td>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.promotionPrice}</td>
                          <td>{item.price}</td>
                          <td>{item.viewCount}</td>
                          <td>{item.quantity}</td>

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
                          <td class="text-center">
                            <button
                              type="button"
                              class="btn btn-warning"
                              onClick={() => {
                                props.showRecordDetails(item);
                                props.setIsVisible(true);
                                topFunction() 
                                
                              }}
                            >
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
