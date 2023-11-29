function Online() {
  return (
    <div className="flex gap-2 pl-5 w-full max-w-[300px] overflow-hidden">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-purple-500 flex-shrink-0 flex-grow-0 basis-10 rounded-full aspect-square w-10 flex items-center justify-center">
          <i aria-hidden className="fa-solid fa-id-card text-white"></i>
        </div>
        <span className="text-xs text-text-color">nickname</span>
        <div className="absolute w-3 aspect-square -top-0 right-2 bg-sent-message-color rounded-full"></div>
      </div>
    </div>
  );
}
export default function OnlineFriends() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between pl-5 pr-3">
        <h4 className="text-white font-medium">Online now</h4>
        <span className="text-text-color">More </span>
      </div>
      <Online />
    </div>
  );
}
