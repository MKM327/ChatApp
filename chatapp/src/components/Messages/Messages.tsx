"use client"
export default function Messages()
{
    // const {profile } = useGetProfile();
    return (
        <section
        className="flex flex-col border-r border-text-color items-center justify-center"
      >
        <div
          className="flex items-center justify-between gap-5 pl-5 pt-3 pr-5 pb-5 border-b border-text-color"
        >
          <div className="flex items-center gap-3">
            <div
              className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center"
            >
              <i className="fa-solid fa-id-card text-white"></i>
            </div>
            <div>
              <h4 className="text-white font-medium">Murat Kaan Mesüm</h4>
              <span className="text-text-color text-sm">account</span>
            </div>
          </div>
          <div
            className="w-10 rounded-full border border-text-color flex items-center justify-center aspect-square"
          >
            <i className="fa-solid fa-ellipsis-vertical text-white"></i>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2 flex-1 overflow-hidden">
          <div className="p-5">
            <input
              type="text"
              name=""
              id=""
              className="w-full rounded-lg bg-[rgb(32,36,38)] outline-none placeholder:text-text-color p-2 focus:text-text-color"
              placeholder="Search or start a new chat..."
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between pl-5 pr-3">
              <h4 className="text-white font-medium">Online now</h4>
              <span className="text-text-color">More </span>
            </div>
            <div
              className="flex gap-2 pl-5 w-full max-w-[300px] overflow-hidden"
            >
              <div className="flex flex-col items-center gap-2 relative">
                <div
                  className="bg-purple-500 flex-shrink-0 flex-grow-0 basis-10 rounded-full aspect-square w-10 flex items-center justify-center"
                >
                  <i className="fa-solid fa-id-card text-white"></i>
                </div>
                <span className="text-xs text-text-color">nickname</span>
                <div
                  className="absolute w-3 aspect-square -top-0 right-2 bg-sent-message-color rounded-full"
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full gap-2">
            <div className="pl-4">
              <h4 className="text-white font-medium">Messages</h4>
            </div>
            <div className="overflow-y-scroll scroll-smooth flex-1 basis-10">
              <div className="flex justify-between hover:bg-gray-700 p-3">
                <div className="flex gap-2">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      APTAL KOPEK BORAN
                    </h4>
                    <span className="text-text-color text-sm">Last message</span>
                  </div>
                </div>
                <div className="text-text-color text-xs">13.10pm</div>
              </div>
              <div className="flex justify-between hover:bg-gray-700 p-3">
                <div className="flex gap-2">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      APTAL KOPEK BORAN
                    </h4>
                    <span className="text-sent-message-color text-xs"
                      >Typing...
                      </span>
                  </div>
                </div>
                <div className="text-text-color text-xs">13.10pm</div>
              </div>
              <div className="flex justify-between hover:bg-gray-700 p-3">
                <div className="flex gap-2">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      APTAL KOPEK BORAN
                    </h4>
                    <span className="text-text-color text-sm">Last message</span>
                  </div>
                </div>
                <div className="text-text-color text-xs">13.10pm</div>
              </div>
              <div className="flex justify-between hover:bg-gray-700 p-3">
                <div className="flex gap-2">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      APTAL KOPEK BORAN
                    </h4>
                    <span className="text-text-color text-sm">Last message</span>
                  </div>
                </div>
                <div className="text-text-color text-xs">13.10pm</div>
              </div>
              <div className="flex justify-between hover:bg-gray-700 p-3">
                <div className="flex gap-2">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      APTAL KOPEK BORAN
                    </h4>
                    <span className="text-text-color text-sm">Last message</span>
                  </div>
                </div>
                <div className="text-text-color text-xs">13.10pm</div>
              </div>
              <div className="flex justify-between hover:bg-gray-700 p-3">
                <div className="flex gap-2">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      APTAL KOPEK BORAN
                    </h4>
                    <span className="text-text-color text-sm">Last message</span>
                  </div>
                </div>
                <div className="text-text-color text-xs">13.10pm</div>
              </div>
              <div className="flex justify-between hover:bg-gray-700 p-3">
                <div className="flex gap-2">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      APTAL KOPEK BORAN
                    </h4>
                    <span className="text-text-color text-sm">Last message</span>
                  </div>
                </div>
                <div className="text-text-color text-xs">13.10pm</div>
              </div>
              <div className="flex justify-between hover:bg-gray-700 p-3">
                <div className="flex gap-2">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      APTAL KOPEK BORAN
                    </h4>
                    <span className="text-text-color text-sm">Last message</span>
                  </div>
                </div>
                <div className="text-text-color text-xs">13.10pm</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}