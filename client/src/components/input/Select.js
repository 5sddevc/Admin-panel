import React from "react";
import styled, { css } from "styled-components";
import { Input,  Select, Icon } from "antd";

const InputStyles = css`
.ant-select-selection {
  color: ${props => props.theme[props.theme.mode].textColor.primary};
  background-color: ${props => props.theme[props.theme.mode].background.primary};
  //border: 1px solid ${props => props.theme[props.theme.mode].primary.main};
  border: none !important
  box-shadow: 0 0px 15px 0 rgba(0,0,0,0.15);
  //${props => props.appStyles ? props.appStyles[0] : null};
  //height: 38px;
}

//${props => props.appStyles ? props.appStyles[1] : null};
.ant-select-selection__rendered {
  height: 100%;
  display: flex;
  align-items: center;
}

.ant-select-arrow {
  color: ${props => props.theme[props.theme.mode].primary.main};
}

.ant-select-dropdown-menu {
  background-color: ${props => props.theme[props.theme.mode].background.primary};
}

.ant-select-dropdown-menu-item {
  display: flex;
  align-items: center;
  height: 40px;
  color: ${props => props.theme[props.theme.mode].textColor.primary};
  
}

.ant-select-dropdown-menu-item:hover, .ant-select-dropdown-menu-item:hover, .ant-select-dropdown-menu-item-active {
  background-color: ${props => props.theme[props.theme.mode].primary.light};
}
  //   color: palevioletred;
  //   font-weight: bold;
  //   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const SelectWrapper = props => {
  return <Select className={props.className} dropdownClassName={props.className} {...props}>{props.children}</Select>;
};

export default styled(SelectWrapper).attrs({ size: "large" })`${InputStyles}`;
