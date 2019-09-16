import React from 'react';
import propTypes from 'prop-types';
//import {primaryColor} from "../configurations/theme"
import { Button } from 'antd';


const ButtonWrapper = (props) => {
  return (
    <Button {...props}
    //style={{color:primaryColor}}
    >
    </Button>
  );
}

ButtonWrapper.propTypes = {
  children: propTypes.string.isRequired,
  block: propTypes.bool.isRequired,
  loading: propTypes.bool.isRequired,
  onClick: propTypes.func,
}

export default ButtonWrapper;