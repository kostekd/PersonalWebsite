import React from "react";
import classes from "./Sidebar.module.css";
import SideBarList, { SideBarChainProps } from "./SideBarList";

const Sidebar = (props: SideBarChainProps) => {
  return (
    <div className={classes.sidebar}>
      <SideBarList
        onAboutClick={props.onAboutClick}
        onContactClick={props.onContactClick}
        onMySkillsClick={props.onMySkillsClick}
        onWorkClick={props.onWorkClick}
      />
    </div>
  );
};

export default Sidebar;
