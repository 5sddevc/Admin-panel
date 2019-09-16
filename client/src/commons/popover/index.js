import React from "react";
const { Popover } = 'antd';
const textTest = <span>Title</span>;
const contentTest = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const PopoverWrapper = (props) => {
    console.log(props);
  return(
    <Popover placement="bottomRight" title={textTest} content={contentTest} trigger="click">
    {props.children}
  </Popover>
  );
};
export default PopoverWrapper;
