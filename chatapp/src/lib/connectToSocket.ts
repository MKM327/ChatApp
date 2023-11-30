import getAccessToken from "@/hooks/Navbar/useGetUser";
import { io } from "socket.io-client";

export default async function connectToSocket() {
    const {userId} = await getSession();
    const socket = io("ws://localhost:6543/chat", {
        query: {
            id: userId,
        },
        timeout: 10000,
    });
    socket.on("connect", () => {
        console.log("connected to socket");
        socket.emit("message", "hello");
    });
    socket.on("disconnect", () => {
        console.log("disconnected");
    });
    socket.on("test", (data) => {
        console.log(data);
    });
}