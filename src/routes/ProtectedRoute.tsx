import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const [decodedToken, setDecodedToken] = useState<any>(null);
  const cookies = new Cookies();
  const accessToken = cookies.get("token");

  useEffect(() => {
    if (accessToken) {
      const decoded = jwtDecode(accessToken);
      setDecodedToken(decoded);
    }
  }, [accessToken]);

  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  return decodedToken && allowedRoles.includes(decodedToken.role) ? (
    <Outlet />
  ) : (
    <div> Protected</div>
  );
};

export default ProtectedRoute;
