import Navbar from "../Navbar/Navbar";
import MessageCenter from "../Messages/MessageCenter";
import ChatCenter from "../Chat/ChatCenter";
import CenterWrapper from "./CenterWrapper";
import { getServerSession } from "next-auth/next";
export default async function App() {
  // connectToSocket();
  const session = getServerSession();
  console.log(session);
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
