import React from "react";
import Avatar from "../avatar/index";
import { Card, Row, Col } from "antd";
const { Meta } = Card;


const UserCard = props => {
  console.log("Props UserCard", props);
  return (
    <Meta
      {...props}
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title="User Name"
      description="This is the description"
    ></Meta>
  );
};
export default UserCard;
