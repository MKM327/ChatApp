import MyImage from "../MyImage";
import Navbar from "../Navbar/Navbar";
import useAuthContext from "@/hooks/App/useAuthContext";
import MessageCenter from "../Messages/MessageCenter";
import ChatCenter from "../Chat/ChatCenter";
import { cookies, headers } from "next/headers";
import getAccessToken from "@/hooks/Navbar/useGetUser";
import axios from "axios";
import connectToSocket from "@/lib/connectToSocket";
import CenterWrapper from "./CenterWrapper";
export default async function App() {
  // connectToSocket();
  return (
    <div className="bg-primary-color h-full w-full">
      <div className="w-11/12 m-auto h-full flex items-center">
        <div className="w-full h-4/5 rounded-lg bg-primary-color border flex border-text-color">
          <Navbar />
          <main className="flex-1 flex">
            <CenterWrapper>
              <MessageCenter />
              <ChatCenter />
            </CenterWrapper>
          </main>
        </div>
      </div>
    </div>
  );
}
