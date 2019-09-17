import React from "react";
import LineChart from "../commons/charts/LineChart";
import { lineGraph } from "../mocks/graphs";

const RenderChart = props => {
  let graphData = [];

  const graphDatas = () => {
    for (let i = 0; i < 7; i++) {
      graphData = graphData.concat(lineGraph());
    }
    return graphData;
  };

  return (
    <LineChart
      lineColor1="#fff523"
      lineColor2="#00f523"
      width={400}
      height={300}
      margin={{ top: 40, right: 20, bottom: 5, left: 20 }}
      isCartReq={false}
      data={graphDatas()}
    />
  );
};

export default RenderChart;
