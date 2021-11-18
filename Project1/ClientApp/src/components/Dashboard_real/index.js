import React, { Component } from "react";
// import { Line } from "react-chartjs-2";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./index.css";

class DashDefault extends React.Component {
  componentDidMount() {
    fetch("http://www.sansale.somee.com/api/Products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          series: data
            .concat(this.state.series)
            .slice(0, 10)
            .sort((a, b) => (a.itemM > b.itemM ? -1 : 1))
            .map((item) => {
              return item.viewCount;
            }),
          asdasd: data.slice(0, 10).map((item) => {
            return item.metaKeywords + ", ";
          }),
        });
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      series: [],
      asdasd: [],
      options: {
        labels: [
          "sản phẩm 1",
          "sản phẩm 2",
          "sản phẩm 3",
          "sản phẩm 4",
          "sản phẩm 5",
          "sản phẩm 6",
          "sản phẩm 7",
          "sản phẩm 8",
          "sản phẩm 9",
          "sản phẩm 10",
        ],
        colors: [
          "#33b2df",
          "#546E7A",
          "#d4526e",
          "#13d8aa",
          "#A5978B",
          "#2b908f",
          "#f9a3a4",
          "#90ee7e",
          "#f48024",
          "#B452FA",
        ],
        title: {
          text: "TOP 10 SP",
        },
      },
    };

    this.state1 = {
      series: [
        {
          name: "",
          data: [31, 40, 190, 51, -45, 150, 40, 28, 51, -15, 120, 200],
        },
      ],
      options: {
        chart: {
          type: "area",
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#F44336"],
          },
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Tổng click mỗi tháng",
        },
        labels: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12",
        ],
      },
    };
  }

  render() {
    return (
      <div className="asd">
        <div className="featured">
          <div className="featured_Item">
            <span className="featured_Title">Sale</span>
            <div className="featured_MoneyContainer">
              <span className="featured_Money">$2,200</span>
              <span className="featured_MoneyRate">
                -11.4 <ArrowDownward />
              </span>
            </div>
            <span className="featuredSub">Compared to lask</span>
          </div>
          {/*  */}
          <div className="featured_Item">
            <span className="featured_Title">Revanue</span>
            <div className="featured_MoneyContainer">
              <span className="featured_Money">$2,415</span>
              <span className="featured_MoneyRate">
                -11.4 <ArrowUpward />
              </span>
            </div>
            <span className="featuredSub">Compared to lask</span>
          </div>
          <div className="featured_Item">
            <span className="featured_Title">Revanue</span>
            <div className="featured_MoneyContainer">
              <span className="featured_Money">$2,415</span>
              <span className="featured_MoneyRate">
                -11.4 <ArrowUpward />
              </span>
            </div>
            <span className="featuredSub">Compared to lask</span>
          </div>
        </div>
        <div className="featured">
          <div className="featured_Chart1">
            {/* PIE CHART */}
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width={450}
            />
          </div>
          <div className="featured_Chart">
            {/* LINE CHART */}
            <Chart
              options={this.state1.options}
              series={this.state1.series}
              type="area"
              width={650}
              height={400}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DashDefault;
