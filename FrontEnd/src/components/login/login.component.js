import React, { useState } from "react";
import "./login.style.css";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
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
          <form className="login-form" onSubmit={handleSubmit}>
            <label for="email" className="form-label">
              E-mail
            </label>
            <input
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label for="password" className="form-label">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
