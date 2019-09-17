import React from "react";
import { Row, Col, Icon, Divider } from "antd";
import CardWrapper from "../../../commons/card/index";

const TrafficAndSales = props => {
  return (
    <React.Fragment>
      <Col span={24}>
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
              Col 1
              <Divider /> 
              COl 1.1
            </Col>
            <Col span={12}>
                Col 2
                <Divider/>
                Col 2.2
            </Col>
            <Col span={24}>
                Users Table
            </Col>
          </Row>
        </CardWrapper>
      </Col>
    </React.Fragment>
  );
};
export default TrafficAndSales;
