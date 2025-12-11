import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const useAuthHook = () => {
  const  authInfo  = useContext(AuthContext);

  return authInfo;
};

export default useAuthHook;
