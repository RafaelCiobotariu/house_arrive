import React, { useState } from "react";
import "./register.style.css";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState("buyer");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("api/user/register/", {
        username,
        email,
        password,
        firstName,
        lastName,
        userType,
      });
      navigate("/login");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

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
          <form className="register-form" onSubmit={handleSubmit}>
            <label for="username" className="form-label ">
              Username
            </label>
            <input
              className="form-input "
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label for="firstName" className="form-label ">
              First name
            </label>
            <input
              className="form-input "
              placeholder="First name"
              type="text"
              id="firstName"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label for="firstName" className="form-label ">
              Last name
            </label>
            <input
              className="form-input "
              placeholder="Last name"
              type="text"
              id="lastName"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label for="userType" className="form-label ">
              Why are you here for?
            </label>
            <select
              className="form-input"
              id="userType"
              name="userType"
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="buyer">I want to buy</option>
              <option value="seller">I want to sell</option>
            </select>
            <label for="email" className="form-label ">
              E-mail
            </label>
            <input
              className="form-input "
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label for="password" className="form-label ">
              Password
            </label>
            <input
              className="form-input "
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input className="submit-button" type="submit" value="Register" />
          </form>
        </div>
        <div className="google-button">
          <GoogleButton label="Continue with Google" type="lights" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
