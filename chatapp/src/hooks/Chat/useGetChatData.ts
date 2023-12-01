import { BASE_URL, fetcher } from "@/lib/exports";
import { useParams } from "next/navigation";
import useSWR from "swr";
interface IChatData {
    firstName: string,
    lastName: string,
    isOnline: boolean,
    profilePicture: string,
}
export default function useGetChatData() {
    const { userId } = useParams();
    const { data, error, isLoading } = useSWR<IChatData, Error>(
        `${BASE_URL}profile/chatProfile/${userId}`
        , (url: string) => fetcher(url, "GET"));
    return { data, error, isLoading }
}