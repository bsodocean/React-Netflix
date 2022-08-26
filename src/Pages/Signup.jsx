import React from "react";
import "./Signup.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../Components/Context/auth";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  return (
    <>
      <div className="signup-container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/8bd75022-a9ee-4285-a23b-7b4b57f09a9f/CZ-en-20220808-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
          className="signup-img"
        />
        <div className="overlay"></div>
        <div className="signup-overlay">
          <div className="signup-content">
            <div className="sign-up-cnt">
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="inputs"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="inputs"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="sign-up-button">Sign up</button>
                <div className="links">
                  <p>
                    <input type="checkbox" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="redirect-login">
                  <Link className="link" to="/signin">
                    <span>Already Subscribed?</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
