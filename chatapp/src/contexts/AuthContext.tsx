"use client"
import useGetAccessToken from "@/hooks/Navbar/useGetUser";
import { createContext, useState } from "react";
interface AuthContextProps {
    accessToken: string;
}
const authContext = createContext({} as AuthContextProps);
async function AuthProvider({ children }: any) {
    const accessToken = await useGetAccessToken();
    document.cookie = accessToken;
    return (
        <authContext.Provider value={{
            accessToken: document.cookie
        }}>
            {children}
        </authContext.Provider>
    )
}

export { authContext, AuthProvider };