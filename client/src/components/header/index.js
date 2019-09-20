import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

import HeaderContent from "./HeaderContent";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background: ${props => props.theme[props.theme.mode].background.primary};
  color: ${props => props.theme[props.theme.mode].textColor.primary}; 
  border-bottom: 1px solid ${props => props.theme[props.theme.mode].border}; 

  && .headerIcon {
    color: ${props => props.theme[props.theme.mode].textColor.primary}; 
  }
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const HeaderWrapper = props => {
  return (
    <StyledHeader style={{ padding: "0px" }}>
      <HeaderContent
        state={props.state}
        toggleCollapsed={props.toggleCollapsed}
      />
    </StyledHeader>
  );
};

export default HeaderWrapper;
