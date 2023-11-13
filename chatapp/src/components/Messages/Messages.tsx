"use client";

import useGetChats from "@/hooks/Messages/useGetChats";
import Message from "./Message";
export default function Messages() {
  const { chats, loading } = useGetChats();
  return (
    !loading && (
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
    )
  );
}
