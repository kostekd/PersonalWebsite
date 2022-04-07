import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/Content/MainContent";
import ContactSection from "./components/Content/ContactSection/ContactSection";

function App() {
  const [contactVisible, setContactVisible] = useState(false);
  const [mySkillsVisible, setMySkillsVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  const onContactClickHandler = () => {
    console.log("Click");
    setContactVisible((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Sidebar
        onContactClick={onContactClickHandler}
        onAboutClick={onContactClickHandler}
        onMySkillsClick={onContactClickHandler}
        onWorkClick={onContactClickHandler}
      />
      <MainContent
        isABoutVisible={aboutVisible}
        isContactVisible={contactVisible}
        isMySkillsVisible={mySkillsVisible}
        isWorkVisible={workVisible}
      />
    </div>
  );
}

export default App;
