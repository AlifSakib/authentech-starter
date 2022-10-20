import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateDetails = (user) => {
    return updateProfile(auth.currentUser, {
      displayName: user,
    });
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curretUser) => {
      setUser(curretUser);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    createUser,
    updateDetails,
    verifyEmail,
    logOut,
    logInUser,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
