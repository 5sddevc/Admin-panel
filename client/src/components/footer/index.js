import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  background: ${props => props.theme[props.theme.mode].background.primary};
  color: ${props => props.theme[props.theme.mode].textColor.primary}; 
  border-top: 1px solid ${props => props.theme[props.theme.mode].border}; 
  padding: 8px 50px; 
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const FooterWrapper = props => {
  return (
    <StyledFooter>Footer content</StyledFooter>
  );
};

export default FooterWrapper;
