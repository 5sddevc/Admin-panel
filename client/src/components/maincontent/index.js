import React from "react";
import {Layout} from "antd";
import styled from "styled-components";

const {Content} = Layout;

const StyledContent = styled(Content)`
  background: ${props => props.theme[props.theme.mode].background.secondary};
  color: ${props => props.theme[props.theme.mode].textColor.primary}; 

  padding: 35px;

  height: calc(100vh - 64px - 69px)
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const ContentWrapper = props => {
  return (
    <StyledContent {...props}></StyledContent>
  );
};

export default ContentWrapper;
