import React from "react";
import LineChart from "../../../components/charts/LineChart";
import PieChart from "../../../components/charts/PieChart";
import { lineGraph, pieChart } from "../../../mocks/graphs";
import ResponsiveContainerWrapper from "../../../components/charts/ResponsiveContainer";

let graphData = [];
let pieCharts = [];
const graphDatas = () => {
  for (let i = 0; i < 7; i++) {
    graphData = graphData.concat(lineGraph());
  }
  return graphData;
};
const graphPieDatas = () => {
  for (let i = 0; i < 3; i++) {
    pieCharts = pieCharts.concat(pieChart());
  }
  return pieCharts;
};
graphDatas();
graphPieDatas();
const RenderChart = (props) => {
  return (
    <React.Fragment>
      <ResponsiveContainerWrapper height={300}>
        <LineChart
          lineColor={['#fff523', "#00ff23", '#ff00ff', '#f345f8', '#f8d823']}
          data={graphData}
        />
      </ResponsiveContainerWrapper>
      <ResponsiveContainerWrapper height={300}>
        <PieChart
          pieColor={['#757573', "#00ff23", '#ff00ff']}
          data={pieCharts}
          isLegend={true}
        />
      </ResponsiveContainerWrapper>
    </React.Fragment>
  );
};

export default RenderChart;
