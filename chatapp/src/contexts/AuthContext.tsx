"use client";
import useGetAccessToken from "@/hooks/Navbar/useGetUser";
import { getSession } from "next-auth/react";
import { createContext, useState } from "react";
export interface AuthContextProps {
  accessToken: string;
  userId: number;
}
const authContext = createContext<AuthContextProps | null>(null);
function AuthProvider({ children }: any) {
  const session = getSession();
  if(session === undefined) return null;
  if (!userData) return null;
  return (
    <authContext.Provider
      value={{
        accessToken: userData.accessToken,
        userId: userData.userId,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };
