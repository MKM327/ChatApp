import getAccessToken from "@/hooks/Navbar/useGetUser";
import { io } from "socket.io-client";
import { getServerSession } from "next-auth";

export default async function connectToSocket() {
    const data = await getServerSession();
    console.log(data);
    const socket = io("ws://localhost:6543/chat", {
        query: {
            id: 1,
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