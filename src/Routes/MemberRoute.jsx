import React from 'react';
import useRoleHook from '../Hooks/useRoleHook';
import LoadingComponent from '../Components/Shared/Loading/LoadingComponent';
import { Navigate } from 'react-router';

const MemberRoute = ({children}) => {
 const { role, roleLoading } = useRoleHook();

  if (roleLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  if (role !== "member") {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default MemberRoute;