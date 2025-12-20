import React from "react";
import useAuthHook from "../Hooks/useAuthHook";
import { Navigate, useLocation, useNavigate } from "react-router";
import LoadingComponent from "../Components/Shared/Loading/LoadingComponent";

const PublicRoute = ({ children }) => {
  const { loading, user } = useAuthHook();
  const navigate = useNavigate();
  const location = useLocation();
  if (loading) {
    return <LoadingComponent></LoadingComponent>;
  }

  if (user) {
    navigate(location?.state || "/");
    return;
    // return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default PublicRoute;
