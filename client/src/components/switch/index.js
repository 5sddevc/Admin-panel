import React from 'react';
import styled from "styled-components";
import {Switch} from 'antd';

const StyledSwitch = styled(Switch)`
    &.ant-switch-checked {
        background-color: ${props => props.theme[props.theme.mode].primary.main} !important;
    }
    // &.ant-switch {
    //     background-color: yellow;
    // }
//   color: palevioletred;
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const SwitchWrapper = (props)=>{
    return (
        <StyledSwitch {...props}></StyledSwitch>
    );
}

export default SwitchWrapper;