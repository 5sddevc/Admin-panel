import React from "react";
import { Menu } from "antd";
import styled, { css } from "styled-components";

const StyledMenu = styled(Menu)`
  background: ${props => props.theme[props.theme.mode].background.primary};
  border: none;
  transition: none;
  font-size: ${props => props.theme[props.theme.mode].textSizes.relative.navbar}
  font-weight: 600;
  font-family: "Montserrat";
  && * {
    transition: none;
  }

  && a, && li {
    color: ${props => props.theme[props.theme.mode].textColor.primary};
    z-index: 100;
    vertical-align: middle;
    line-height: 36px;
  }

  // && .ant-menu-item:not(.ant-menu-item-selected) {
  //   border: none;
  // }

  && .ant-menu-item {
    top: 0 !important;
    border: none;
    border-radius: 3px;
    padding: 0 0px !important
    width: 170px;
  }

  .ant-menu-item:not(:last-child) {
    margin-right: 10px;
  }

  .ant-menu-item-selected {
    color: ${props => props.theme[props.theme.mode].primary.main} !important;
    background-color: ${props => props.theme[props.theme.mode].primary.light}
  }

  .ant-menu-item-selected a {
    color: ${props => props.theme[props.theme.mode].primary.main} !important;
  }

  .ant-menu-item:hover {
    background-color: ${props => props.theme[props.theme.mode].primary.light} !important;
  }

  .ant-menu-item:not(.ant-menu-item-selected) a:hover {
    color: ${props => props.theme[props.theme.mode].textColor.primary} !important;
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