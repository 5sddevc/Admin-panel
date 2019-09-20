import React from "react";
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


const DatePickerWrapper = (props) =>{
  return (
    <DatePicker {...props} />
  );
}
export default DatePickerWrapper;



// cb funtion recieverd from props to get the selected date
// function onChange(date, dateString) {
//   console.log(date, dateString);
// }

