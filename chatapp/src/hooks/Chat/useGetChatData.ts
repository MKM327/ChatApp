import { BASE_URL, fetcher } from "@/lib/exports";
import { getSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";
interface IChatData {
    firstName: string,
    lastName: string,
    isOnline: boolean,
    profilePicture: string,
}
export default function useGetChatData() {
    const { userId } = useParams();
    const { data, error, isLoading } = useSWR<IChatData, any>(`${BASE_URL}profile/chatProfile/${userId}`, fetcher)
    useEffect(() => {

    }, [userId])
    return { data, error, isLoading }
}