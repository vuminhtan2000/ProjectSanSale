import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/config";
import axios from "axios";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const renderData = (data) => {
  return (
    <div className="home-product">
      {/* grid ->row -Column */}
      <div className="grid_row">
        {data.map((item) => {
          return (
            <div className="gird__column-2">
              {/* product item */}
              <a
                className="home-product-item"
                href={item.link}
                onClick={(e) =>
                  onclick(
                    e,
                    parseInt(item.id),
                    item.name,
                    item.metaTitle,
                    item.description,
                    item.image,
                    item.price,
                    item.promotionPrice,
                    item.categoryId,
                    item.quantity,
                    item.detail,
                    item.metaKeywords,
                    item.metaDescriptions,
                    item.status,
                    item.viewCount,
                    item.link,
                    item.imageFile,
                    item.imageSrc
                  )
                }
              >
                <div className="home-product-item-img">
                  <img src={item.imageSrc}></img>
                </div>
                <h4 className="home-product-item__name">{item.name} </h4>
                <div className="home-product-item__price">
                  <span className="home-product-item__price-old">
                    {item.promotionPrice}.000
                  </span>
                  <span className="home-product-item__price-new">
                    {item.price}.000
                  </span>
                </div>
                <div className="home-product-item__action">
                  <span className="home-product-item__like">
                    <i>
                      <AiOutlineHeart />
                    </i>
                  </span>
                  <span className="home-product-item__sub">
                    <i>S??? l?????ng Click {item.viewCount}</i>
                  </span>
                </div>
                <div className="home-product-item__origin">
                  <span className="home-product-item__brand">Whoo</span>
                  <a
                    href=""
                    className="home-product-item__origin-btn btn-primary"
                  >
                    <p>Mua ngay</p>
                  </a>
                </div>
                {/* <div className="home-product-item__favourite">
                                    Y??u th??ch
                                 </div> */}
                <div className="home-product-item__saleoff">
                  <span className="home-product-item__saleoff-percent">
                    {item.detail}%
                  </span>
                  <span className="home-product-item__saleoff-label">GI???M</span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function QuanAo(props) {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(18);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    if (
      Number(event.target.id) + 1 > maxPageNumberLimit ||
      Number(event.target.id) + 2 > maxPageNumberLimit
    ) {
      setmaxPageNumberLimit(Number(event.target.id) + 2);
      setminPageNumberLimit(Number(event.target.id) - 3);
    }
    if (
      Number(event.target.id) - 2 < minPageNumberLimit ||
      Number(event.target.id) - 3 < minPageNumberLimit
    ) {
      setmaxPageNumberLimit(Number(event.target.id) + 2);
      setminPageNumberLimit(Number(event.target.id) - 3);
    }
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <div
          key={number}
          id={number}
          onClick={handleClick}
          className="home-filler__page_btn home-filler__page_number_btn"
        >
          {number}
        </div>
      );
    } else {
      return null;
    }
  });
  useEffect(() => {
    refreshEmployeeList_pro();
  }, []);

  const employeeAPI = (
    url = `${API_URL}/Products/GetProducts_categoryId?categoryId=${values}`
  ) => {
    return {
      fetchAll: () => axios.get(url),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    };
  };

  const employeeAPI_pro = (url = `${API_URL}/Products/`) => {
    return {
      fetchAll: () => axios.get(url),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    };
  };

  function refreshEmployeeList_pro() {
    if (values == 0) {
      employeeAPI_pro()
        .fetchAll()
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      employeeAPI()
        .fetchAll()
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  const getInitialState = () => {
    const value = 3;
    return value;
  };

  const [values, setValues] = useState(getInitialState);

  const handleChange = (e) => {
    setValues(e.target.value);
    refreshEmployeeList_pro();
    console.log(values);
  };
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + 2);
      setminPageNumberLimit(minPageNumberLimit + 2);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - 2);
      setminPageNumberLimit(minPageNumberLimit - 2);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <div>
      <>
        {/* <h1>Todo List</h1> <br /> */}
        <div className="app_container">
          <div className="grid">
            <div className="grid__row">
              <div className="grid__column-12">
                <div className="home-filter">
                  <span className="home-filler_label"> S???p x???p theo</span>

                  <button class="home-filler_btn btn-cate btn-primary ">
                    Ph??? Bi???n
                  </button>
                  <button class="home-filler_btn btn-cate ">M???i Nh???t</button>
                  <button class="home-filler_btn btn-cate ">B??n Ch???y</button>
                  <select
                    type="text"
                    class="select-input"
                    name="categoryId"
                    value={values}
                    onChange={handleChange}
                  >
                    <option value={0} selected>
                      0 . All
                    </option>
                    <option value={1}>1. Thi???t B??? ??i???n T???</option>
                    <option value={2}>2. Qu???n ??o </option>
                    <option value={3}>3. Food</option>
                    <option value={4}>4. N???i Th???t</option>
                    <option value={5}>5. Cosmetic</option>
                  </select>
                  <div className="home-filter__page">
                    <span className="home-filler__page-num">
                      <span className=" ">{currentPage}</span>
                    </span>
                  </div>
                  <div className="home-filler__page-control">
                    <button
                      onClick={handlePrevbtn}
                      disabled={currentPage == pages[0] ? true : false}
                      className="home-filler__page-btn home-filler__page-btn-disable"
                    >
                      <i className="home-filler__page-icon">
                        <BiChevronLeft />
                      </i>
                    </button>
                    {renderPageNumbers}
                    <button
                      className="home-filler__page-btn"
                      onClick={handleNextbtn}
                      disabled={
                        currentPage == pages[pages.length - 1] ? true : false
                      }
                    >
                      <i className="home-filler__page-icon">
                        <BiChevronRight />
                      </i>
                    </button>
                  </div>
                </div>

                {renderData(currentItems)}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
