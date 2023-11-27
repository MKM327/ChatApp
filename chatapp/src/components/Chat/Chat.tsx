import { BASE_URL, conversationFetcher, fetcher } from "@/lib/exports";
import useSWR from "swr";
export default function Chat() {
  const { data } = useSWR(
    `${BASE_URL}message/Conversation?page=1&limit=10&userId=1&receiverId=2`,
    conversationFetcher
  );
  console.log("data", data);
  return (
    <div className="p-3 bg-secondary-color flex flex-col gap-5 overflow-y-scroll flex-1">
      <div className="self-start">
        <div
          id="coming-message"
          className="bg-primary-color rounded-3xl p-3 text-text-color rounded-tl-none w-fit max-w-[250px]"
        >
          Lorem lipsum wow works really interesting
        </div>
      </div>
      <div className="self-end">
        <div
          id="sent-message"
          className="bg-sent-message-color rounded-3xl p-3 text-primary-color rounded-tr-none w-fit max-w-[250px]"
        >
          Lorem lipsum wow works really interesting
        </div>
      </div>
      <div className="self-start">
        <div
          id="coming-message"
          className="bg-primary-color rounded-3xl p-3 text-text-color rounded-tl-none w-fit max-w-[250px]"
        >
          Lorem lipsum wow works really interesting
        </div>
      </div>
      <div className="self-end">
        <div
          id="sent-message"
          className="bg-sent-message-color rounded-3xl p-3 font-semibold text-primary-color rounded-tr-none w-fit max-w-[250px]"
        >
          Lorem lipsum wow works really interesting
        </div>
      </div>
      <div className="self-end">
        <div
          id="sent-message"
          className="bg-sent-message-color rounded-3xl font-semibold p-3 text-primary-color rounded-tr-none w-fit max-w-[250px]"
        >
          Lorem lipsum wow works really interesting
        </div>
      </div>
      <div className="self-end">
        <div
          id="sent-message"
          className="bg-sent-message-color rounded-3xl font-semibold p-3 text-primary-color rounded-tr-none w-fit max-w-[250px]"
        >
          Lorem lipsum wow works really interesting
        </div>
      </div>
    </div>
  );
}
