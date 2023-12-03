import { getSession } from "next-auth/react";
import { socket } from "@/lib/socket";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export function useHandleChat() {
    const { userId } = useParams();
    const [isTyping, setIsTyping] = useState(false);
    const [message, setMessage] = useState("");
    useEffect(() => {
        async function connectToRoom() {
            socket.on("receiveMessage", (data) => {
                console.log("received message", data);
            }
            );
            const session = await getSession();
            if (session) {
                const currentId = session.userId;
                const room = currentId > parseInt(userId) ? `${userId}-${currentId}` : `${currentId}-${userId}`;
                console.log("creating room", room);
                socket.emit("createRoom", room);
            }
        }
        connectToRoom().catch((e) => console.log(e));
        return () => {
            socket.off("receiveMessage");
        }
    }, [])
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("SENDING");
        const { userId: senderId } = await getSession();
        socket.emit("sendMessage", { message: message, receiver: userId, senderId: senderId });
        console.log("SENT")
    }
    return { isTyping, setIsTyping, message, setMessage, handleSubmit }
}