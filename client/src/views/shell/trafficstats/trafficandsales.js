import React from "react";
import { Row, Col, Icon, Divider, Progress } from "antd";
import CardWrapper from "../../../commons/card/index";
import ProgressWrapper from "../../../components/progress/index";
import AvatarWrapper from "../../../components/avatar/index";

const TrafficAndSales = props => {
  return (
    <React.Fragment>
      <Col className="mainContentDivs" span={24}>
        <CardWrapper
          type="inner"
          title={"Traffic & Sales"}
          bordered={true}
          headStyle={{ display: "flex" }}
        >
          <Row
            type="flex"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
            justify="space-between"
          >
            <Col span={12}>
              <Col span={12}>
                <h3
                  style={{
                    borderLeft: "4px solid",
                    borderRadius: ".25rem",
                    borderLeftColor: "#09d609",
                    textAlign: "left",
                    padding: "8px"
                  }}
                >
                  New Clients
                </h3>
              </Col>
              <Col span={12}>
                <h3
                  style={{
                    borderLeft: "4px solid",
                    borderRadius: ".25rem",
                    borderLeftColor: "#1890ff",
                    textAlign: "left",
                    padding: "8px"
                  }}
                >
                  Recurring Clients
                </h3>
              </Col>
              <Divider />
              <Col span={24}>
                <Col span={4}>Monday</Col>
                <Col span={20}>
                  <Col span={24}>
                    <ProgressWrapper percent={40} strokeColor="#09d609" />
                  </Col>
                  <Col span={24}>
                    <ProgressWrapper percent={60} />
                  </Col>
                </Col>
              </Col>
              <Col span={24}>
                <Col span={4}>Tuesday</Col>
                <Col span={20}>
                  <Col span={24}>
                    <ProgressWrapper percent={80} strokeColor="#09d609" />
                  </Col>
                  <Col span={24}>
                    <ProgressWrapper percent={90} />
                  </Col>
                </Col>
              </Col>
              <Col span={24}>
                <Col span={4}>Wednesday</Col>
                <Col span={20}>
                  <Col span={24}>
                    <ProgressWrapper percent={30} strokeColor="#09d609" />
                  </Col>
                  <Col span={24}>
                    <ProgressWrapper percent={20} />
                  </Col>
                </Col>
              </Col>
              <Col span={24}>
                <Col span={4}>Thursday</Col>
                <Col span={20}>
                  <Col span={24}>
                    <ProgressWrapper percent={70} strokeColor="#09d609" />
                  </Col>
                  <Col span={24}>
                    <ProgressWrapper percent={90} />
                  </Col>
                </Col>
              </Col>
              <Col span={24}>
                <Col span={4}>Friday</Col>
                <Col span={20}>
                  <Col span={24}>
                    <ProgressWrapper percent={50} strokeColor="#09d609" />
                  </Col>
                  <Col span={24}>
                    <ProgressWrapper percent={40} />
                  </Col>
                </Col>
              </Col>
              <Col span={24}>
                <Col span={4}>Saturday</Col>
                <Col span={20}>
                  <Col span={24}>
                    <ProgressWrapper percent={54} strokeColor="#09d609" />
                  </Col>
                  <Col span={24}>
                    <ProgressWrapper percent={68} />
                  </Col>
                </Col>
              </Col>
              <Col span={24}>
                <Col span={4}>Sunday</Col>
                <Col span={20}>
                  <Col span={24}>
                    <ProgressWrapper percent={34} strokeColor="#09d609" />
                  </Col>
                  <Col span={24}>
                    <ProgressWrapper percent={98} />
                  </Col>
                </Col>
              </Col>
            </Col>
            <Col span={12}>
              <Col span={12}>
                <h3
                  style={{
                    borderLeft: "4px solid",
                    borderRadius: ".25rem",
                    borderLeftColor: "#ffc107",
                    textAlign: "left",
                    padding: "8px"
                  }}
                >
                  Pageviews
                </h3>
              </Col>
              <Col span={12}>
                <h3
                  style={{
                    borderLeft: "4px solid",
                    borderRadius: ".25rem",
                    borderLeftColor: "#f86c6b",
                    textAlign: "left",
                    padding: "8px"
                  }}
                >
                  Organic
                </h3>
              </Col>
              <Divider />
              <Col span={24}>
              <Col span={8}><AvatarWrapper /></Col>
                <Col span={16}>Male</Col>
              </Col>
              <Col span={24}>
                <ProgressWrapper percent={61} strokeColor="#ffc107" />
                
              </Col>
              <Col span={24}>
                <Col span={8}><AvatarWrapper /></Col>
                <Col span={16}>Female</Col>
              </Col>
              <Col span={24}>
                <ProgressWrapper percent={39} strokeColor="#ffc107" />
              </Col>
            </Col>
            <Col span={24}>Users Table</Col>
          </Row>
        </CardWrapper>
      </Col>
    </React.Fragment>
  );
};
export default TrafficAndSales;
