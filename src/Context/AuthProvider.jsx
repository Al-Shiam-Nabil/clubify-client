import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../FirebaseConfig/FirebaseConfig';

const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)

    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    const authInfo={
       googleLogin,
       loading,setLoading
    }
    return (
     <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;