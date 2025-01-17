import React from "react";
import "./register.style.css";
import GoogleButton from "react-google-button";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <h1 className="title">HouseArrive</h1>
          <p className="under-title">
            For the full experience, <span>register</span>
          </p>
        </div>
        <div className="register-form-container">
          <form className="register-form">
            <label for="fname" className="form-label">
              Full Name
            </label>
            <input
              placeholder="Name"
              type="text"
              id="fname"
              name="fname"
            ></input>
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
            <input className="submit-button" type="submit" value="Register" />
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

export default RegisterPage;
