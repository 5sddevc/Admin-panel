import React from "react";
import Logo from "../assets/images/textlogo.svg";

const HeaderLogo = () => {
  return (
    <img src={Logo} style={{ width: "128px", height: "64px" }}></img>
  );
};

const menuShow = {
  rightMenu : true,
  leftMenu: true
};
export { HeaderLogo, menuShow };



