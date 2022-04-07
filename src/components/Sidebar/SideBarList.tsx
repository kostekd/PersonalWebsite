import React, { useState } from "react";
import SideBarButton from "./SideBarButton";
import classes from './SideBarList.module.css';


const DUMMY_LABELS = ["About", "My skills", "Work", "Contact"];

export interface SideBarChainProps{
    onContactClick: Function,
    onWorkClick: Function,
    onMySkillsClick: Function,
    onAboutClick: Function
}

const SideBarList = (props : SideBarChainProps) => {
    const renderedButtons = DUMMY_LABELS.map(element => {
        return <SideBarButton onClickHandler={props.onContactClick} key={Math.random()} label ={element} />
    })
    return (
        <div className={classes.buttons}>
            {renderedButtons}
        </div>
    );
}

export default SideBarList;