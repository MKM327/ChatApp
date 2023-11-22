"use client";
import { useRef } from "react";

export default function Page() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  return (
    <div className="h-full w-full flex items-center justify-center bg-primary-color">
      <div className="flex flex-col gap-5 w-1/4">
        <input
          type="text"
          name=""
          className="w-full rounded-lg bg-[rgb(32,36,38)] outline-none placeholder:text-text-color p-2 focus:text-text-color"
          placeholder="Enter Username"
        />
        <input
          type="text"
          name=""
          className="w-full rounded-lg bg-[rgb(32,36,38)] outline-none placeholder:text-text-color p-2 focus:text-text-color"
          placeholder="Enter Password"
        />
        <button className="bg-profile-bg-color w-fit p-2 rounded-md hover:text-primary-color hover:bg-sent-message-color">
          Login
        </button>
      </div>
    </div>
  );
}
