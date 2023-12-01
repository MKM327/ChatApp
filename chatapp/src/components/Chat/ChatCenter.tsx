import useGetChatData from "@/hooks/Chat/useGetChatData";
import MyImage from "../MyImage";
import Chat from "./Chat";
import ChatterCard from "./ChatterCard/ChatterCard";
import SendMessage from "./SendMessage";
import Loading from "../Loading";
import { useManageCardState } from "@/hooks/Chat/useManageCardState";
interface ChatCenterProps {
  userId: string;
}

function ChatterInfo({ swapState }: { swapState: () => void }) {
  const { data } = useGetChatData();
  // useCreateRoom();
  return (
    <div className="flex items-center justify-between pl-5 pt-3 pr-5 pb-5 border-b border-text-color">
      <div className="flex gap-2 items-center">
        <div className="bg-purple-500 rounded-full aspect-square w-10 h-10 flex items-center justify-center ">
          <i className="fa-solid fa-id-card text-white"></i>
        </div>
        <div className="cursor-pointer" onClick={() => swapState()}>
          <div>
            <h4 className="text-white font-medium">{data?.firstName}</h4>
          </div>
          <div>
            <span className="text-sent-message-color text-sm">typing</span>
          </div>
        </div>
      </div>
      <div className="w-10 rounded-full border border-text-color flex items-center justify-center aspect-square">
        <i className="fa-solid fa-ellipsis-vertical text-white"></i>
      </div>
    </div>
  );
}
export default function ChatCenter({ userId }: ChatCenterProps) {
  const { isLoading } = useGetChatData();
  const { cardState, swapState } = useManageCardState();
  return isLoading ? (
    <Loading />
  ) : (
    <section className="flex-1 flex">
      <div className="flex-1 overflow-hidden flex flex-col">
        <ChatterInfo swapState={swapState} />
        <Chat />
        <SendMessage />
      </div>
      {cardState == "OPEN" && <ChatterCard />}
    </section>
  );
}
