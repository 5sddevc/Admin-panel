import React from 'react';
import styled from "styled-components";
import {Input} from 'antd';

const StyledInput = styled(Input).attrs(() => ({ size: "large" }))`
//   color: palevioletred;
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
input {
    background-color: ${props => props.theme[props.theme.mode].background.primary};
    color: ${props => props.theme[props.theme.mode].textColor.primary};
    border: 1px solid ${props => props.theme[props.theme.mode].primary.main};
    //${props => props.appStyles ? props.appStyles : null};
    // padding-top: 18px;
    // padding-bottom: 18px;
}

* {
    color: ${props => props.theme[props.theme.mode].primary.main};
}
`;

const InputWrapper = (props)=>{
    return (
    props.password ? (
        <StyledInput as={Input.Password} {...props}></StyledInput>
    ) : (
        <StyledInput {...props}></StyledInput>
    )
    );
}

export default InputWrapper;