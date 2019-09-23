import React from 'react';
import styled, { css } from "styled-components";
import InputWrapper from "../../components/input";

const AppStyles = css`
padding-top: 18px;
padding-bottom: 18px;

//width: 200px;
`;

const AppInput = (props)=>{
    return (
    <InputWrapper appStyles={AppStyles} {...props} />
    );
}

export default AppInput;