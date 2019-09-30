import React from "react";
import { connect } from "react-redux";
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
import { getUserStats, getMonthlyUserStats, getAppDownloads } from "../../actions/Dashboard";

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
  state = {
    userStatsLoading: false,
    monthlyUserStatsLoading: false,
    appDownloadsLoading: false,
  };
  componentDidMount() {
    this.setState({
      userStatsLoading: true,
      monthlyUserStatsLoading: true,
      appDownloadsLoading: true
    });
    this.props.dispatch(getUserStats((res) => {
      this.setState({userStatsLoading: false});
    }));
    this.props.dispatch(getMonthlyUserStats("jan", "2019", (res) => {
      this.setState({monthlyUserStatsLoading: false});
    }));
    this.props.dispatch(getAppDownloads("jan", "2018", "jan", "2019", (res) => {
      this.setState({appDownloadsLoading: false});
    }));
  }
  renderFunction = () => {
    //console.log("STORESTATE", this.props);
    var { dashboardStats } = this.props;
    return (
      <React.Fragment>
        <Row
          type="flex"
          gutter={{ xs: 8, sm: 14, md: 14, lg: 14 }}
          style={{ textAlign: "left" }}
        >
          <Col className="mainContentDiv" xs={24} sm={12} md={6} lg={6}>
            <UserStatCard loading={this.state.userStatsLoading} iconBack={"#ccddfe"} iconColor={"#3677fd"} icon={<FiUser />} title="Free Users" amount={dashboardStats.userStats ? dashboardStats.userStats.free : null} />
          </Col>
          <Col className="mainContentDiv" xs={24} sm={12} md={6} lg={6}>
            <UserStatCard loading={this.state.userStatsLoading} iconBack={"#c8ffe8"} iconColor={"#26e5ab"} icon={<FiUser />} title="Subscribed Users" amount={dashboardStats.userStats ? dashboardStats.userStats.subscribed : null} />
          </Col>
          <Col className="mainContentDiv" xs={24} sm={12} md={6} lg={6}>
            <UserStatCard loading={this.state.userStatsLoading} iconBack={"#ffeecb"} iconColor={"#fdbd31"} icon={<FiUser />} title="Paused Users" amount={dashboardStats.userStats ? dashboardStats.userStats.paused : null} />
          </Col>
          <Col className="mainContentDiv" xs={24} sm={12} md={6} lg={6}>
            <UserStatCard loading={this.state.userStatsLoading} iconBack={"#ffd0cc"} iconColor={"#fe4235"} icon={<FiUser />} title="Banned Users" amount={dashboardStats.userStats ? dashboardStats.userStats.banned : null} />
          </Col>
        </Row>
        <Row
          type="flex"
          gutter={{ xs: 8, sm: 14, md: 14, lg: 14 }}
          style={{ textAlign: "left" }}
        >
          <Col style={{ display: "flex", flexDirection: "column" }} className="mainContentDiv" xs={24} sm={24} md={12} lg={12}>
            <Row>
              <span style={{ fontWeight: "bold" }} className="sub-heading">Users Chart&nbsp;&nbsp;&nbsp;</span>
              <MonthPickerWrapper format={"MMM - YYYY"} />
            </Row>
            <Row style={{ marginTop: 14, flexGrow: 1 }}>
              <CardWrapper> 
                <ResponsiveContainerWrapper 
                style={{ margin: "0px 0px 5px 0px" }} 
                height={350}>
                  <PieChart
                    pieColor={['#757573', "#00ff23", '#ff00ff']}
                    data={dashboardStats.monthlyUserStats ? dashboardStats.monthlyUserStats : []}
                    loading={this.state.monthlyUserStatsLoading}
                    //data={pieCharts}
                    isLegend={true}
                  />
                </ResponsiveContainerWrapper>
              </CardWrapper>
            </Row>
          </Col>
          <Col style={{ display: "flex", flexDirection: "column" }} className="mainContentDiv" xs={24} sm={24} md={12} lg={12}>
            <Row>
              <span style={{ fontWeight: "bold" }} className="sub-heading">App Downloads&nbsp;&nbsp;&nbsp;</span>
              <RangePickerWrapper mode={['month', 'month']} format={"MMM - YYYY"} />
            </Row>
            <Row style={{ marginTop: 14, flexGrow: 1 }}>
              <CardWrapper>
                <ResponsiveContainerWrapper 
                style={{ margin: "27px 0px" }} 
                height={300}
                >
                  <LineChart
                    lineColor={['#fff523', "#00ff23", '#ff00ff', '#f345f8', '#f8d823']}
                    data={dashboardStats.appDownloads ? dashboardStats.appDownloads : []}
                    loading={this.state.appDownloadsLoading}
                    //data={graphData}
                  />
                </ResponsiveContainerWrapper>
              </CardWrapper>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  };
  render() {
    return this.renderFunction();
  }
}
export default connect((storeState) => ({ dashboardStats: storeState.Dashboard }))(Dashboard);
