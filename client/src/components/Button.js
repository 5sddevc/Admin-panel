import React from 'react';
import {primaryColor} from "../configurations/theme"
import {Button} from 'antd';

export  const ButtonWrapper = (props)=>{
return (
<Button {...props}  style={{color:primaryColor}}>Button</Button>
);
}