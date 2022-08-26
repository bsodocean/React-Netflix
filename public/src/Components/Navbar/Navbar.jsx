import React from "react";
import "./Navbar.css";
import logo from "../../Netflix-Logo.wine.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [stickyClass, setStickyClass] = React.useState(""); // useState for sticky navbar

  React.useEffect(() => {
    // Add sticky class when navbar on scroll
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // Check if window is scrolled more than 200px, add sticky-nav class else do not add class
      windowHeight > 200 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return (
    <div className={`navbar ${stickyClass}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} className="nav-logo" alt="" />
        </Link>
      </div>
      <div className="login-container">
        <Link to="/login">
          <button className="sign-btn cta-btn">Sign Up</button>
        </Link>
        <Link to="/signup">
          <button className="sign-in-btn cta-btn">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
