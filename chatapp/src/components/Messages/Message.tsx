export default function Message() {
  return (
    <div className="flex justify-between hover:bg-gray-700 p-3">
      <div className="flex gap-2">
        <div className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center">
          <i className="fa-solid fa-id-card text-white"></i>
        </div>
        <div>
          <h4 className="text-white font-medium text-sm">Test</h4>
          <span className="text-text-color text-sm">Last message</span>
        </div>
      </div>
      <div className="text-text-color text-xs">13.10pm</div>
    </div>
  );
}
