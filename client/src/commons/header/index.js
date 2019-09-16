import React from "react";
import { Menu, Icon, Button } from "antd";
import { connect } from "react-redux";
import Switch from "../../components/switch";
import { toggleTheme } from "../../actions/App"
import { Row, Col, Badge, Avatar } from "antd";
import { HeaderLogo } from "../../configurations/Config";
import { FiBell, FiMail } from "react-icons/fi";
// import Badge from "../../components/badge/index";
// import Avatar from "../../components/avatar/index";

class HeaderContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row type="flex">
          <Col span={4}>
            <div className="logo">
              <HeaderLogo/>
            </div>
          </Col>
          <Col span={2}>
            <Button
              type="primary"
              onClick={() => this.props.toggleCollapsed("collapsedLeft")}
              style={{ marginBottom: 16, zIndex: 10 }}
            >
              <Icon
                type={
                  this.props.state.collapsedLeft ? "menu-unfold" : "menu-fold"
                }
              />
            </Button>
          </Col>
          <Col span={14}>
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

            <span style={{ color: "white" }}>
              Toggle theme
              <Switch onChange={() => {this.props.dispatch(toggleTheme())}} style={{ marginLeft: 10}} defaultChecked={true}></Switch>
            </span>
          </Col>

          <Col span={4}>
            <Row type="flex" justifycontent="space-between">
              <Col span={5} style={{ padding: "10px" }}>
                <Badge count={10} style={{ color: "white" }}>
                  <FiBell
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "white"
                    }}
                  />
                </Badge>
              </Col>
              <Col span={5} style={{ padding: "10px" }}>
                <Badge count={5} style={{ color: "white" }}>
                  <FiMail
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "white"
                    }}
                  />
                </Badge>
              </Col>
              <Col span={6}>
                <Badge dot style={{ color: "white" }}>
                  <Avatar
                    shape="circle"
                    size="40px"
                    icon="user"
                    style={{ color: "white" }}
                  />
                </Badge>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.props.toggleCollapsed("collapsedRight")}
                  style={{ zIndex: 10 }}
                >
                  <Icon
                    type={
                      this.props.state.collapsedRight
                        ? "menu-fold"
                        : "menu-unfold"
                    }
                  />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null)(HeaderContent)
