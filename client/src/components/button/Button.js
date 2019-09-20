import React from "react";
// import styled from "styled-components";
//import {primaryColor} from "../configurations/theme"
import { Button } from "antd";
import propTypes from "prop-types";

// const StyledButton = styled(Button)`
//    //color: ${props => props.theme[props.theme.mode].primary.main};
//    //font-weight: bold;
// `;

const ButtonWrapper = props => {
  return <Button {...props}></Button>;
};

ButtonWrapper.propTypes = {
  children: propTypes.string.isRequired,
  block: propTypes.bool.isRequired,
  onClick: propTypes.func
};

export default ButtonWrapper;
