import React from "react";
import { withTheme } from "styled-components";
 
const Blip = props => (
    <span style={
        { display: "inline-block", 
        width: props.small ? 4 : 6, 
        height: props.small ? 4 : 6, 
        margin: props.small ? "0px 4px" : "0px 6px", 
        borderRadius: 20, 
        backgroundColor: props.color ? props.color : props.theme[props.theme.mode].primary.main, }} />
)

export default withTheme(Blip);