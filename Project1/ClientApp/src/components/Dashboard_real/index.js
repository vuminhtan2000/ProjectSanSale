import React, { Component, useReducer } from "react";
// import { Line } from "react-chartjs-2";
import { API_URL } from "../../constants/config";
import Chart from "react-apexcharts";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./index.css";

class DashDefault extends React.Component {
  async componentDidMount() {
    for (let i = 1; i < 13; i++) {
      console.log(i);
    }
    for (let i = 1; i <= 12; i++) {
      await fetch(`${API_URL}/Products/GetProducts_day?month=${i}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            abc: data
              .map((item) => item.viewCount)
              .reduce((a, b) => (a = a + b),0),
          });
          const viewcoutadd = this.state.asd;
          viewcoutadd.push(this.state.abc);

          this.setState({
            series2: [
              {
                ...this.state.series2,
                data: [].concat(viewcoutadd),
              },
            ],
          });
          console.log(i + "-" + this.state.abc);
        });
    }

    fetch("http://www.sansale.somee.com/api/Products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          series1: data
          .sort((a, b) => (a.viewCount > b.viewCount ? -1 : 1))
            .slice(0, 10)
            .map((item) => {
              return item.viewCount;
            }),
          options1: {
            ...this.state.options1,
            labels: data
              .slice(0, 10)
              .sort((a, b) => (a.viewCount > b.viewCount ? -1 : 1))
              .map((item) => {
                return item.metaKeywords;
              }),
          },
          asdasd: data
            .map((item) => item.viewCount)
            .reduce((a, b) => (a = a + b), 0),
        });
      });
  }
  MyComponent() {}
  constructor(props) {
    super(props);

    this.state = {
      i: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      abc: [],
      asd: [],

      values: [1, 2, 3],
      asdasd: [],
      // Chart 1
      series1: [],
      options1: {
        labels: [],
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
      // Chart 2

      series2: [
        {
          name: "T???ng",
          data: [],
        },
      ],
      options2: {
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
          text: "T???ng click m???i th??ng",
        },
        labels: [
          "th??ng 1",
          "th??ng 2",
          "th??ng 3",
          "th??ng 4",
          "th??ng 5",
          "th??ng 6",
          "th??ng 7",
          "th??ng 8",
          "th??ng 9",
          "th??ng 10",
          "th??ng 11",
          "th??ng 12",
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
              options={this.state.options1}
              series={this.state.series1}
              type="donut"
              width={450}
            />
          </div>
          <div className="featured_Chart">
            {/* LINE CHART */}
            <Chart
              options={this.state.options2}
              series={this.state.series2}
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
