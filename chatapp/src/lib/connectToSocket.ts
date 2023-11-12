import getAccessToken from "@/hooks/Navbar/useGetUser";
import { io } from "socket.io-client";

export default async function connectToSocket() {
    const { accessToken, userId } = await getAccessToken();
    const socket = io("http://localhost:6543/chat", {
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
        console.log("here");
        console.log(data);
    });
}