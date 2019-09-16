import React from "react";
import { Layout} from "antd";



const {Content } = Layout;

const ContentWrapper = props => {
  return (
    <Content>{props.children}</Content>
  );
};

export default ContentWrapper;
