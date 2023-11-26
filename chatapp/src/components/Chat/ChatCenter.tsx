import useGetChatData from "@/hooks/Chat/useGetChatData";
import MyImage from "../MyImage";
import Chat from "./Chat";
import ChatterCard from "./ChatterCard/ChatterCard";
import SendMessage from "./SendMessage";
interface ChatCenterProps {
  userId: string;
}

function ChatterInfo() {
  return (
    <div className="flex items-center justify-between pl-5 pt-3 pr-5 pb-5 border-b border-text-color">
      <div className="flex gap-2 items-center">
        <div className="bg-purple-500 rounded-full aspect-square w-10 h-10 flex items-center justify-center">
          <i className="fa-solid fa-id-card text-white"></i>
        </div>
        <div>
          <div>
            <h4 className="text-white font-medium">Another good name</h4>
          </div>
          <div>
            <span className="text-sent-message-color text-sm">Typing...</span>
          </div>
        </div>
      </div>
      <div className="w-10 rounded-full border border-text-color flex items-center justify-center aspect-square">
        <i className="fa-solid fa-ellipsis-vertical text-white"></i>
      </div>
    </div>
  );
}
export default async function ChatCenter({ userId }: ChatCenterProps) {
  useGetChatData();
  return (
    <section className="flex-1 flex">
      <div className="flex-1 overflow-hidden flex flex-col">
        <ChatterInfo />
        <Chat />
        <SendMessage />
      </div>
      <ChatterCard />
    </section>
  );
}
