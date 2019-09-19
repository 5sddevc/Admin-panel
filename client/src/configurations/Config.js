import React from "react";
import Logo from "../assets/images/textlogo.svg";
import MaleAvatar from "../assets/images/maleavatar.png";
import FemaleAvatar from "../assets/images/femaleavatar.svg";

const HeaderLogo = () => {
  return <img src={Logo} style={{ width: "128px", height: "64px" }}></img>;
};

const menuShow = {
  rightMenu: false,
  leftMenu: true
};
const avatarIcons = {
  male: MaleAvatar,
  female: FemaleAvatar
};
export { HeaderLogo, menuShow, avatarIcons };
