import React from "react";
import { Layout, Menu, Icon, Button } from "antd";
import { Row, Col } from "antd";
import {HeaderLogo} from "../../configurations/Constants";

export default class HeaderContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row type="flex">
          <Col span={4}>
            <div className="logo">
              <img src={HeaderLogo} style={{ width: "128px", height: "64px" }}></img>
            </div>
          </Col>
          <Col span={2}>
            <Button
              type="primary"
              onClick={() => this.props.toggleCollapsed("collapsedLeft")}
              style={{ marginBottom: 16 }}
            >
              <Icon
                type={
                  this.props.state.collapsedLeft ? "menu-unfold" : "menu-fold"
                }
              />
            </Button>
          </Col>
          <Col span={16}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ position: "fixed", lineHeight: "64px" }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Col>

          <Col span={2}>
            <Button
              type="primary"
              onClick={() => this.props.toggleCollapsed("collapsedRight")}
              style={{ marginBottom: 16 }}
            >
              <Icon
                type={
                  this.props.state.collapsedRight ? "menu-fold" : "menu-unfold"
                }
              />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
