import Messages from "@/components/Messages/Messages";
import MyImage from "@/components/MyImage";
import Navbar from "@/components/Navbar/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";
import useGetUser from "@/hooks/Navbar/useGetUser";
export default function Page() {
  
  return (
    <AuthProvider>
      <div className="bg-primary-color h-full w-full">
      <div className="w-11/12 m-auto h-full flex items-center">
      <div
        className="w-full h-4/5 rounded-lg bg-primary-color border flex border-text-color"
      >
      <Navbar/>
        <main className="flex-1 flex">
          <Messages />
          <section className="flex-1 flex">
            <div className="flex-1 overflow-hidden flex flex-col">
              <div
                className="flex items-center justify-between pl-5 pt-3 pr-5 pb-5 border-b border-text-color"
              >
                <div className="flex gap-2 items-center">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-10 h-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white"></i>
                  </div>
                  <div>
                    <div>
                      <h4 className="text-white font-medium">Another good name</h4>
                    </div>
                    <div>
                      <span className="text-sent-message-color text-sm"
                        >Typing...</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  className="w-10 rounded-full border border-text-color flex items-center justify-center aspect-square"
                >
                  <i className="fa-solid fa-ellipsis-vertical text-white"></i>
                </div>
              </div>
              <div
                className="p-3 bg-secondary-color flex flex-col gap-5 overflow-y-scroll flex-1"
              >
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
              <div className="flex p-4 justify-between gap-2 items-center">
                <div>
                  <i className="fa-solid fa-paperclip text-white"></i>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full rounded-lg bg-[rgb(32,36,38)] pr-7 outline-none placeholder:text-text-color p-2 focus:text-text-color"
                      placeholder="Send message to {blank}"
                    />
                    <div className="absolute top-2 right-2">
                      <i className="fa-regular fa-face-laugh-beam text-white"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-microphone text-white"></i>
                </div>
              </div>
            </div>
            <div
              className="w-1/3 border-l border-l-text-color flex flex-col gap-4 basis-auto max-w-full overflow-y-scroll"
            >
              <div
                className="flex justify-between items-center p-5 h-[80.8px] border-b border-text-color"
              >
                <div className="flex items-center justify-center ml-4">
                  <h4 className="text-white text-lg box-border">Details</h4>
                </div>
                <div
                  className="rounded-full border w-10 flex items-center mr-3 justify-center border-text-color aspect-square p-2"
                >
                  <i className="fa-solid fa-x text-white text-xs"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div
                    className="bg-purple-500 rounded-full aspect-square w-1/2 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-id-card text-white text-3xl"></i>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-white">Another Good Name</h3>
                    <span className="text-sent-message-color"> Online</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 basis-auto">
                <div className="flex justify-between pl-3">
                  <div className="flex gap-2 text-sm items-center">
                    <h4 className="text-lg text-white">Media</h4>
                    <div>
                      <span>14</span>
                      <span>pictures</span>
                    </div>
                  </div>
                  <div
                    className="text-sent-message-color text-sm mr-3 underline underline-offset-2"
                  >
                    View all
                  </div>
                </div>
                <div className="flex items-center justify-center mt-2 mx-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square rounded-full">
                      <MyImage
                        src="https://picsum.photos/id/237/200/300"
                      alt="profilePic"
                      />
                    </div>
                    <div className="aspect-square object-cover">
                      <MyImage
                        src="https://picsum.photos/id/237/200/300"
                      alt="profilePic"
                      />
                    </div>
                    <div className="aspect-square object-cover">
                      <MyImage
                        src="https://picsum.photos/id/237/200/300"
                          alt = "profilePic"
                      />
                    </div>
                    <div
                      className="bg-profile-bg-color box-border w-full rounded-2xl flex items-center justify-center"
                    >
                      <div className="top-1/2 right-1/2">
                        <span className="text-white text-2xl">+11</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pl-3">
                <div className="flex gap-2 text-sm">
                  <h4>Files</h4>
                  <div>
                    <span>14</span>
                    <span>Files</span>
                  </div>
                </div>
                <div
                  className="text-sent-message-color text-sm mr-3 underline underline-offset-2"
                >
                  View all
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="p-3 bg-profile-bg-color">
                  <div
                    className="bg-primary-color p-2 rounded-md flex gap-2 items-center"
                  >
                    <div>
                      <i className="fa-regular fa-file text-sent-message-color"></i>
                    </div>
                    <span
                      className="text-profile-file-text-color text-sm font-semibold"
                      >File Name
                      </span>
                  </div>
                </div>
                <div className="p-3 bg-profile-bg-color">
                  <div
                    className="bg-primary-color p-2 rounded-md flex gap-2 items-center"
                  >
                    <div>
                      <i className="fa-regular fa-file text-sent-message-color"></i>
                    </div>
                    <span
                      className="text-profile-file-text-color text-sm font-semibold">File Name
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
        </div>
        </div>
    </AuthProvider>
  );
}
