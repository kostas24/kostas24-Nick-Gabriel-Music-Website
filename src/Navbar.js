import React, { useState } from "react";
import "./navbar.css";

const Navbar = ({ musicSectionRef, socialSectionRef, eventsSectionRef }) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const scrollToMusicSection = () => {
    musicSectionRef.current.scrollIntoView({ behavior: "smooth" });
    toggleListVisibility();
  };

  const scrollToSocialSection = () => {
    socialSectionRef.current.scrollIntoView({ behavior: "smooth" });
    toggleListVisibility();
  };

  const scrollToEventsSection = () => {
    eventsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    toggleListVisibility();
  };

  return (
    <nav>
      <div className="navbar">
        <img
          src="./images/logowhite.png"
          alt="NRG Logo"
          className="gabrielLogo"
        />
        <div className="navbarBody">
          <div className="navbarContainer">
            <ul className={`navbarList ${isListVisible ? "visible" : ""}`}>
              <li>
                <p className="titles" onClick={scrollToMusicSection}>
                  Music
                </p>
              </li>
              <li>
                <p className="titles" onClick={scrollToEventsSection}>
                  Events
                </p>
              </li>
              <li>
                <p className="titles" onClick={scrollToSocialSection}>
                  Socials
                </p>
              </li>
            </ul>
          </div>
          <nav className="menu-icon" style={{ position: "fixed" }}>
            <div className="container">
              <input
                type="checkbox"
                id="checkbox1"
                className="checkbox1 visuallyHidden"
                checked={isListVisible}
                onChange={toggleListVisibility}
              />
              <label htmlFor="checkbox1">
                <div className="hamburger hamburger1">
                  <span className="bar bar1"></span>
                  <span className="bar bar2"></span>
                  <span className="bar bar3"></span>
                  <span className="bar bar4"></span>
                </div>
              </label>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
