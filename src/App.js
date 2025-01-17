import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
// import "./App.css";
import LoginPage from "./components/login/login.component";
import RegisterPage from "./components/register/register.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
