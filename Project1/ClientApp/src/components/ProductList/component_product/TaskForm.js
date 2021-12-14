import React, { useState, useEffect } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../Product.css";

const defaultImageSrc = "../assets/img/damir-bosnjak.jpg";

const initialFieldValues = {
  id: 0,
  name: "",
  //code: "",
  metaTitle: "",
  description: "",
  image: "",
  //moreImages: "",
  price: "0",
  promotionPrice: "0",
  hotProduct: "",
  quantity: "0",
  categoryId: "",
  detail: "",
  warranty: "",
  createdDate: "",
  //createdBy: "",
  modifiedDate: "",
  //modifiedBy: "",
  metaKeywords: "",
  metaDescriptions: "",
  status: "",
  //topHot: "",
  viewCount: "0",
  link: "",
  // category: null,
  imageSrc: defaultImageSrc,
  imageFile: null,
};
export default function TaskFrom(props) {
  const { addOrEdit, recordForEdit } = props;
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  const { isVisible, setIsVisible } = props;

  useEffect(() => {
    if (recordForEdit != null) setValues(recordForEdit);
  }, [recordForEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(value);
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };

  const validate = () => {
    let temp = {};
    //temp.description = values.description == "" ? false : true;
    temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x == true);
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
    setErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("id", values.id);
      formData.append("name", values.name);
      formData.append("code", values.code);
      formData.append("metaTitle", values.metaTitle);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("promotionPrice", values.promotionPrice);
      formData.append("hotProduct", values.hotProduct);
      formData.append("quantity", values.quantity);
      formData.append("categoryId", values.categoryId);
      formData.append("detail", values.detail);
      // formData.append("warranty", values.warranty);
      formData.append("createdDate", values.createdDate);
      // formData.append("createdBy", values.createdBy);
      // formData.append("modifiedDate", values.modifiedDate);
      // formData.append("modifiedBy", values.modifiedBy);
      formData.append("metaKeywords", values.metaKeywords);
      formData.append("status", values.status);
      formData.append("viewCount", values.viewCount);
      formData.append("link", values.link);
      formData.append("image", values.image);
      formData.append("imageFile", values.imageFile);
      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] == false ? "invalid-field" : "";
  return (
    <>
      <button
        class="iconmofrom btn-primary"
        type="button"
        onClick={() => setIsVisible(false)}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <AiOutlineCloseCircle />
      </button>
      <button
        class="iconmofrom btn-primary"
        type="button"
        onClick={() => setIsVisible(true)}
        style={{ display: isVisible ? "none" : "block" }}
        // onChange={}
      >
        <RiAddCircleLine />
      </button>
      <div class="row" style={{ display: isVisible ? "block" : "none" }}>
        <div class="col-md-4">
          <div class="card card-user">
            <div class="image" style={{ height: 50, width: 100, marginTop: 6 }}>
              {/* style={{ height: 250, width: 320, margin: 4 }} */}
            </div>

            <div class="card-body">
              <div class="author">
                <img
                  src={values.imageSrc}
                  style={{ height: 250, width: 250, marginTop: 30 }}
                />

                <h5 class="title">{values.name}</h5>

                <p class="description">{values.metaTitle}</p>
              </div>
              <p class="description text-center">{values.description}</p>
            </div>
            <div class="card-footer">
              <div class="button-container">
                <div class="row">
                  <div class="col-lg-5 col-md-6 col-6 ml-auto mr-auto">
                    <h5>
                      <del>{values.promotionPrice}VND</del>
                    </h5>
                  </div>
                  <div class="col-lg-5 mr-auto">
                    <h5>{values.price}VND</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="file"
            accept="image/*"
            className={"form-control-file" + applyErrorClass("imageSrc")}
            onChange={showPreview}
            id="image-uploader"
          />
        </div>

        <div class="col-md-8">
          <div class="card card-user">
            <div class="card-header">
              <h5 class="card-title">Edit Product</h5>
            </div>
            <div class="card-body">
              <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Id</label>
                      <input
                        class="form-control"
                        placeholder="id"
                        name="id"
                        value={values.id}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-9 pl-1">
                    <div class="form-group">
                      <label>Tên Sản Phẩm</label>
                      <input
                        class="form-control"
                        placeholder="Tên sản phẩm"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Giá Gốc </label>
                      <input
                        class="form-control"
                        placeholder="Giá Gốc"
                        name="promotionPrice"
                        value={values.promotionPrice}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-4 pl-1">
                    <div class="form-group">
                      <label>Giá Bán</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Giá Bán"
                        name="price"
                        value={values.price}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-3 pl-1">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Lượng Truy Cập</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        name="viewCount"
                        value={values.viewCount}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-3 pl-1">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Hàng Tồn</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Giá bán"
                        name="quantity"
                        value={values.quantity}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-8 pr-1">
                    <div class="form-group">
                      <label>Link Sản Phẩm</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="link"
                        name="link"
                        value={values.link}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Category ID</label>
                      {/* <input type="text" class="form-control" placeholder="category" name="categoryId" value={values.categoryId} onChange={handleInputChange}/> */}
                      <select
                        type="text"
                        class={"form-control" + applyErrorClass("categoryId")}
                        name="categoryId"
                        value={values.categoryId}
                        onChange={handleInputChange}
                      >
                        <option>Chọn......</option>
                        <option value={1}>1 . Thiết Bị Điển Tử</option>
                        <option value={2}>2 . Quẩn Áo </option>
                        <option value={3}>3 . Food</option>
                        <option value={4}>4 . Giày dép</option>
                        <option value={5}>5 . Cosmectic</option>
                        {/* <option value={6}>5 . Đồng hồ</option> */}
                        {/* <option value={7}>5 . Nạp thẻ</option> */}
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Meta </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="meta"
                        name="metaTitle"
                        value={values.metaTitle}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-4 pl-1">
                    <div class="form-group">
                      <label>KeyWord</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="keyword"
                        name="metaKeywords"
                        value={values.metaKeywords}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-4 pl-1">
                    <div class="form-group">
                      <label>Discount</label>
                      <input
                        type=""
                        class="form-control"
                        placeholder="#"
                        name="detail"
                        value={values.detail}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Ngày tạo </label>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="meta"
                        name="createdDate"
                        value={values.createdDate.split("T")[0]}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-4 pl-1">
                    <div class="form-group">
                      <label>Ngày sửa</label>
                      <input
                        type="date"
                        class="form-control"
                        placeholder=""
                        value=""
                        name="modifiedDate"
                        value={values.modifiedDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-4 pl-1">
                    <div class="form-group">
                      <label>Trạng Thái </label>
                      <select
                        class="form-control"
                        name="status"
                        value={values.status}
                        onChange={handleInputChange}
                        style={{ height: 57.6 }}
                      >
                        <option>Chọn......</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Hot Products </label>
                      <select
                        class="form-control"
                        name="hotProduct"
                        value={values.hotProduct}
                        onChange={handleInputChange}
                        style={{ height: 57.6 }}
                      >
                        <option>Chọn......</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-8 pl-1">
                    <div class="form-group">
                      <label>Mô tả</label>
                      <textarea
                        class="form-control textarea"
                        name="description"
                        value={values.description}
                        onChange={handleInputChange}
                      >
                        Mô tả cho sản phẩm của bạn{" "}
                      </textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="update ml-auto mr-auto">
                    <button type="submit" class="btn btn-primary btn-round">
                      ADD/UPDATE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
