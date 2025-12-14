import React from "react";
import useAuthHook from "./useAuthHook";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiossecure";
import LoadingComponent from "../Components/Shared/Loading/LoadingComponent";

const useRoleHook = () => {
  const axiosSecure = useAxiosSecure();
  const { user} = useAuthHook();


  const { data:role='user', isLoading: roleLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}/role`);
      return res?.data?.role || 'user';
    },
  });

//   if (loading || roleLoading) {
//     return <LoadingComponent></LoadingComponent>;
//   }

  return {role,roleLoading}
};

export default useRoleHook;
