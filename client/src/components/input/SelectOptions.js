import React from "react";
import styled from "styled-components";
import {Select, Icon } from "antd";

const { Option } = Select;
const StyledInput = styled(Option).attrs(() => ({}))`
// .ant-select-dropdown-menu {
//   background-color: ${props => props.theme[props.theme.mode].background.primary};
//   color: ${props => props.theme[props.theme.mode].textColor.primary};
// }
  //   color: palevioletred;
  //   font-weight: bold;
  //   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const OptionsWrapper = props => {
  return <StyledInput {...props}>{props.children}</StyledInput>;
};

export default OptionsWrapper;
