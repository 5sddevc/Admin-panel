import React from "react";
import { Popover } from 'antd';
const textTest = <span>Title</span>;
const contentTest = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const PopoverWrapper = (props) => {
    // console.log(props);
  return(
    <Popover placement="bottomRight" {...props} trigger="click">
      {props.children}
  </Popover>
  );
};
export default PopoverWrapper;
