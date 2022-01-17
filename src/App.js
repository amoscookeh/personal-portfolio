import React, { useState } from "react";

// Components
import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navbar/NavItem";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutme/AboutMe";
import MyWorks from "./components/myworks/MyWorks";
import WorkExperiences from "./components/workExperiences/WorkExperiences";
import Adventures from "./components/adventures/Adventures";
import Socials from "./components/socials/Socials";

// Data
import { navData } from "./data";

// Sidebar management

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const closeSideMenu = () => {
    setShowMenu(false);
  }

  return (
    <>
      <Navbar setShowMenu={setShowMenu} showMenu={showMenu}>
        {navData.map((item, index) => {
          return (
            <NavItem key={index} index={index} closeSideMenu={closeSideMenu} item={item} showMenu={showMenu}/>
          );
        })}
      </Navbar >

      <Hero />

      <AboutMe />

      <MyWorks />

      <WorkExperiences />

      <Adventures />

      <Socials />

    </>
  );
}

export default App;
