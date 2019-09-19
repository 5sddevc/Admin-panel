import React from 'react';
import {Progress} from 'antd';
import styled from "styled-components";

const StyledProgress = styled(Progress)`
    && .ant-progress-inner {
        background: ${props => props.theme[props.theme.mode].background.tertiary};
    }
`;


const ProgressWrapper = (props)=>{
    return (
    <StyledProgress {...props}/>
    );
}

export default ProgressWrapper;