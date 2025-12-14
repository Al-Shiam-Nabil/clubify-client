import React from "react";
import useAuthHook from "../Hooks/useAuthHook";
import { Navigate } from "react-router";
import LoadingComponent from "../Components/Shared/Loading/LoadingComponent";




const PublicRoute = ({ children }) => {
  const { loading, user } = useAuthHook();

  if (loading) {
    return <LoadingComponent></LoadingComponent>
  }

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default PublicRoute;
