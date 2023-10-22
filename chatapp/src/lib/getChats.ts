import getAccessToken from "@/hooks/Navbar/useGetUser";
export interface IChat {
    id: number;
    firstName: string;
    isOnline: boolean;
    lastMessage: string;
    MessageDate: string;
}
export default async function getChats(): Promise<IChat[]> {
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
    return data;
}
