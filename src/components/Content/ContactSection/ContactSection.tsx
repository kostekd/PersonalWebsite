import React from "react";
import classes from "./ContactSection.module.css";
import FBLogo from "./../../../images/fb-logo.png";
import GithubLogo from "./../../../images/github.png";

const ContactSection = () => {
  return (
    <section className={classes["contact-info"]}>
      <img alt="logo" src={FBLogo} />
      <img alt="logo" src={GithubLogo} />
    </section>
  );
};

export default ContactSection;
