import React from "react";
import useAuthHook from "../Hooks/useAuthHook";
import LoadingComponent from "../Components/Shared/Loading/LOadingComponent";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuthHook();

  if (loading) {
    return <LoadingComponent></LoadingComponent>;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
