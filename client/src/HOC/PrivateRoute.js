import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isAuth, token } = useSelector((state) => state.auth);

  if (isAuth && token) return children;
  else return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
