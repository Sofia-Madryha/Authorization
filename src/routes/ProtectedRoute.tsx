import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const getAccessToken = () => {
  return cookies.get("token");
};

const isAuthenticated = () => {
  return !!getAccessToken();
};

const ProtectedRoute: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
