// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./cateproduct.css";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import { AiOutlineHeart } from "react-icons/ai";
// import { API_URL } from "../../constants/config";

// export default function Cateproduct() {
//   const [employeeList, setEmployeeList] = useState([]);

//   useEffect(() => {
//     refreshEmployeeList();
//   }, []);

//   const employeeAPI = (
//     url = `${API_URL}/Products/GetProducts_status?status=true`
//   ) => {
//     return {
//       fetchAll: () => axios.get(url),
//       update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
//     };
//   };

//   function refreshEmployeeList() {
//     employeeAPI()
//       .fetchAll()
//       .then((res) => {
//         setEmployeeList(res.data);
//       })
//       .catch((err) => console.log(err));
//   }
//   //tính số click trên sản phẩm

//   const onclick = (
//     e,
//     id,
//     name,
//     metaTitle,
//     description,
//     image,
//     price,
//     promotionPrice,
//     categoryId,
//     quantity,
//     detail,
//     metaKeywords,
//     metaDescriptions,
//     status,
//     viewCount,
//     link,
//     imageFile,
//     imageSrc
//   ) => {
//     axios.put(`${API_URL}/Products/body/${id}`, {
//       id,
//       name,
//       metaTitle,
//       description,
//       image,
//       price,
//       promotionPrice,
//       categoryId,
//       quantity,
//       detail,
//       metaKeywords,
//       metaDescriptions,
//       status,
//       viewCount: viewCount + 1,
//       link,
//       imageFile,
//       imageSrc,
//     });
//   };
//   return (
//     <div className="app_container">
//       <div className="grid">
//         <div className="grid__row">
//           <div className="grid__column-12">
//             <div className="home-filter">
//               <span className="home-filler_label"> Sắp xếp theo</span>

//               <button class="home-filler_btn btn-cate btn-primary ">
//                 Phổ Biến
//               </button>
//               <button class="home-filler_btn btn-cate ">Mới Nhất</button>
//               <button class="home-filler_btn btn-cate ">Bán Chạy</button>
//               <select type="text" class="select-input" name="categoryId">
//                 <option value={1}>1 . Thiết Bị Điển Tử</option>
//                 <option value={2}>2 . Quần Áo </option>
//                 <option value={3}>3 . Food</option>
//                 <option value={4}>4 . Nội Thất</option>
//               </select>

//               <div className="home-filter__page">
//                 <span className="home-filler__page-num">
//                   <span className=" ">1</span>/14
//                 </span>
//               </div>
//               <div className="home-filler__page-control">
//                 <a
//                   href=""
//                   className="home-filler__page-btn home-filler__page-btn-disable"
//                 >
//                   <i className="home-filler__page-icon">
//                     <BiChevronLeft />
//                   </i>
//                 </a>
//                 <a href="" className="home-filler__page-btn">
//                   <i className="home-filler__page-icon">
//                     <BiChevronRight />
//                   </i>
//                 </a>
//               </div>
//             </div>
//             <div className="home-product">
//               {/* grid ->row -Column */}
//               <div className="grid_row">
//                 {employeeList.map((item) => {
//                   return (
//                     <div className="gird__column-2">
//                       {/* product item */}
//                       <a
//                         className="home-product-item"
//                         href={item.link}
//                         onClick={(e) =>
//                           onclick(
//                             e,
//                             parseInt(item.id),
//                             item.name,
//                             item.metaTitle,
//                             item.description,
//                             item.image,
//                             item.price,
//                             item.promotionPrice,
//                             item.categoryId,
//                             item.quantity,
//                             item.detail,
//                             item.metaKeywords,
//                             item.metaDescriptions,
//                             item.status,
//                             item.viewCount,
//                             item.link,
//                             item.imageFile,
//                             item.imageSrc
//                           )
//                         }
//                       >
//                         <div className="home-product-item-img">
//                           <img src={item.imageSrc}></img>
//                         </div>
//                         <h4 className="home-product-item__name">
//                           {item.name}{" "}
//                         </h4>
//                         <div className="home-product-item__price">
//                           <span className="home-product-item__price-old">
//                             {item.promotionPrice}.000
//                           </span>
//                           <span className="home-product-item__price-new">
//                             {item.price}.000
//                           </span>
//                         </div>
//                         <div className="home-product-item__action">
//                           <span className="home-product-item__like">
//                             <i>
//                               <AiOutlineHeart />
//                             </i>
//                           </span>
//                           <span className="home-product-item__sub">
//                             <i>Số lượng Click {item.viewCount}</i>
//                           </span>
//                         </div>
//                         <div className="home-product-item__origin">
//                           <span className="home-product-item__brand">Whoo</span>
//                           <a
//                             href=""
//                             className="home-product-item__origin-btn btn-primary"
//                           >
//                             <p>Mua ngay</p>
//                           </a>
//                         </div>
//                         {/* <div className="home-product-item__favourite">
//                                     Yêu thích
//                                  </div> */}
//                         <div className="home-product-item__saleoff">
//                           <span className="home-product-item__saleoff-percent">
//                             {item.detail}%
//                           </span>
//                           <span className="home-product-item__saleoff-label">
//                             GIẢM
//                           </span>
//                         </div>
//                       </a>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// {
// }
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/config";
import axios from "axios";
import "./cateproduct.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
// import "./style.css";
function currencyFormat(num) {
  return   num.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')+'đ'
}
const onclick = (
  e,
  id,
  name,
  metaTitle,
  description,
  image,
  price,
  promotionPrice,
  categoryId,
  quantity,
  detail,
  metaKeywords,
  metaDescriptions,
  status,
  viewCount,
  link,
  imageFile,
  imageSrc
) => {
  axios.put(`${API_URL}/Products/body/${id}`, {
    id,
    name,
    metaTitle,
    description,
    image,
    price,
    promotionPrice,
    categoryId,
    quantity,
    detail,
    metaKeywords,
    metaDescriptions,
    status,
    viewCount: viewCount + 1,
    link,
    imageFile,
    imageSrc,
  });
};
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
                      <img src={`http://sansale.somee.com/Images/${item.image}`}></img>
                     
                    </div>
                    <h4 className="home-product-item__name">
                      {item.name}{" "}
                    </h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">
                     {currencyFormat(item.promotionPrice)}
                      </span>
                      <span className="home-product-item__price-new">
                      {currencyFormat(item.price)}
                      </span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like">
                        <i>
                          <AiOutlineHeart />
                        </i>
                      </span>
                      <span className="home-product-item__sub">
                        <i>Số lượng Click {item.viewCount}</i>
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
                                Yêu thích
                             </div> */}
                    <div className="home-product-item__saleoff">
                      <span className="home-product-item__saleoff-percent">
                        {item.detail}%
                      </span>
                      <span className="home-product-item__saleoff-label">
                        GIẢM
                      </span>
                    </div>
                  </a>
                </div>
              );
            })} 
         
              </div>
            </div>
        
  
  );
};
const renderDataProduct = (productlist) => {
  return (
          <div className="home-product">
            {/* grid ->row -Column */}
            <div className="grid_row">
          {productlist.map((item) => {
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
                  <h4 className="home-product-item__name">
                    {item.name}{" "}
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">
                   {currencyFormat(item.promotionPrice)}
                    </span>
                    <span className="home-product-item__price-new">
                    {currencyFormat(item.price)}
                    </span>
                  </div>
                  <div className="home-product-item__action">
                    <span className="home-product-item__like">
                      <i>
                        <AiOutlineHeart />
                      </i>
                    </span>
                    <span className="home-product-item__sub">
                      <i>Số lượng Click {item.viewCount}</i>
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
                              Yêu thích
                           </div> */}
                  <div className="home-product-item__saleoff">
                    <span className="home-product-item__saleoff-percent">
                      {item.detail}%
                    </span>
                    <span className="home-product-item__saleoff-label">
                      GIẢM
                    </span>
                  </div>
                </a>
              </div>
            );
          })} 
       
            </div>
          </div>
      

);
};

function PaginationComponent() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(3);
  const [productList, setProductList] = useState([]);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
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
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  useEffect(() => {
    refreshProductList()
    refreshEmployeeList();
    
  }, []);

  const employeeAPI = (
    url = `${API_URL}/Categories/${value}`
  ) => {
    return {
      fetchAll: () => axios.get(url),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    };
  };

  function refreshEmployeeList() {
    employeeAPI()
      .fetchAll()
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => console.log(err));
  }
  const ProdcutAPI = (
    url = `${API_URL}/Products/`
  ) => {
    return {
      fetchAll: () => axios.get(url),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    };
  };

  function refreshProductList() {
     ProdcutAPI()
      .fetchAll()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => console.log(err));
  }
  // useEffect(() => {
  //   fetch(`${API_URL}/Products/`)
  //     .then((response) => {setData(response.data())})
  //     // .then((json) => setData(json),
  //     // console.log(json.data))
  //     // ;
  // }, []);
   //get value on seclet
   const getInitialState = () => {
    const value="0" ;
   return value;
  };

   const [value,setOption] = useState(getInitialState)
 
function handleChange(event){
    setOption(event.target.value)
    if(event.target.value==0)
       refreshProductList();
        else
        refreshEmployeeList();
}
 


  //  const [value, setValue] = useState(getInitialState);

  //   const handleChange = (e) => {
 
  //   setValue(e.target.value);
  //   // refreshEmployeeList();
  //   // refreshProductList();
  // };
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
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

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
      {/* <h1>Todo List</h1> <br /> */}
      
      <div className="app_container">
      <div className="grid">
        <div className="grid__row">
      <div className="grid__column-12">
            <div className="home-filter">
              <span className="home-filler_label"> Sắp xếp theo</span>

              <button class="home-filler_btn btn-cate btn-primary ">
                Phổ Biến
              </button>
              <button class="home-filler_btn btn-cate " >Mới Nhất</button>
              <button class="home-filler_btn btn-cate ">Bán Chạy</button>
              <select type="text" class="select-input" name="categoryId" value={value} onChange={handleChange}  >
                <option value="0"   >..Tất cả sản phẩm</option>
                <option value={1} >1 . Mỹ phẩm</option>
                <option value={2}>2 . Thiết bị điện tử </option>
                <option value={3}>3 . Quần Áo</option>
                <option value={4}>4 .Food</option>
                <option value={5}>5 . Nội Thất</option>
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
                <button
                 className="home-filler__page-btn"
                  onClick={handleNextbtn}
                  disabled={currentPage == pages[pages.length - 1] ? true : false}
                >
           
        
               
                  <i className="home-filler__page-icon">
                    <BiChevronRight />
                    
                  </i>
                </button>
              </div>
            </div>
            {value == 0 ? (renderDataProduct(productList.slice(0,20)) ):(renderData(currentItems))}
            
        
       
      </div>
      </div>
            </div>
            </div>
    </>
  );
}

export default PaginationComponent;