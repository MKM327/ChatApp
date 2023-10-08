"use client";

import useGetProfile from "@/hooks/Messages/useGetProfile";
import Message from "./Message";

export default function Messages() {
  return (
    <div className="flex flex-col h-full gap-2">
      <div className="pl-4">
        <h4 className="text-white font-medium">Messages</h4>
      </div>
      <div className="overflow-y-scroll scroll-smooth flex-1 basis-10">
        <Message />
      </div>
    </div>
  );
}
