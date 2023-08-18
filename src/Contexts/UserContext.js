import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext=createContext();
const provider = new GoogleAuthProvider();
const auth=getAuth(app);

const UserContext = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const logInViaEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const googleLog=()=>{
        return signInWithPopup(auth, provider);
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const profileUpdate=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unSubscribe();
    },[])
    const authInfo={user,logInViaEmail,createUser,profileUpdate,loading,logOut,googleLog};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;