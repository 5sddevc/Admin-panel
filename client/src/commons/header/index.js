import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { menuShow } from "../../configurations/Config";
import { connect } from "react-redux";
import Switch from "../../components/switch";
import { toggleMode } from "../../actions/App";
import { Row, Col } from "antd";
import { HeaderLogo } from "../../configurations/Config";
import { FiBell, FiMail } from "react-icons/fi";
import PopoverWrapper from "../popover/index";
import MenuWrapper from "../../components/menu";
import Badge from "../../components/badge/index";
import Avatar from "../../components/avatar/index";
import Icon from "../../components/Icon/index";
import Button from "../../components/button/index";

class HeaderContent extends React.Component {
  constructor(props) {
    super(props);
  }
  notifications = () => {
    return (
      <React.Fragment>
        <Row
          type="flex"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
          justify="space-between"
          style={{width:"200px"}}
        >
         <Col span={24}>
         <Col span={4}><Icon type={"user-add"}></Icon></Col>
         <Col span={20}><Link to ="/"><p>New Users</p></Link></Col>
         </Col>
         <Col span={24}>
         <Col span={4}><Icon type={"user-delete"}></Icon></Col>
         <Col span={20}><Link to ="/"><p>Users Deleted</p></Link></Col>
         </Col>
         <Col span={24}>
         <Col span={4}><Icon type={"line-chart"}></Icon></Col>
         <Col span={20}><Link to ="/"><p>Sales Report</p></Link></Col>
         </Col>
         <Col span={24}>
         <Col span={4}><Icon type={"idcard"}></Icon></Col>
         <Col span={20}><Link to ="/"><p>New Client</p></Link></Col>
         </Col>
        </Row>
      </React.Fragment>
    );
  };
  messages = () => {
    return (
      <React.Fragment>
        <p>Messages Loading...</p>
      </React.Fragment>
    );
  };
  account = () => {
    return (
      <React.Fragment>
        <p>Account Loading...</p>
      </React.Fragment>
    );
  };
  render() {
    return (
      <div>
        <Row type="flex">
          <Col span={4}>
            <div className="logo">
              <HeaderLogo />
            </div>
          </Col>
          <Col span={2}>
            {menuShow.leftMenu === true ? (
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
            ) : null}
          </Col>
          <Col span={14}>
            <Row type="flex" justify="space-between">
              <Col>
                <MenuWrapper
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                  style={{ lineHeight: "61px" }}
                >
                  <Menu.Item key="1">
                    <Link to="/">Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/users">Users</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/reports">Reports</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/requests">Requests</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/settings">Settings</Link>
                  </Menu.Item>
                </MenuWrapper>
              </Col>

              <Col>
                <span>
                  Switch Theme
                  <Switch
                    onChange={() => {
                      this.props.dispatch(toggleMode());
                    }}
                    style={{ marginLeft: 10 }}
                    defaultChecked={true}
                  ></Switch>
                </span>
              </Col>
            </Row>
          </Col>

          <Col span={4}>
            <Row type="flex" justifycontent="space-between">
              <Col span={5} style={{ padding: "10px" }}>
                <Badge count={10} style={{ color: "white" }}>
                  <PopoverWrapper
                    title={"Notifications"}
                    content={this.notifications()}
                  >
                    <FiBell
                      className="headerIcon"
                      style={{
                        width: "24px",
                        height: "24px"
                      }}
                    />
                  </PopoverWrapper>
                </Badge>
              </Col>
              <Col span={5} style={{ padding: "10px" }}>
                <Badge count={5} style={{ color: "white" }}>
                  <PopoverWrapper title={"Messages"} content={this.messages()}>
                    <FiMail
                      className="headerIcon"
                      style={{
                        width: "24px",
                        height: "24px"
                      }}
                    />
                  </PopoverWrapper>
                </Badge>
              </Col>
              <Col span={6}>
                <Badge dot style={{ color: "white" }}>
                  <PopoverWrapper title={"Account"} content={this.account()}>
                    <Avatar
                      shape="circle"
                      size="40px"
                      icon="user"
                      style={{ color: "white" }}
                    />
                  </PopoverWrapper>
                </Badge>
              </Col>
              <Col span={8}>
                {menuShow.rightMenu === true ? (
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
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null)(HeaderContent);
