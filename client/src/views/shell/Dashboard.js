import React from "react";
import { Row, Col } from "antd";
import TrafficStatsGraphic from "./trafficstats/trafficstatsgraphic";
import TrafficAndSales from "./trafficstats/trafficandsales";
import ResponsiveContainerWrapper from "../../components/charts/ResponsiveContainer";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";
import { lineGraph, pieChart } from "../../mocks/graphs";
import CardWrapper from "../../components/card";
import MonthPickerWrapper from "../../components/datepickers/MonthPicker";
import RangePickerWrapper from "../../components/datepickers/RangePicker";
import UserStatCard from "../../appcomponents/dashboard/UserStatCard";
import { FiUser } from "react-icons/fi";

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


class Dashboard extends React.Component {
  renderFunction = () => {
    return (
      <React.Fragment>
        <Row
          gutter={{ xs: 8, sm: 14, md: 14, lg: 14 }}
          style={{ textAlign: "left" }}
        >
          <Col xs={24} sm={12} md={6} lg={6}>
            <UserStatCard styledClass="mainContentDiv" iconBack={"#ccddfe"} iconColor={"#3677fd"} icon={<FiUser />} title="Free Users" amount="653" />
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
          <UserStatCard styledClass="mainContentDiv" iconBack={"#c8ffe8"} iconColor={"#26e5ab"} icon={<FiUser />} title="Subscribed Users" amount="1252" />
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <UserStatCard styledClass="mainContentDiv" iconBack={"#ffeecb"} iconColor={"#fdbd31"} icon={<FiUser />} title="Paused Users" amount="12" />
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <UserStatCard styledClass="mainContentDiv" iconBack={"#ffd0cc"} iconColor={"#fe4235"} icon={<FiUser />} title="Banned Users" amount="65" />
          </Col>
        </Row>
        <Row
          gutter={{ xs: 8, sm: 14, md: 14, lg: 14 }}
          style={{ textAlign: "left" }}
        >
          <Col xs={24} sm={24} md={12} lg={12}>
            <span style={{ fontWeight: "bold" }} className="sub-heading">Users Chart&nbsp;&nbsp;&nbsp;</span>
            <MonthPickerWrapper format={"MMM - YYYY"} />
            <CardWrapper className="mainContentDiv" style={{ marginTop: 14 }}> 
              <ResponsiveContainerWrapper style={{ margin: "0px 0px 5px 0px" }} height={350}>
                <PieChart
                  pieColor={['#757573', "#00ff23", '#ff00ff']}
                  data={pieCharts}
                  isLegend={true}
                />
              </ResponsiveContainerWrapper>
            </CardWrapper>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <span style={{ fontWeight: "bold" }} className="sub-heading">App Downloads&nbsp;&nbsp;&nbsp;</span>
            <RangePickerWrapper mode={['month', 'month']} format={"MMM - YYYY"} />
            <CardWrapper className="mainContentDiv" style={{ marginTop: 14 }}>
              <ResponsiveContainerWrapper style={{ margin: "27px 0px" }} height={300}>
                <LineChart
                  lineColor={['#fff523', "#00ff23", '#ff00ff', '#f345f8', '#f8d823']}
                  data={graphData}
                />
              </ResponsiveContainerWrapper>
            </CardWrapper>
          </Col>
        </Row>
      </React.Fragment>
    );
  };
  render() {
    return this.renderFunction();
  }
}
export default Dashboard;
