import React, { useState } from "react";
import "./register.style.css";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
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
            <label for="username" className="form-label">
              Username
            </label>
            <input
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label for="email" className="form-label">
              E-mail
            </label>
            <input
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label for="password" className="form-label">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
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
