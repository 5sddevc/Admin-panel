import React from "react";
import { DatePicker } from "antd";

const { WeekPicker } = DatePicker;

const WeekPickerWrapper = props => {
  return <WeekPicker {...props}/>;
};
export default WeekPickerWrapper;


// cb funtion recieverd from props to get the selected date
// function onChange(date, dateString) {
//   console.log(date, dateString);
// }
