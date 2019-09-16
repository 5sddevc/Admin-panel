import React from './node_modules/react';
import {primaryColor} from "../../configurations/Theme"
import {Input} from './node_modules/antd';

const InputWrapper = (props)=>{
    return (
    props.password ? (
        <Input.Password {...props}></Input.Password>
    ) : (
        <Input {...props}></Input>
    )
    );
}

export default InputWrapper;