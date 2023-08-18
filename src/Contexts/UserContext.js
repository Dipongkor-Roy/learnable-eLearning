import React, { createContext, useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AuthContext=createContext();

const auth=getAuth(app);

const UserContext = ({children}) => {
    const [user,setUser]=useState(null);

    const logInViaEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo={user,logInViaEmail};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;