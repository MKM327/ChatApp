import { BASE_URL, fetcher } from "@/lib/exports";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { Interface } from "readline";
import useSWR from "swr";
interface IMessage {
  id: string;
  sender: string;
  receiver: string;
  messageContent: string;
  createdAt: string;
  isRead: boolean;
}
type MessageType = "sent" | "coming";
interface MessageProps {
  type: MessageType;
  message: IMessage;
}
function Message({ type, message }: MessageProps) {
  const messageType = type === "sent" ? "self-end" : "self-start";
  const messageColor = type === "sent" ? "sent-message-color" : "primary-color";
  const textColor = type === "sent" ? "text-primary-color" : "text-text-color";
  return (
    <div className={messageType}>
      <div
        id="sent-message"
        className={`bg-${messageColor} rounded-3xl p-3 ${textColor} rounded-tr-none w-fit max-w-[250px]`}
      >
        {message.messageContent}
      </div>
    </div>
  );
}
export default function Chat() {
  const { userId } = useParams();
  const { data } = useSession();
  const { data: chat } = useSWR<IMessage[], any>(
    `${BASE_URL}message/Conversation?page=1&limit=10&userId=${data?.userId}&receiverId=${userId}`,
    (url: string) => fetcher(url, "GET")
  );
  return (
    <div className="p-3 bg-secondary-color flex flex-col gap-5 overflow-y-scroll flex-1">
      {chat?.map((message) => {
        return (
          <Message
            type={message.sender == data?.userId ? "sent" : "coming"}
            message={message}
            key={message.id}
          />
        );
      })}
    </div>
  );
}
