import React, { createContext, useEffect, useState } from 'react';
import { app } from './firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const contextProvider = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const userCreate = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth)
    }
    const userLogout = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authInfo = {
        userCreate,
        userLogin,
        googleLogin,
        userLogout,
        user, loading,
    }
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;