import React from "react";
import { Row, Col, Icon } from "antd";
import TrafficStatsGraphic from "./trafficstats/trafficstatsgraphic";
import TrafficAndSales from "./trafficstats/trafficandsales";

class Dashboard extends React.Component {
  renderFunction = () => {
    return (
      <React.Fragment>
        <Row
          type="flex"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
          justify="space-between"
        >
          <TrafficStatsGraphic />
          <TrafficAndSales/>
        </Row>
      </React.Fragment>
    );
  };
  render() {
    return this.renderFunction();
  }
}
export default Dashboard;
