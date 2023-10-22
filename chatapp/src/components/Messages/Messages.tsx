import useGetProfile from "@/hooks/Messages/getProfile";
import Message from "./Message";
import getChats from "@/lib/getChats";

export default async function Messages() {
  const chats = await getChats();
  return (
    <div className="flex flex-col h-full gap-2">
      <div className="pl-4">
        <h4 className="text-white font-medium">Messages</h4>
      </div>
      <div className="overflow-y-scroll scroll-smooth flex-1 basis-10">
        {chats.map((chat) => {
          return <Message key={chat.id} chat={chat} />;
        })}
      </div>
    </div>
  );
}
