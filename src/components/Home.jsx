import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import LoadingPage from "../components/loadingpage/LoadingPage";
import Navbar from "../components/navbar/Navbar";
import NavItem from "../components/navbar/NavItem";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/aboutme/AboutMe";
import MyWorks from "../components/myworks/MyWorks";
import WorkExperiences from "../components/workExperiences/WorkExperiences";
import Adventures from "../components/adventures/Adventures";
import Socials from "../components/socials/Socials";

// Data
import { navData } from "../data";

export const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [loadPage, setLoadPage] = useState(false);
  const [navbarState, setNavbarState] = useState("home");

  const closeSideMenu = () => {
    setShowMenu(false);
  };

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
      {loadPage ? (
        <div className="flex h-screen justify-center items-center mx-auto">
          <LoadingPage fourLetterWord={'AMOS'} />
        </div>
      ) : (
        <></>
      )}
      <div className={`${loadPage ? "hidden" : ""}`}>
        <Navbar
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          numberOfLinks={navData.length}
        >
          <>
            {navData.map((item, index) => {
              return (
                <NavItem
                  key={index}
                  index={index}
                  closeSideMenu={closeSideMenu}
                  item={item}
                  showMenu={showMenu}
                  navbarState={navbarState}
                />
              );
            })}
            <Link className={`btn btn-primary btn-sm text-white md:mr-2`} to={"/blog"}>
              My Blog
            </Link>
          </>
        </Navbar>

        <Hero />

        <AboutMe />

        <MyWorks />

        <WorkExperiences />

        <Adventures />

        <Socials />
      </div>
    </>
  );
};

export default Home;
