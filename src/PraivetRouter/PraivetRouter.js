import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

export const PrivateRouter = ({ children }) => {
  // Dependencies call
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  // conditional loader
  if (loading) {
    return <h1 className=" text-center text-5xl">Loading.......</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};
