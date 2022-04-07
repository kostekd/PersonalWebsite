import React, { Fragment } from "react";
import classes from './SidebarButton.module.css';


interface SideBarButtonProps{
    label : String
    onClickHandler: Function;
}

const SideBarButton = (props : SideBarButtonProps) => {
    return (
        <Fragment>
            <button onClick={() => props.onClickHandler()} className={classes.button}>{props.label}</button>
        </Fragment>
    );
}


export default SideBarButton;