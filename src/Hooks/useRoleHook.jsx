import React from "react";
import useAuthHook from "./useAuthHook";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiossecure";
import LoadingComponent from "../Components/Shared/Loading/LoadingComponent";

const useRoleHook = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuthHook();
  const { data, isLoading: roleLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      return res.data;
    },
  });

  if (loading || roleLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  return data?.role;
};

export default useRoleHook;
