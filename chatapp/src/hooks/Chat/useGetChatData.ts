import { useParams } from "next/navigation";

export default function useGetChatData() {
    const {userId} = useParams();

}