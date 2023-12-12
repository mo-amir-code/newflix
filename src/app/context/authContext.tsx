"use client";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext({});

type User = {
  user: any,
  isLoggedIn: boolean
}

const AuthProvider = ({ children }: any) => {
  const initialUser = {
    user: null,
    isLoggedIn: false,
  };
  const [user, setUser] = useState<User>(initialUser);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((userState) => {
      // console.log(userState);
      if (userState) {
        setUser({ user: useState, isLoggedIn: true })
      } else {
        setUser({ user: useState, isLoggedIn: false })
      }
    })
    return subscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
