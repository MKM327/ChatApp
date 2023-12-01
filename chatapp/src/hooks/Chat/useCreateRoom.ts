import { Socket, io } from "socket.io-client";
import { getSession } from "next-auth/react";

export function useCreateRoom() {
    // const createRoom = async () => {
    //     const { userId } = await getSession();
    //     const socket = io("ws://localhost:6543/chat", {
    //         query: {
    //             id: userId,
    //         },
    //         timeout: 10000,
    //     });
    //     socket.on("connect", () => {
    //         console.log("connected to socket");
    //         socket.emit("message", "hello");
    //     });
    // }
}