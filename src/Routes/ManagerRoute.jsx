import React from 'react';
import useRoleHook from '../Hooks/useRoleHook';
import { Navigate } from 'react-router';
import LoadingComponent from '../Components/Shared/Loading/LoadingComponent';

const ManagerRoute = ({children}) => {
    const { role, roleLoading } = useRoleHook();

  if (roleLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  if (role !== "manager") {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default ManagerRoute;