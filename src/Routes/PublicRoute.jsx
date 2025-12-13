import React from "react";
import useAuthHook from "../Hooks/useAuthHook";
import { Navigate } from "react-router";

import LOadingComponent from "../Components/Shared/Loading/LOadingComponent";

const PublicRoute = ({ children }) => {
  const { loading, user } = useAuthHook();

  if (loading) {
    return (
      <LOadingComponent></LOadingComponent>
    );
  }

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default PublicRoute;
