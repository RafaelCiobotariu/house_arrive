import React from "react";
import "./login.style.css";
import GoogleButton from "react-google-button";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="title">HouseArrive</h1>
          <p className="under-title">
            For the full experience, <span>log in</span>
          </p>
        </div>
        <div className="login-form-container">
          <form className="login-form">
            <label for="email" className="form-label">
              E-mail
            </label>
            <input
              placeholder="Email"
              type="text"
              id="email"
              name="email"
            ></input>
            <label for="password" className="form-label">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
            ></input>
            <input className="submit-button" type="submit" value="Connect" />
          </form>
        </div>
        <GoogleButton
          label="Continue with Google"
          type="lights"
          className="google-button"
        />
      </div>
    </div>
  );
};

export default LoginPage;
