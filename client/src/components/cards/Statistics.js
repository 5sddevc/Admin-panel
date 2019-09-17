import React from "react";
import {Statistic} from "antd";



const StatisticWrapper = props => {
  return (
    <Statistic
    {...props}
    // title="Active"
    // value={11.28}
    // precision={2}
    // valueStyle={{ color: '#3f8600' }}
    // prefix={<Icon type="arrow-up" />}
    // suffix="%"
  />
  );
};
export default StatisticWrapper;
