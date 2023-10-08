import { authContext } from "@/contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import useAuthContext from "../App/useAuthContext";

export interface Profile {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    isOnline: string;
    email: string;
    lastSeen: string;
}
export default function useGetProfile(): Profile {
    const [profile, setProfile] = useState<Profile>();
    const { accessToken, userId } = useAuthContext();
    const BaseUrl = "http://localhost:6543/";
    useEffect(() => {
        getProfile();
    }, [])

    const getProfile = async () => {
        const response = await fetch(BaseUrl + "profile/get/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        });
        const data = await response.json();
        setProfile(data);
    }
    if (profile == null)
        return {} as Profile;
    return profile;
}