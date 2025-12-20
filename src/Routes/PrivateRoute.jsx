import React from "react";
import useAuthHook from "../Hooks/useAuthHook";
import LoadingComponent from "../Components/Shared/Loading/LoadingComponent";
import { Navigate, useLocation } from "react-router";
import DashboardLoading from "../Components/Shared/Loading/DashboardLoading";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuthHook();

  const location=useLocation()
console.log(location)
  if (loading) {
    return <DashboardLoading></DashboardLoading>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
