import React from './node_modules/react';
//import {primaryColor} from "../configurations/theme"
import {Button} from './node_modules/antd';


const ButtonWrapper = (props)=>{
    return (
    <Button {...props}  
    //style={{color:primaryColor}}
    >
    </Button>
    );
    }

export default ButtonWrapper;