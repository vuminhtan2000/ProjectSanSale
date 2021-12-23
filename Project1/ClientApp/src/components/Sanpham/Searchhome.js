import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
function Searchhome(props) {
  return (


                <div className="search">
                <div className="i-serach">
                  
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm sản phẩm "
                    alt=""
                    onChange={(event) => {
                      props.setSearch(event.target.value);
                    }}
                  />
                </div>
                <div className="b-serach">
                  <button className="btn-primary  icon" type="button">
                    <BsSearch />
                  </button>
                </div>
              </div>
  );
}

export default Searchhome;
