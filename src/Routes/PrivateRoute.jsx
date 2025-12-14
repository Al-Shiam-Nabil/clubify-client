import React from "react";
import useAuthHook from "../Hooks/useAuthHook";
import LoadingComponent from "../Components/Shared/Loading/LoadingComponent";
import { Navigate } from "react-router";
import DashboardLoading from "../Components/Shared/Loading/DashboardLoading";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuthHook();

  if (loading) {
    return <DashboardLoading></DashboardLoading>;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
