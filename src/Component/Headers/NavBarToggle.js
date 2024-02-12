import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
function NavBarToggle() {


    
//     const themeToggleBtn = document.querySelector("[data-theme-btn]");


// themeToggleBtn.addEventListener("click", function () {

// //   elemToggleFunc(themeToggleBtn);

//   if (themeToggleBtn.classList.contains("active")) {
//     document.body.classList.remove("dark_theme");
//     document.body.classList.add("light_theme");

//     localStorage.setItem("theme", "light_theme");
//   } else {
//     document.body.classList.add("dark_theme");
//     document.body.classList.remove("light_theme");

//     localStorage.setItem("theme", "dark_theme");
//   }

// });

// /**
//  * check & apply last time selected theme from localStorage
//  */

// if (localStorage.getItem("theme") === "light_theme") {
//   themeToggleBtn.classList.add("active");
//   document.body.classList.remove("dark_theme");
//   document.body.classList.add("light_theme");
// } else {
//   themeToggleBtn.classList.remove("active");
//   document.body.classList.remove("light_theme");
//   document.body.classList.add("dark_theme");
// }
//    {/*Navbar toogle by yt */}
// //    const DarkMode =()=>{
// //     const setDarkMode=()=>{
// //         document.querySelector("body").setAttribute('')
// //     }
// //    }

//     // navbar toogle old
// //     const [isThemeBtnActive, setIsThemeBtnActive] = useState(false);
// //     const [navMenuVisible, setNavMenuVisible] = useState(false);
    

// //     const Button = ({ onClick, ariaLabel, title, themeBtn, iconClass }) => {
// //         return (
// //           <button className={`theme-btn ${themeBtn ? 'active' : ''}`} onClick={onClick} aria-label={ariaLabel} title={title} data-theme-btn>
// //             <span className={`icon ${iconClass}`}></span>
// //           </button>
// //         );
// //       };

// //       const NavBarToggle = ({ onClick }) => {
// //         return (
// //           <button className="nav-toggle-btn" onClick={onClick} aria-label="Toggle Menu" title="Toggle Menu" data-nav-toggle-btn>
// //             <span className="one"></span>
// //             <span className="two"></span>
// //             <span className="three"></span>
// //           </button>
// //         );
// //       };
      
// // //Main.js


// // const toggleTheme = () => {
// //   setIsThemeBtnActive(!isThemeBtnActive);

// //   if (!isThemeBtnActive) {
// //     document.body.classList.remove("dark_theme");
// //     document.body.classList.add("light_theme");
// //     localStorage.setItem("theme", "light_theme");
// //   } else {
// //     document.body.classList.add("dark_theme");
// //     document.body.classList.remove("light_theme");
// //     localStorage.setItem("theme", "dark_theme");
// //   }
// // };

// // useEffect(() => {
// //   const savedTheme = localStorage.getItem("theme");

// //   if (savedTheme === "light_theme") {
// //     setIsThemeBtnActive(true);
// //     document.body.classList.remove("dark_theme");
// //     document.body.classList.add("light_theme");
// //   } else {
// //     setIsThemeBtnActive(false);
// //     document.body.classList.remove("light_theme");
// //     document.body.classList.add("dark_theme");
// //   }
// // }, []);

// // const handleNavToggle = () => {
// //     setNavMenuVisible(!navMenuVisible);
// //   };
//   return (
//     <div>
//          {/* <Button onClick={toggleTheme} ariaLabel="Change Theme" title="Change Theme" themeBtn={isThemeBtnActive} iconClass="icon" />
//       {/* Add other components and buttons as needed */}
//       {/* <NavBarToggle onClick={handleNavToggle} /> */} 
//     </div>
//   )
}

export default NavBarToggle