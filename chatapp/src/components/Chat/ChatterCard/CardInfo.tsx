export default function CardInfo() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="bg-purple-500 rounded-full aspect-square w-1/2 flex items-center justify-center">
          <i className="fa-solid fa-id-card text-white text-3xl"></i>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white">Another Good Name</h3>
          <span className="text-sent-message-color">Online</span>
        </div>
      </div>
    </div>
  );
}
