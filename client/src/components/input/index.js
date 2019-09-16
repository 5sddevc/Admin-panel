import React from 'react';
import {primaryColor} from "../../configurations/Theme"
import {Input} from 'antd';

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