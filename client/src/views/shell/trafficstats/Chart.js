import React from "react";
import LineChart from "../../../commons/charts/LineChart";
import { lineGraph } from "../../../mocks/graphs";
import ResponsiveContainerWrapper from "../../../commons/charts/ResponsiveContainer";

let graphData = [];

const graphDatas = () => {
  for (let i = 0; i < 7; i++) {
    graphData = graphData.concat(lineGraph());
  }
  return graphData;
};

graphDatas();

const RenderChart = props => {

  return (
    <ResponsiveContainerWrapper width="100%" height={300}>
      <LineChart
        lineColor1="#fff523"
        lineColor2="#00f523"
        margin={{ top: 40, right: 20, bottom: 5 }}
        isCartReq={false}
        data={graphData}
      />
    </ResponsiveContainerWrapper>
  );
};

export default RenderChart;
