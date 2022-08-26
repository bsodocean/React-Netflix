import React from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Components/Context/auth";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      Navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

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
              <h1>Sign In</h1>
              {error ? <p>{error}</p> : null}
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  className="inputs"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  className="inputs"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="sign-up-button">Log In</button>
                <div className="links">
                  <p>
                    <input type="checkbox" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="redirect-login">
                  <Link className="link" to="/signup">
                    <span>New to Netflix?</span>
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

export default Login;
