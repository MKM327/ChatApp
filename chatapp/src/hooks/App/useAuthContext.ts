import { useContext } from "react";
import { AuthContextProps, authContext } from "@/contexts/AuthContext"
import useGetAccessToken from "../Navbar/useGetUser";
export default function useAuthContext(): AuthContextProps {
    let context = useContext(authContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }
    if (context === null) {
        return {
            accessToken: userData?.accessToken || "",
            userId: userData?.userId || -1,
        }
    }
    return context;
}