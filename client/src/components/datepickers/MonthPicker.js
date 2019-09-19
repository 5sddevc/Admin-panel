import React from "react";
import { DatePicker } from "antd";

const { MonthPicker } = DatePicker;

const MonthPickerWrapper = props => {
  return <MonthPicker {...props}/>;
};
export default MonthPickerWrapper;


// cb funtion recieverd from props to get the selected date
// function onChange(date, dateString) {
//   console.log(date, dateString);
// }
