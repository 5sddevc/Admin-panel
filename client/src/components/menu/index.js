import React from "react";
import { Menu } from "antd";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  background: ${props => props.theme[props.theme.mode].background.primary};
  border: none;
  transition: none;

  && * {
    transition: none;
  }

  && a, && li {
    color: ${props => props.theme[props.theme.mode].textColor.primary};
  }
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const MenuWrapper = props => {
  return (
    <StyledMenu {...props}></StyledMenu>
  );
};

export default MenuWrapper;