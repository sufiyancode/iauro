import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 840],
  ["2015", 1170, 460, 1200],
  ["2016", 660, 1120, 540],
  ["2017", 1030, 540, 350],
  ["2018", 1170, 1030, 1200],
  ["2019", 1200, 540, 540],
  ["2020", 1030, 540, 1120],
];

// Material chart options
const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
  colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310"],
};

export default function BarChart() {
  return (
    <Chart
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
