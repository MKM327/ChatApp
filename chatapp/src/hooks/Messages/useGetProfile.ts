import { useContext, useEffect, useState } from "react";
import useAuthContext from "../App/useAuthContext";
import { BASE_URL } from "@/lib/exports";

export interface Profile {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    isOnline: string;
    email: string;
    lastSeen: string;
}

export default  function useGetProfile() {
    const [profile, setProfile] = useState<Profile>();
    const { userId } = useAuthContext();
    useEffect(() => {
        fetchProfile();
    }, []);
    async function fetchProfile() {

        const response = await fetch(BASE_URL + "profile/get/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        setProfile(data);
    }
    return { profile };
}
