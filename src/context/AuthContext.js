import { createContext,  useEffect, useState } from "react";
import { auth } from "../config/firebase";

import User from "firebase";


export const AuthContext = createContext ();


export const AuthContextProvider =  ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      user && setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
