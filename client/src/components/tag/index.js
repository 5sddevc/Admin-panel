import React from "react";
import styled from "styled-components";
import { Tag } from "antd";

const StyledTag = styled(Tag)`
text-align: center;
background-color: ${props => props.type ? props.theme[props.theme.mode].tag.colors[props.type] : props.theme[props.theme.mode].primary.main};
color: ${props => props.theme["dark"].textColor.primary};
border: none;

padding: 6px 0px;
width: 104px;
border-radius: 25px;
font-size: .9rem;
font-weight: normal;

&:hover {
  opacity: unset;
}
//font-weight: bold;
`;

const TagWrapper = props => {
  return <StyledTag {...props}></StyledTag>;
};

export default TagWrapper;