import React from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const RangePickerWrapper = props => {
  return <RangePicker {...props}/>;
};
export default RangePickerWrapper;


// cb funtion recieverd from props to get the selected date
// function onChange(date, dateString) {
//   console.log(date, dateString);
// }
