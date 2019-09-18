import React from "react";
import { Menu } from "antd";
import styled, { css } from "styled-components";

const StyledMenu = styled(Menu)`
  background: ${props => props.theme[props.theme.mode].background.primary};
  border: none;
  transition: none;

  && * {
    transition: none;
  }

  && a, && li {
    color: ${props => props.theme[props.theme.mode].textColor.primary};
    z-index: 100;
    vertical-align: unset;
  }

  && .ant-menu-item:not(.ant-menu-item-selected) {
    border: none;
  }
  
  ${props => props.mode === "horizontal" ? null : css`
    && .ant-menu-item-selected {
      background: #1890ff;
      color: ${props => props.theme["dark"].textColor.primary};
    }
    ${props => props.theme.mode === "light" ? null : css`
      .ant-menu-item:active {
        background: #1062af;
      }`
    }`
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