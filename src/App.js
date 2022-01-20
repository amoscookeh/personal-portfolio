import React, { useState, useEffect } from "react";

// Components
import LoadingPage from "./components/loadingpage/LoadingPage";
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

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [loadPage, setLoadPage] = useState(false);

  const closeSideMenu = () => {
    setShowMenu(false);
  }


  useEffect(() => {
    const min = 4000;
    const max = 6000;
    const loadTime = Math.floor(Math.random() * (max - min)) + min;
    setLoadPage(true);
    setTimeout(() => {
      setLoadPage(false);
    }, loadTime);
  }, []);

  return (
    <>
      {
        loadPage ? (
          <div className="flex h-screen justify-center items-center mx-auto">
            <LoadingPage />
          </div>
        ) : (<></>)
      }
      <div className={`${loadPage ? "hidden" : ""}`}>
        <Navbar setShowMenu={setShowMenu} showMenu={showMenu}>
          {navData.map((item, index) => {
            return (
              <NavItem key={index} index={index} closeSideMenu={closeSideMenu} item={item} showMenu={showMenu} />
            );
          })}
        </Navbar >

        <Hero />

        <AboutMe />

        <MyWorks />

        <WorkExperiences />

        <Adventures />

        <Socials />
      </div>

    </>
  );
}

export default App;
