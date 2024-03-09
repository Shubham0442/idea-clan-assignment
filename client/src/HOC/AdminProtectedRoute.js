import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { user, isAuth, token } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isAuth && token && user?.role === "admin") {
    return children;
  } else return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminProtectedRoute;
