import React from 'react';
import useRoleHook from '../Hooks/useRoleHook';
import LoadingComponent from '../Components/Shared/Loading/LoadingComponent';
import { Navigate, useLocation } from 'react-router';

const MemberRoute = ({children}) => {
 const { role, roleLoading } = useRoleHook();


 const location=useLocation()


  if (roleLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  if (role !== "member") {

    return <Navigate state={location?.pathname} to="/"></Navigate>;
  }
  return children;
};

export default MemberRoute;