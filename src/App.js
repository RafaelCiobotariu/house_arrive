import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
// import "./App.css";
import LoginPage from "./components/login/login.component";
import RegisterPage from "./components/register/register.component";
import HomePage from "./components/homepage/homepage.component";
import Mapviewer from "./components/mapviewer/mapviewer.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/map" element={<Mapviewer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
