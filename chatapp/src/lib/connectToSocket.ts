import getAccessToken from "@/hooks/Navbar/useGetUser";
import { io } from "socket.io-client";
import { getServerSession } from "next-auth";
import { socket } from "./socket";

export default async function connectToSocket(userId: number) {
    socket.connect();
    socket.emit("connectToServer", userId);
}