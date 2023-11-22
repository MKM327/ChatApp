"use client";
import Account from "./Account";
import OnlineFriends from "./OnlineFriends";
import Messages from "./Messages";
import getProfile from "@/hooks/Messages/useGetProfile";
export default function MessageCenter() {
  const { profile } = getProfile();
  return (
    <section className="flex flex-col border-r border-text-color items-center justify-center">
      <Account profile={profile} />
      <div className="flex flex-col w-full gap-2 flex-1 overflow-hidden">
        <div className="p-5">
          <input
            type="text"
            name=""
            className="w-full rounded-lg bg-[rgb(32,36,38)] outline-none placeholder:text-text-color p-2 focus:text-text-color"
            placeholder="Search or start a new chat..."
          />
        </div>
        <OnlineFriends />
        <Messages />
      </div>
    </section>
  );
}
