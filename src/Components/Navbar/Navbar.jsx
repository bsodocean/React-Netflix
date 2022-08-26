import React from "react";
import "./Navbar.css";
import logo from "../../Netflix-Logo.wine.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/auth";

export default function Navbar() {
  const [stickyClass, setStickyClass] = React.useState(""); // useState for sticky navbar

  const { user, logOut } = UserAuth();
  const Navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
      {user?.email ? (
        <div className="login-container">
          <button
            onClick={handleLogOut}
            className="logout-btn cta-btn wobble-vertical-on-hover"
          >
            Logout
          </button>
          <Link to="/account">
            <button className="account-button cta-btn wobble-vertical-on-hover">
              User
            </button>
          </Link>
        </div>
      ) : (
        <div className="login-container">
          <Link to="/signup">
            <button className="sign-btn cta-btn wobble-vertical-on-hover">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="sign-in-btn cta-btn wobble-vertical-on-hover">
              Log in
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
