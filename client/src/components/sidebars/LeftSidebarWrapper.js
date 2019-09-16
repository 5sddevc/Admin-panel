import React from "react";
import { Layout} from "antd";



const {Sider } = Layout;

const LeftSideMenuWrapper = props => {
  return (
    <Sider
    // inlineCollapsed={props.state.collapsedLeft}
    collapsedWidth={0}
    collapsed={props.state.collapsedLeft}
  >
    <p style={{color:"white"}}>Left Side Bar Menu</p>
  </Sider>
  );
};

export default LeftSideMenuWrapper;
