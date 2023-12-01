import { useContext, useEffect, useState } from "react";
import useAuthContext from "../App/useAuthContext";
import { BASE_URL } from "@/lib/exports";
import { getSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
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
    const [profile, setProfile] = useState<Profile>({} as Profile);
    const router = useRouter();

    useEffect(() => {
        fetchProfile();
    }, []);
    async function fetchProfile() {
        const session = await getSession();
        console.log(session)
        if (!session) {
            router.push("api/auth/signin/credentials");
        }

        const response = await fetch(BASE_URL + "profile/get/" + session?.userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.accessToken}`,
            }
        });
        if (response.status === 403) {
            router.push("api/auth/signin/credentials");
        }
        const data = await response.json();
        setProfile(data);
    }

    return profile;
}
