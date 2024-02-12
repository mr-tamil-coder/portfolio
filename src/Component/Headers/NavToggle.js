import React, { useState, useEffect } from "react";

function NavToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark_theme"
  );

  useEffect(() => {
    // Update the body class when the component mounts
    document.body.classList.toggle("dark_theme", isDarkTheme);
    document.body.classList.toggle("light_theme", !isDarkTheme);
  }, [isDarkTheme]);

  const handleToggle = () => {
    // Toggle the theme state
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    // Update the localStorage when the theme changes
    localStorage.setItem("theme", isDarkTheme ? "dark_theme" : "light_theme");
  }, [isDarkTheme]);

  return (
    <div>
      <button
    className={`theme-btn ${isDarkTheme ? "active" : ""}`}        aria-label="Change Theme"
        title="Change Theme"
        onClick={handleToggle}
      >
        <span className="icon"></span>
      </button>
    </div>
  );
}

export default NavToggle;
