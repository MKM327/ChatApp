import { useContext, useEffect, useState } from "react";
import useAuthContext from "../App/useAuthContext";
import { BASE_URL } from "@/lib/exports";
import { getSession } from "next-auth/react";

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
    useEffect(() => {
        fetchProfile();
    }, []);
    async function fetchProfile() {
        const { userId, access_token } = await getSession();
        console.log(userId, access_token)
        const response = await fetch(BASE_URL + "profile/get/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            }
        });
        const data = await response.json();
        setProfile(data);
    }

    return { profile };
}
