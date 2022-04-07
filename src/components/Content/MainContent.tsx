import React from "react";
import classes from "./MainContent.module.css";
import JSimage from "./../../images/JSLogo.png";
import Reactimage from "./../../images/logo512.png";
import ContactSection from "./ContactSection/ContactSection";

interface MainContent{
  isContactVisible: Boolean,
  isMySkillsVisible: Boolean,
  isWorkVisible: Boolean,
  isABoutVisible: Boolean,
}

const MainContent = (props : MainContent) => {
  return (
    <div className={classes.content}>
      <header>
        <img src={JSimage} className={classes.image} />
        <img src={Reactimage} className={classes.image} />
      </header>
      <section className={classes.main}>
        <div className={classes["welcome-message"]}>
          <h1>
            Hi, <br /> I'm Dominik, <br />
            Junior Front End Developer!
          </h1>
        </div>
        {props.isContactVisible && <ContactSection/>}
      </section>
    </div>
  );
};

export default MainContent;
