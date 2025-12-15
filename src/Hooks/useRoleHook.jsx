import React from "react";
import useAuthHook from "./useAuthHook";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiossecure";
import LoadingComponent from "../Components/Shared/Loading/LoadingComponent";

const useRoleHook = () => {
  const axiosSecure = useAxiosSecure();
  const { user} = useAuthHook();


  const { data:role='member', isLoading: roleLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}/role`);
      return res?.data?.role || 'member';
    },
  });



  return {role,roleLoading}
};

export default useRoleHook;
