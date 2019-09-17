import React from 'react';
import styled from "styled-components";
//import {primaryColor} from "../configurations/theme"
import {Button} from 'antd';

const StyledButton = styled(Button)`
   //color: ${props => props.theme[props.theme.mode].primary.main};
   font-weight: bold;
`;

const ButtonWrapper = (props)=>{
    return (
    <StyledButton {...props}  
    //style={{color:primaryColor}}
    >
    </StyledButton>
    );
    }

export default ButtonWrapper;