import { ChatContext } from "@/contexts/ChatContext";
import { useContext } from "react";

export function useGetChatContext() {
    const chatContext = useContext(ChatContext);
    if (!chatContext) {
        throw new Error('useGetChatContext must be used within a ChatProvider');
    }
    return chatContext;
}