import CardInfo from "./CardInfo";
import CardMedia from "./CardMedia";
import CardFiles from "./CardFiles";
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
    <div className="w-1/3 border-l max-sm:hidden border-l-text-color flex flex-col gap-4 basis-auto max-w-full overflow-y-auto">
      <CardHeader />
      <CardInfo />
      <CardMedia />
      <CardFiles />
    </div>
  );
}
