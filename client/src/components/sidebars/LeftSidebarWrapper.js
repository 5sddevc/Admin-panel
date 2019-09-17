import React from "react";
import { Layout } from "antd";
import { LeftSideBarMenu } from "../../commons/sidebarMenus"



const {Sider } = Layout;

const LeftSideMenuWrapper = props => {
  return (
    <Sider
    collapsedWidth={0}
    collapsed={props.state.collapsedLeft}
    theme={"light"}
  >
    <LeftSideBarMenu />
  </Sider>
  );
};

export default LeftSideMenuWrapper;
