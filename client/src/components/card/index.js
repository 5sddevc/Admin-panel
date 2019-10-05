import React from "react";
import { Card, Icon, Avatar } from "antd";
import styled from "styled-components";


const StyledCard = styled(Card)`
  color: ${props => props.theme[props.theme.mode].textColor.primary};
  background-color: ${props => props.theme[props.theme.mode].background.primary};

  .ant-card-body {
    padding: ${props => props.theme[props.theme.mode].spacing.inner}px;
  }

  font-size: inherit;
  //border: 1px solid ${props => props.theme[props.theme.mode].border};
  border: none;
  border-radius: ${props => props.theme[props.theme.mode].card.borderRadius}px;
  box-shadow: 0px 6px 16px -6px rgba(0,0,0,0.15);
  transition: none;
  
  // * {
  //   color: ${props => props.theme[props.theme.mode].textColor.primary};
  //   transition: none;
  // }

  // .mainContentDiv:not(:first-child) & {
  //   margin-top: ${props => props.theme[props.theme.mode].spacing.outer}px;
  // }

  // &.mainContentDiv {
  //   margin-bottom: ${props => props.theme[props.theme.mode].spacing.outer}px;
  // }

  // &.mainContentDiv .ant-card-body {
  //   padding: ${props => props.theme[props.theme.mode].spacing.inner}px;
  // }

  .mainContentDiv &:nth-of-type(1), .mainContentDivSmall &:nth-of-type(1) {
    height: 100%;
  }

  .mainContentDiv & .ant-card-body, .mainContentDivSmall & .ant-card-body {
    padding: ${props => props.theme[props.theme.mode].spacing.inner}px;
  }
  
  &.extraPadding .ant-card-body {
    padding: ${props => props.theme[props.theme.mode].spacing.inner + 4}px;
  }

  .innerContentSpacing {
    margin-top: ${props => props.theme[props.theme.mode].spacing.outer}px;
  }

  && .innerSmallCard & .ant-card-body {
    background: ${props => props.theme[props.theme.mode].background.tertiary};
  }

  && .ant-card-head {
    background: ${props => props.theme[props.theme.mode].background.tertiary};
    border-bottom: 2px solid ${props => props.theme[props.theme.mode].border};
    border-radius : 0;
  }

  .ant-card-body {
    background: ${props => props.theme[props.theme.mode].background.primary};
    border-radius: ${props => props.theme[props.theme.mode].card.borderRadius}px;
  }

  .ant-card-actions {
    background: ${props => props.theme[props.theme.mode].background.tertiary};
    border-top: 1px solid ${props => props.theme[props.theme.mode].border};
  }

  .ant-card-actions > li:not(:last-child) {
    border-right: 1px solid ${props => props.theme[props.theme.mode].border};
  }
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const CardWrapper = props => {
  return (
    <StyledCard {...props}>
    {props.children}
    </StyledCard>
  );
};
export default CardWrapper;
