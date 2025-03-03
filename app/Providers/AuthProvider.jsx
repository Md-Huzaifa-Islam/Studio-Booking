import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { AuthContext } from "../Contexts/Context";
import useAuth from "../Hooks/Custom";

const provider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const auth = useAuth();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign in with email and password
  const SignInEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignUpEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Gmail
  const SingInGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Sign out
  const signout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer for authentication state changes
  useEffect(() => {
    const disconnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => disconnect();
  }, []); // Empty dependency array, only runs once on mount

  const values = {
    user,
    loading,
    SignInEmail,
    SingInGmail,
    SignUpEmail,
    signout,
    setUser,
    setLoading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
