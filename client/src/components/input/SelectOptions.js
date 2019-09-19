import React from "react";
import styled from "styled-components";
import {Select, Icon } from "antd";

const { Option } = Select;
const StyledInput = styled(Option).attrs(() => ({}))`
  //   color: palevioletred;
  //   font-weight: bold;
  //   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const OptionsWrapper = props => {
  return <StyledInput {...props}>{props.children}</StyledInput>;
};

export default OptionsWrapper;
