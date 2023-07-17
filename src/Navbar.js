import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <nav>
      <div className="navbar">
        <img src="./images/nrglogo.png" alt="NRG Logo" style={{ width: 40 }} />
        <div className="navbarBody">
          <div className="navbarContainer">
            <ul className={`navbarList ${isListVisible ? "visible" : ""}`}>
              <li>
                <p>Music</p>
              </li>
              <li>
                <p>Events</p>
              </li>
              <li>
                <p>Socials</p>
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
