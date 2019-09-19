import React from "react";
import styled from "styled-components";
import { Input,  Select, Icon } from "antd";

const StyledInput = styled(Select).attrs(() => ({}))`
  //   color: palevioletred;
  //   font-weight: bold;
  //   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const SelectWrapper = props => {
  return <StyledInput {...props}>{props.children}</StyledInput>;
};

export default SelectWrapper;
