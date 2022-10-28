import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    

    const GoogleAuth = Provider => {
        setLoading(true);
        return signInWithPopup(auth, Provider);
    }

    const GithubAuth = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const emailAndPasswordAuth = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }
    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOur = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const Authinfo = { GithubAuth, loading, user, GoogleAuth, emailAndPasswordAuth, logOur, singIn}

    return (
        <div>
            <AuthContext.Provider value={Authinfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;