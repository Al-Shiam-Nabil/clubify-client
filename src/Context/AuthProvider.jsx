import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../FirebaseConfig/FirebaseConfig";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (updatedInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedInfo);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user)

  const logOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    googleLogin,
    loading,
    setLoading,
    logOutUser,
    registerUser,
    updateUserInfo,
    loginUser,
    user
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
