import React, { Component } from "react";
// import { Line } from "react-chartjs-2";
import Chart from "react-apexcharts";

class DashDefault extends React.Component {
  componentDidMount() {
    fetch("http://www.sansale.somee.com/api/Products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          series: data.map((item) => {
            return item.viewCount;
          }),
          asdasd: data.map((item) => {
            return item.id;
            // console.log(item.id);
          }),
        });
      });
  }
  constructor(props) {
    super(props);
    // this.asddddddd = [];
    this.state = {
      series: [],
      asdasd: [],
      options: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        title: {
          text: "Lượng click của 10 sp trong tháng X",
          align: "left",
        },
      },
    };

    this.state1 = {
      series: [
        {
          name: "",
          // name: "clicked",
          data: [31, 40, 28, 51, 42, 31, 40, 28, 51, 42, 120, 200],
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
          curve: "straight",
        },
        title: {
          text: "Tổng click mỗi tháng",
          align: "left",
        },
        // subtitle: {
        //   text: "Price Movements",
        //   align: "left",
        // },
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
        // yaxis: {
        //   opposite: false,
        // },
        // legend: {
        //   horizontalAlign: "left",
        // },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        {/* LINE CHART */}
        <Chart
          options={this.state1.options}
          series={this.state1.series}
          type="area"
          width={900}
          height={400}
        />

        {/* PIE CHART */}
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={450}
        />
        <div>{this.state.asdasd}</div>
        <div>{this.state.options.labels}</div>
      </div>
    );
  }
}

export default DashDefault;
