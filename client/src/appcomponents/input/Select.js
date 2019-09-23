import React from 'react';
import styled, { css } from "styled-components";
import SelectWrapper from "../../components/input/Select";

const SelectStyle = css`
height: 38px;

//width: 200px;
`;

const SelectRenderedStyle = css`
.ant-select-selection__rendered {
    height: 100%;
    display: flex;
    align-items: center;
}
}
`;

const AppSelect = (props)=>{
    return (
    <SelectWrapper appStyles={[SelectStyle, SelectRenderedStyle]} {...props} />
    );
}

export default AppSelect;