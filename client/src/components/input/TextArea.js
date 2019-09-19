import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const { TextArea } = Input;
const StyledInput = styled(TextArea).attrs(() => ({}))`
  //   color: palevioletred;
  //   font-weight: bold;
  //   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const TextAreaWrapper = props => {
  return <StyledInput {...props}></StyledInput>;
};

export default TextAreaWrapper;
