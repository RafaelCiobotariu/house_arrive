import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LoginPage from "./components/login/login.component";
import RegisterPage from "./components/register/register.component";
import HomePage from "./components/homepage/homepage.component";
import Mapview from "./components/mapview/mapview.component";
import AddLocation from "./components/addLocation/addLocation.component";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import NotFound from "./components/notFound/notFound.component";
import Navbar from "./components/navbar/navbar.component";
import "./App.css";

function Logout() {
  localStorage.removeItem("token");
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <RegisterPage />;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/map" element={<Mapview />} />
          <Route
            path="/add/location"
            element={
              <ProtectedRoute>
                <AddLocation />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
