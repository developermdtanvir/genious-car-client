import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // state declare
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (auth, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  // github login
  const githubLogin = () => {
    setLoading(true);
    const githubProvider = new GithubAuthProvider();

    return signInWithPopup(auth, githubProvider);
  };

  // check user and current user set user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => {
        return unsubscribe();
      };
    });
  }, [auth]);

  // create auth info object and set Auth Context Wrap Full application
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOutUser,
    githubLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
