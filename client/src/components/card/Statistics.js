import React from "react";
import {Statistic} from "antd";
import styled, { css } from "styled-components";

const StyledStatistic = styled(Statistic)`
  ${props => !props.valueStyle ? null : css`
  && .ant-statistic-content * { 
    color:  ${props => props.valueStyle.color};
  }`}`;



const StatisticWrapper = props => {
  return (
    <StyledStatistic
    {...props}
  />
  );
};
export default StatisticWrapper;
