import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Classes from "../Styles/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className={Classes.Navbar}>
      <div className={Classes.brand}>
        <h1 className={Classes.NavLogo} onClick={() => navigate("/")}>
          Manzil<span>Yatra</span>
        </h1>

        <div className={Classes.hamburger}>
          {toggle ? (
            <FontAwesomeIcon
              icon={faClose}
              className={Classes.menuIcon}
              onClick={() => setToggle(false)}
            />
          ) : (
            <FontAwesomeIcon
              className={Classes.menuIcon}
              icon={faBars}
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </div>

      <ul className={toggle ? Classes.open : ""}>
        <li>
          <a href="#hero" className={Classes.active}>
            home
          </a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#recommendation">places</a>
        </li>
        <li>
          <a href="#testimonials">testimonials</a>
        </li>
      </ul>

      <button
        className={Classes.NavBtn}
        onClick={() => navigate("/login")} // Navigate to Login page
      >
        SignUp
      </button>
    </nav>
  );
}

export default NavBar;
