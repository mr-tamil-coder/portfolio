import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import NavBarToggle from "./NavBarToggle";
import NavToggle from "./NavToggle";
import Hero from "../Hero";

const Head = () => {
  const [isThemeBtnActive, setIsThemeBtnActive] = useState(false);
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const toggleTheme = () => {
    setIsThemeBtnActive(!isThemeBtnActive);

    if (!isThemeBtnActive) {
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");
      localStorage.setItem("theme", "light_theme");
    } else {
      document.body.classList.add("dark_theme");
      document.body.classList.remove("light_theme");
      localStorage.setItem("theme", "dark_theme");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light_theme") {
      setIsThemeBtnActive(true);
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");
    } else {
      setIsThemeBtnActive(false);
      document.body.classList.remove("light_theme");
      document.body.classList.add("dark_theme");
    }
  }, []);

  const handleNavToggle = () => {
    setNavMenuVisible(!navMenuVisible);
  };

  return (
    <div>
      <NavBar />
      <NavToggle></NavToggle>
      {/* Pass handleNavToggle function to NavBar component */}
      {/* <NavBarToggle onClick={handleNavToggle} />
       */}
       <Hero />
      {/* Render other components based on navMenuVisible */}
      {/* {navMenuVisible && <YourNavigationMenuComponent />} */}
    </div>
  );
};
export default Head;
