import { useGetChatContext } from "@/hooks/Chat/useGetChatContext";
import useGetChatData from "@/hooks/Chat/useGetChatData";
import { useHandleSendMessage } from "@/hooks/Chat/useHandleSendMessage";

export default function SendMessage() {
  const { data } = useGetChatData();
  const { handleSubmit, setMessage } = useGetChatContext();
  return (
    <form
      className="flex p-4 justify-between gap-2 items-center"
      onSubmit={handleSubmit}
    >
      <div>
        <i className="fa-solid fa-paperclip text-white cursor-pointer"></i>
      </div>
      <div className="flex-1">
        <div className="relative">
          <input
            type="text"
            name=""
            id=""
            className="w-full rounded-lg bg-[rgb(32,36,38)] pr-7 outline-none placeholder:text-text-color p-2 focus:text-text-color"
            placeholder={`Send message to ${data?.firstName}`}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="absolute top-2 right-2 flex justify-between gap-2 ">
            <button className="material-symbols-outlined cursor-pointer">
              send
            </button>
            <i className="fa-regular fa-face-laugh-beam text-white self-center"></i>
          </div>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-microphone text-white"></i>
      </div>
    </form>
  );
}
