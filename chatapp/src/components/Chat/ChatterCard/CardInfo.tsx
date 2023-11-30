import useGetChatData from "@/hooks/Chat/useGetChatData";

export default function CardInfo() {
  const { data } = useGetChatData();

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="bg-purple-500 rounded-full aspect-square w-24 flex items-center justify-center">
          <i className="fa-solid fa-id-card text-white text-3xl"></i>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white">{data?.firstName}</h3>
          <span className="text-sent-message-color">Online</span>
        </div>
      </div>
    </div>
  );
}
