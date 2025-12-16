import React from "react";
import useRoleHook from "../Hooks/useRoleHook";
import { Navigate } from "react-router";
import LoadingComponent from "../Components/Shared/Loading/LoadingComponent";

const AdminRoute = ({ children }) => {
  const { role, roleLoading } = useRoleHook();

  if (roleLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  if (role !== "admin") {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default AdminRoute;
