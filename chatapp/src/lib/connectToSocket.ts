import { io } from "socket.io-client";

export default function connectToSocket() {
    // console.log("connecting to socket");
    const socket = io("http://localhost:6543/chat", {
        query: {
            id: 3,
        },
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