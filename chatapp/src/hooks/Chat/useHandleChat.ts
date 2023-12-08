import { getSession, useSession } from "next-auth/react";
import { socket } from "@/lib/socket";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export function useHandleChat() {
    const { userId } = useParams();
    const { data } = useSession();
    const senderId = data?.userId;
    const [isTyping, setIsTyping] = useState(false);
    const [message, setMessage] = useState("");
    useEffect(() => {
        socket.connect();
        async function connectToRoom() {
            socket.on("receiveMessage", (data) => {
                console.log("received message", data);
            }
            );
            const room = senderId > parseInt(userId as string) ? `${userId}-${senderId}` : `${senderId}-${userId}`;
            socket.emit("createRoom", room);
        }
        connectToRoom().catch((e) => console.log(e));
        return () => {
            socket.off("receiveMessage");
        }
    }, [senderId, userId])
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("sending message", message)
        socket.emit("sendMessage",
            {
                message: message,
                receiverId: parseInt(userId as string),
                senderId: senderId,
                roomId: senderId > parseInt(userId as string) ?
                    `${userId}-${senderId}` : `${senderId}-${userId}`
            });
    }
    return { isTyping, setIsTyping, message, setMessage, handleSubmit }
}