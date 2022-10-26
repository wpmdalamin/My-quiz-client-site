import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const GoogleAuth = Provider => {
        return signInWithPopup(auth, Provider);
    }
    const emailAndPasswordAuth = (email, password) => {
        return createUserWithEmailAndPassword( auth, email, password);
    }
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOur = () => {
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const Authinfo = {user , GoogleAuth, emailAndPasswordAuth, logOur, singIn}

    return (
        <div>
            <AuthContext.Provider value={Authinfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;