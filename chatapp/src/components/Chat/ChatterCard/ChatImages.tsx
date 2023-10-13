import CardImage from "./CardImage";

export default function ChatImages() {
  return (
    <div className="flex flex-col gap-4 basis-auto">
      <div className="flex justify-between pl-3">
        <div className="flex gap-2 text-sm items-center">
          <h4 className="text-lg text-white">Media</h4>
          <div>
            <span>14</span> <span>pictures</span>
          </div>
        </div>
        <div className="text-sent-message-color text-sm mr-3 underline underline-offset-2">
          View all
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 mx-5">
        <div className="grid grid-cols-2 gap-2">
          <CardImage />
          <CardImage />
          <CardImage />
          <div className="bg-profile-bg-color box-border w-full rounded-2xl flex items-center justify-center">
            <div className="top-1/2 right-1/2">
              <span className="text-white text-2xl">+11</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
