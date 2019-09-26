import React from "react";
import { DatePicker } from "antd";
import styled from "styled-components";


const { MonthPicker } = DatePicker;

const StyledPicker = styled(MonthPicker).attrs(() => ({ size: "large" }))`
//   color: palevioletred;
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
input {
    background-color: ${props => props.theme[props.theme.mode].background.primary};
    color: ${props => props.theme[props.theme.mode].textColor.primary};
    border: 1px solid ${props => props.theme[props.theme.mode].primary.main};
    //${props => props.appStyles ? props.appStyles : null};
    // padding-top: 18px;
    // padding-bottom: 18px;
}

* {
    color: ${props => props.theme[props.theme.mode].primary.main};
}
`;

const MonthPickerWrapper = props => {
  return <StyledPicker {...props}/>;
};
export default MonthPickerWrapper;


// cb funtion recieverd from props to get the selected date
// function onChange(date, dateString) {
//   console.log(date, dateString);
// }
