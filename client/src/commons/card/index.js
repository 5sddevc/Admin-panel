import React from "react";
import { Card, Icon, Avatar } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const StyledCard = styled(Card)`
  color: ${props => props.theme[props.theme.mode].textColor.primary};
  border: 1px solid ${props => props.theme[props.theme.mode].border};
  transition: none;
  
  * {
    color: ${props => props.theme[props.theme.mode].textColor.primary};
    transition: none;
  }

  && .ant-card-head {
    background: ${props => props.theme[props.theme.mode].background.tertiary};
    border-bottom: 2px solid ${props => props.theme[props.theme.mode].border};
    border-radius : 0;
  }

  && .ant-card-body {
    background: ${props => props.theme[props.theme.mode].background.primary};
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
