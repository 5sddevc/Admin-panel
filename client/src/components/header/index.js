import React from "react";
import { Layout } from "antd";

import HeaderContent from "../../commons/header/index";

const { Header } = Layout;
const HeaderWrapper = props => {
  return (
    <Header style={{ padding: "0px" }}>
      <HeaderContent
        state={props.children.props.state}
        toggleCollapsed={props.children.props.toggleCollapsed}
      />
    </Header>
  );
};

export default HeaderWrapper;
