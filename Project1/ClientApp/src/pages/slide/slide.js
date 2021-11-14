import React, { useEffect, useState } from "react";
import "./slide.css";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { API_URL } from "../../constants/config";

export default function Slides(props) {
  //     './img/side1113.png',
  //     './img/side1111.png',
  //     './img/side1112.png',

  // ];

  const slide2 = [
    "./img/slidesex.PNG",
    "./img/slidesex2.png",
    "./img/sideqc.jpg",

    //src={slide2[1]}
  ];
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  const contentsApi = (url = `${API_URL}/Slides`) => {
    return {
      fetchAll: () => axios.get(url),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    };
  };

  function refreshEmployeeList() {
    contentsApi()
      .fetchAll()
      .then((res) => {
        setEmployeeList(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="bgimg">
      <div className="container-fluid">
        <div className="section-home">
          {/* <!--slide--> */}
          <div className="slideqc">
            <div className="slides ">
              <img src={slide2[0]} alt="slidesex" />
            </div>
            <div className="slides1 ">
              <img src={slide2[1]} alt="slidesex" />
            </div>
          </div>
          <div className="carousel-midle">
            <Carousel
              autoPlay
              infiniteLoop={true}
              autoFocus={true}
              centerMode={true}
              centerSlidePercentage="108"
              width="100%"
            >
              {employeeList.map((item, i) => (
                <div key={i}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={item.imageSrc}
                    alt="bannershope"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="slides2 align-self-stretch">
            <img src={slide2[2]} alt="bannershoppe" />
          </div>
        </div>
      </div>
    </div>
  );
}
