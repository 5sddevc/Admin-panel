import React from "react";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

const CardWrapper = props => {
  return (
    <Card {...props}>
    {props.children}
    </Card>
  );
};
export default CardWrapper;
