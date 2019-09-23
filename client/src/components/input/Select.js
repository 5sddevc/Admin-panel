import React from "react";
import styled from "styled-components";
import { Input,  Select, Icon } from "antd";

const StyledInput = styled(Select).attrs(() => ({}))`
.ant-select-selection {
  color: ${props => props.theme[props.theme.mode].textColor.primary};
  background-color: ${props => props.theme[props.theme.mode].background.primary};
  border: 1px solid ${props => props.theme[props.theme.mode].primary.main};
  //${props => props.appStyles ? props.appStyles[0] : null};
  height: 38px;
}

//${props => props.appStyles ? props.appStyles[1] : null};
.ant-select-selection__rendered {
  height: 100%;
  display: flex;
  align-items: center;
}

.ant-select-arrow {
  color: ${props => props.theme[props.theme.mode].textColor.primary};
}
  //   color: palevioletred;
  //   font-weight: bold;
  //   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const SelectWrapper = props => {
  return <StyledInput {...props}>{props.children}</StyledInput>;
};

export default SelectWrapper;
