import React from "react";
import { Card, Icon, Avatar } from "antd";
import { XAxis } from 'recharts';
import styled from "styled-components";


// const StyledXAxis = styled(XAxis)`
// `;

const XAxisWrapper = props => {
  return (
    <XAxis {...props}/>
  );
};
export default XAxisWrapper;