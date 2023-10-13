export default function CardFile() {
  return (
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
  );
}
