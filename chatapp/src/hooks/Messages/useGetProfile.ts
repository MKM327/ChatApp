import { authContext } from "@/contexts/AuthContext";
import { useContext, useState } from "react";

interface  Profile {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    isOnline: string;
    email: string;
    lastSeen: string;
}    
export default function useGetProfile()
{
    const [profile , setProfile] = useState<Profile | null>(null);
    const {username} = useContext(authContext);

}