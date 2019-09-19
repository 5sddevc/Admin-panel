import React from "react";
import { Row, Col,  } from "antd";
import CardWrapper from "../../commons/card";
import RangePicker from "../../components/datepickers/RangePicker";
import DatePicker from "../../components/datepickers/DatePicker";
import MonthPicker from "../../components/datepickers/MonthPicker";
import WeekPicker from "../../components/datepickers/WeekPicker";
import Button from "../../components/button/index";
import Select from "../../components/input/Select";
import Option from "../../components/input/SelectOptions";

class Reports extends React.Component {
  onChange(date, dateString) {
    console.log("Selected Dates", date, dateString);
  }
  renderFunction = () => {
    return (
      <React.Fragment>
        <Row
          type="flex"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
          justify="center"
          align="middle"
        >
          <Col span={12}>
            <CardWrapper
              
              title="Generate Reports"
              bodyStyle={{ padding: "32px" }}
            >
              <Col span={24} style={{margin:"4px", padding:"4px"}}>
                <Col span={6}>
                  <Select defaultValue="users" style={{ width: 80 }}>
                    <Option value="users">Users</Option>
                    <Option value="sales">Sales</Option>
                    <Option value="products">Products</Option>
                    <Option value="visitors">Visitors</Option>
                  </Select>
                </Col>
                <Col span={14}>
                  <DatePicker onChange={this.onChange} />
                </Col>
                <Col span={4}>
                  <Button>Generate</Button>
                </Col>
              </Col>
              <Col span={24} style={{margin:"4px", padding:"4px"}}>
                <Col span={6}>
                  <Select defaultValue="users" style={{ width: 80 }}>
                    <Option value="users">Users</Option>
                    <Option value="sales">Sales</Option>
                    <Option value="products">Products</Option>
                    <Option value="visitors">Visitors</Option>
                  </Select>
                </Col>
                <Col span={14}>
                  <WeekPicker onChange={this.onChange} placeholder="Select Week" />
                </Col>
                <Col span={4}>
                  <Button>Generate</Button>
                </Col>
              </Col>
              <Col span={24} style={{margin:"4px", padding:"4px"}}>
                <Col span={6}>
                  <Select defaultValue="users" style={{ width: 80 }}>
                    <Option value="users">Users</Option>
                    <Option value="sales">Sales</Option>
                    <Option value="products">Products</Option>
                    <Option value="visitors">Visitors</Option>
                  </Select>
                </Col>
                <Col span={14}>
                  <MonthPicker onChange={this.onChange} placeholder="Select Month" />
                </Col>
                <Col span={4}>
                  <Button>Generate</Button>
                </Col>
              </Col>
              <Col span={24} style={{margin:"4px", padding:"4px"}}>
                <Col span={6}>
                  <Select defaultValue="users" style={{ width: 80 }}>
                    <Option value="users">Users</Option>
                    <Option value="sales">Sales</Option>
                    <Option value="products">Products</Option>
                    <Option value="visitors">Visitors</Option>
                  </Select>
                </Col>
                <Col span={14}>
                  <RangePicker onChange={this.onChange} />
                </Col>
                <Col span={4}>
                  <Button>Generate</Button>
                </Col>
              </Col>
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
export default Reports;
