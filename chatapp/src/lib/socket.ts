import { io } from "socket.io-client";
import { getSession } from "next-auth/react";

export const socket = io("ws://localhost:6543/chat", {
    autoConnect: false
});