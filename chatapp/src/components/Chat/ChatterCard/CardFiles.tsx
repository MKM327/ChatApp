import CardFile from "./CardFile";

function FilesHeader() {
  return (
    <>
      <div className="flex gap-2 text-sm">
        <h4>Files</h4>
        <div>
          <span>14</span> <span>Files</span>
        </div>
      </div>
      <div className="text-sent-message-color text-sm mr-3 underline underline-offset-2 hover:cursor-pointer">
        View all
      </div>
    </>
  );
}
export default function CardFiles() {
  return (
    <>
      <div className="flex justify-between pl-3">
        <FilesHeader />
      </div>
      <div className="flex flex-col gap-2">
        <CardFile />
        <CardFile />
      </div>
    </>
  );
}
