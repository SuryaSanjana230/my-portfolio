import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
export const NavBar = () => {
  useEffect(() => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    const handleToggle = () => {
      navbarLinks.classList.toggle('active');
    };

    toggleButton.addEventListener('click', handleToggle);


    return () => {
      toggleButton.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <>
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="brand-title"><img src="./images/sanjanalogo.jpg" className="logo" alt=""/></div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li> <Link className="linkstyle" to="/#About">Home</Link></li>
            <li>  <Link className="linkstyle" to="/#Programs">About Me</Link></li>
            <li><Link className="linkstyle" to="/#Admissions">Projects</Link></li>
            <li><Link className="linkstyle" to="/gallery" id="linkstyle1">Skills</Link></li>
            <li>
            <Link to='/contact'>
            <button  type="button" id="buttonstyle">
                    Contact Me
                  </button>
                  </Link></li>
          </ul>
        </div>
      </nav>
      </div>
   <Outlet/>
 
    </>
  );
};
