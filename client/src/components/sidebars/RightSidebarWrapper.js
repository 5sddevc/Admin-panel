import React from "react";
import { Layout} from "antd";



const {Sider } = Layout;

const rightSideMenuWrapper = props => {
  return (
    <Sider
    // inlineCollapsed={props.state.collapsedRight}
    collapsedWidth={0}
    collapsed={props.state.collapsedRight}
  >
    <p style={{color:"white"}}>Right Side Bar Menu</p>
  </Sider>
  );
};

export default rightSideMenuWrapper;
