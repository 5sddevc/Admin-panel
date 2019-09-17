import React from 'react';
import styled from "styled-components";
import {Input} from 'antd';

const StyledInput = styled(Input).attrs(() => ({}))`
//   color: palevioletred;
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
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