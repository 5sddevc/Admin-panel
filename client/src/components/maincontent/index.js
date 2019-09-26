import React from "react";
import {Layout} from "antd";
import styled from "styled-components";

const {Content} = Layout;

const StyledContent = styled(Content)`
  background: ${props => props.theme[props.theme.mode].background.secondary};
  color: ${props => props.theme[props.theme.mode].textColor.primary}; 

  padding: ${props => props.theme[props.theme.mode].spacing.outer}px;
  padding-bottom: 0;

  height: calc(100vh - 64px - 38px);

  h1, h2, h3, h4, h5 {
    color: ${props => props.theme[props.theme.mode].textColor.primary};
    margin: none important;
  }

  .heading {
    font-size: 1.4rem;
  }

  .sub-heading {
    font-size: 1rem;
  }

  .hint, .normal {
    font-size: 0.8rem;
  }

  .headingColor {
    color: ${props => props.theme[props.theme.mode].textColor.primary};
  }

  .hintColor {
    color: ${props => props.theme[props.theme.mode].textColor.hint};
  }

  .ant-select-dropdown-menu {
    background-color: ${props => props.theme[props.theme.mode].background.primary};
    color: ${props => props.theme[props.theme.mode].textColor.primary}; 
  }
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const ContentWrapper = props => {
  return (
    <StyledContent {...props}></StyledContent>
  );
};

export default ContentWrapper;
