import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            return () => {
                return unsubcribe();
            }
        })
    }, [])
    const [loading, setLoading] = useState(true);
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
