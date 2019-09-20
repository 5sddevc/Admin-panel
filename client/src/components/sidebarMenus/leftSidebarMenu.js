//Left side bar menu content 
import React from "react";
import { Menu } from "antd";
import MenuWrapper from "../menu";

const LeftSideBar = (props) => {
  return(
    <MenuWrapper
        defaultSelectedKeys={["1"]}
    >
        <Menu.Item key="1">Menu 1</Menu.Item>
        <Menu.Item key="2">Menu 2</Menu.Item>
        <Menu.Item key="3">Menu 3</Menu.Item>
        <Menu.Item key="4">Menu 4</Menu.Item>

    </MenuWrapper>
  );
};
export default LeftSideBar;