import React from "react";
import {Layout} from "antd";
import styled from "styled-components";

const {Content} = Layout;

const StyledContent = styled(Content)`
  //background: ${props => props.theme[props.theme.mode].background.secondary};
  background: ${props => props.theme[props.theme.mode].background.primary};
  color: ${props => props.theme[props.theme.mode].textColor.primary};
  font-size: 0.85rem;
  font-weight: 600; 

  padding: ${props => props.theme[props.theme.mode].spacing.outer}px ${props => props.theme[props.theme.mode].spacing.mainscreen}px;
  padding-bottom: 0;

  margin-top: 64px;
  min-height: calc(100vh - 64px - 38px);
  //height: calc(100vh - 64px - 38px);
  overflow: auto;

  h1, h2, h3, h4, h5 {
    color: ${props => props.theme[props.theme.mode].textColor.primary};
    margin: none important;
  }

  .heading {
    font-size: 1.3rem;
  }

  .sub-heading {
    font-size: 1.05rem;
  }

  .normal {
    font-size: 0.85rem;
  }

  .small {
    font-size: 0.76rem;
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

  .mainContentDiv {
    margin-bottom: ${props => props.theme[props.theme.mode].spacing.outer}px;
  }

  .mainContentDivSmall {
    margin-bottom: ${props => props.theme[props.theme.mode].spacing.inner}px;
  }

  .mainContentDivMedium {
    margin-bottom: ${props => props.theme[props.theme.mode].spacing.inner + 4}px;
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
