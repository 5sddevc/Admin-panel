import React from "react";
import { Layout} from "antd";



const {Sider } = Layout;

const rightSideMenuWrapper = props => {
  return (
    <Sider
    collapsedWidth={0}
    collapsed={props.state.collapsedRight}
  >
    <p style={{
      //height:"40px", 
      //whiteSpace: "nowrap", 
      color:"white" }}>Right Side Bar Menu</p>
  </Sider>
  );
};

export default rightSideMenuWrapper;
