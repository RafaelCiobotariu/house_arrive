import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../../utils/api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../utils/constants";
import { useEffect, useState } from "react";
import React from "react";

function ProtectedRoute({ children }) {
  const [isAutorized, setIsAutorized] = useState(false);
  useEffect(() => {
    auth().catch(() => setIsAutorized(false));
  }, []);

  const refreshTOken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAutorized(true);
      } else {
        setIsAutorized(false);
      }
    } catch (error) {
      setIsAutorized(false);
      console.log(error);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAutorized(false);
      return;
    }
    const decodedToken = jwtDecode(token);
    const tokenExpiration = decodedToken.exp;
    const now = Date.now() / 1000;
    if (tokenExpiration < now) {
      await refreshTOken();
    } else {
      setIsAutorized(true);
    }
  };

  if (isAutorized === null) {
    return <div>Loading...</div>;
  }

  return isAutorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
