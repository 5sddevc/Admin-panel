import React from "react";
import { Row, Col, Icon } from "antd";
import CardWrapper from "../../../commons/card/index";
import StatisticWrapper from "../../../components/cards/Statistics";
import trafficData from "../../../mocks/trafficstats";
import RenderChart from "../../Chart";

const TrafficStatsGraphic = () => {
  return (
    <React.Fragment>
      <Col span={24}>
        <CardWrapper
          type="inner"
          title={"Traffic Statictics"}
          bordered={true}
          headStyle={{ display: "flex" }}
        >
          <Col span={24}><RenderChart/></Col>
          <Col span={6}>
            <CardWrapper>
              <StatisticWrapper
                title="Daily unique Visitors"
                value={trafficData.uniquevisitors}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<Icon type="arrow-up" />}
                suffix="%"
              />
            </CardWrapper>
          </Col>
          <Col span={6}>
            <CardWrapper>
              <StatisticWrapper
                title="Page Views"
                value={trafficData.pageviews}
                valueStyle={{ color: "#3f8600" }}
              />
            </CardWrapper>
          </Col>
          <Col span={6}>
            <CardWrapper>
              <StatisticWrapper
                title="New Users"
                value={trafficData.newusers}
                valueStyle={{ color: "#3f8600" }}
              />
            </CardWrapper>
          </Col>
          <Col span={6}>
            <CardWrapper>
              <StatisticWrapper
                title="Bounce Rate"
                value={trafficData.bouncerate}
                valueStyle={{ color: "#3f8600" }}
                suffix="%"
              />
            </CardWrapper>
          </Col>
        </CardWrapper>
      </Col>
    </React.Fragment>
  );
};
export default TrafficStatsGraphic;
