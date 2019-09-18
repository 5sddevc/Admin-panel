import React from "react";
import {Link} from "react-router-dom";
import { Menu, Icon, Button } from "antd";
import {menuShow} from "../../configurations/Config";
import { connect } from "react-redux";
import Switch from "../../components/switch";
import { toggleMode } from "../../actions/App"
import { Row, Col } from "antd";
import { HeaderLogo } from "../../configurations/Config";
import { FiBell, FiMail } from "react-icons/fi";
import PopoverWrapper from "../popover/index";
import MenuWrapper from "../../components/menu";
import Badge from "../../components/badge/index";
import Avatar from "../../components/avatar/index";

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
          {(menuShow.leftMenu===true)? <Button
              type="primary"
              onClick={() => this.props.toggleCollapsed("collapsedLeft")}
              style={{ marginBottom: 16, zIndex: 10 }}
            >
              <Icon
                type={
                  this.props.state.collapsedLeft ? "menu-unfold" : "menu-fold"
                }
              />
            </Button> :null}
          </Col>
          <Col span={14}>
            <Row type="flex" justify="space-between">
              <Col>
                <MenuWrapper
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                  style={{ lineHeight: "64px" }}
                >
                  <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
                  <Menu.Item key="2" ><Link to="/users">Users</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/reports">Reports</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/requests">Requests</Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/settings">Settings</Link></Menu.Item>
                </MenuWrapper>
              </Col>

              <Col>
                <span>
                  Switch Theme
                  <Switch onChange={() => {this.props.dispatch(toggleMode())}} style={{ marginLeft: 10}} defaultChecked={true}></Switch>
                </span>
              </Col>
            </Row>
          </Col>

          <Col span={4}>
            <Row type="flex" justifycontent="space-between">
              <Col span={5} style={{ padding: "10px" }}>
                <Badge count={10} style={{ color: "white" }}>
                  <FiBell
                    className="headerIcon"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </Badge>
              </Col>
              <Col span={5} style={{ padding: "10px" }}>
                <Badge count={5} style={{ color: "white" }}>
                  <FiMail
                    className="headerIcon"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </Badge>
              </Col>
              <Col span={6}>
                <Badge dot style={{ color: "white" }}>
                <PopoverWrapper title={"Asdasd"} content={"qweqwe"}>
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
              {(menuShow.rightMenu===true)?<Button
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
                </Button>:null}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null)(HeaderContent)
