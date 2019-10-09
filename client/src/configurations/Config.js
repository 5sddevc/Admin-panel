import React from "react";
import Logo from "../assets/images/textlogo.svg";
//import Logo from "../assets/images/Logo.png";
import MaleAvatar from "../assets/images/maleavatar.png";
import FemaleAvatar from "../assets/images/femaleavatar.svg";

const HeaderLogo = () => {
  return <img src={Logo} style={{ width: "128px", height: "64px" }}></img>;
};

// const HeaderLogo = () => {
//   return <img src={Logo} style={{ height: 50, width: 50 }}></img>;
// };

const menuShow = {
  rightMenu: false,
  leftMenu: false
};
const avatarIcons = {
  male: MaleAvatar,
  female: FemaleAvatar
};
export { HeaderLogo, menuShow, avatarIcons };
