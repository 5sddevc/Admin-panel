import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { LeftSideBarMenu } from "../../commons/sidebarMenus"

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  background: ${props => props.theme[props.theme.mode].background.primary};
  color: ${props => props.theme[props.theme.mode].textColor.primary}; 

  transition: width 0.2s, min-width 0.2s, max-width 0.2s, flex 0.2s, background 0s;

  && * {
    transition: width 0.2s, min-width 0.2s, max-width 0.2s, flex 0.2s,  background 0s;
  }
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const LeftSideMenuWrapper = props => {
  return (
    <StyledSider
    collapsedWidth={0}
    collapsed={props.state.collapsedLeft}
  >
    <LeftSideBarMenu />
  </StyledSider>
  );
};

export default LeftSideMenuWrapper;
