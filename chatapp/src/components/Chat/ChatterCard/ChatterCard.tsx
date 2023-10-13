import MyImage from "@/components/MyImage";
import CardInfo from "./CardInfo";
import CardImage from "./CardImage";
import ChatImages from "./ChatImages";
function CardHeader() {
  return (
    <div className="flex justify-between items-center p-5 h-[80.8px] border-b border-text-color">
      <div className="flex items-center justify-center ml-4">
        <h4 className="text-white text-lg box-border">Details</h4>
      </div>
      <div className="rounded-full border w-10 flex items-center mr-3 justify-center border-text-color aspect-square p-2">
        <i className="fa-solid fa-x text-white text-xs"></i>
      </div>
    </div>
  );
}
export default function ChatterCard() {
  return (
    <div className="w-1/3 border-l border-l-text-color flex flex-col gap-4 basis-auto max-w-full overflow-y-auto">
      <CardHeader />
      <CardInfo />
        <ChatImages/>
      <div className="flex justify-between pl-3">
        <div className="flex gap-2 text-sm">
          <h4>Files</h4>
          <div>
            <span>14</span>
            <span>Files</span>
          </div>
        </div>
        <div className="text-sent-message-color text-sm mr-3 underline underline-offset-2">
          View all
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="p-3 bg-profile-bg-color">
          <div className="bg-primary-color p-2 rounded-md flex gap-2 items-center">
            <div>
              <i className="fa-regular fa-file text-sent-message-color"></i>
            </div>
            <span className="text-profile-file-text-color text-sm font-semibold">
              File Name
            </span>
          </div>
        </div>
        <div className="p-3 bg-profile-bg-color">
          <div className="bg-primary-color p-2 rounded-md flex gap-2 items-center">
            <div>
              <i className="fa-regular fa-file text-sent-message-color"></i>
            </div>
            <span className="text-profile-file-text-color text-sm font-semibold">
              File Name
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
