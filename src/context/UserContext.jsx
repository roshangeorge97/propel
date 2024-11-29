import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store the user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the current user when auth state changes
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
