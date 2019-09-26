import React from "react";
import { Row, Col } from "antd";
import TrafficStatsGraphic from "./trafficstats/trafficstatsgraphic";
import TrafficAndSales from "./trafficstats/trafficandsales";
import CardWrapper from "../../components/card";
import MonthPickerWrapper from "../../components/datepickers/MonthPicker";
import RangePickerWrapper from "../../components/datepickers/RangePicker";
import UserStatCard from "../../appcomponents/dashboard/UserStatCard";
import { FiUser } from "react-icons/fi"


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
            <CardWrapper style={{ marginTop: 14 }} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <span style={{ fontWeight: "bold" }} className="sub-heading">App Downloads&nbsp;&nbsp;&nbsp;</span>
            <RangePickerWrapper mode={['month', 'month']} format={"MMM - YYYY"} />
            <CardWrapper style={{ marginTop: 14 }} />
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
