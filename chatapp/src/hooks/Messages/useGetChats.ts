import getAccessToken from "@/hooks/Navbar/useGetUser";
import { useEffect, useState } from "react";
export interface IChat {
    id: number;
    firstName: string;
    isOnline: boolean;
    lastMessage: string;
    MessageDate: string;
}

export default function useGetChats(): {chats: IChat[], loading: boolean} { // {Ç} {
    const [chats, setChats] = useState<IChat[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        getChats();
    }, [])
    async function getChats() {
        setLoading(true);
        let { accessToken, userId } = await getAccessToken();
        const baseUrl = "http://localhost:6543/"
        const response = await fetch(baseUrl + "message/LastChatMessages/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        });
        const data = await response.json();
        setChats(data);
        setLoading(false);
    }
    return { chats, loading };
}
