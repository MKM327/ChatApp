"use client";
import useGetRoutes from "@/hooks/Navbar/useGetRoutes";
import NavbarButton from "@/components/Navbar/NavbarButton";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const { activeTab, setActiveTab } = useGetRoutes();
  const router = useRouter();
  const Routes = [
    {
      icon: "fa-solid fa-comments",
      isActive: activeTab === "chat",
      onclick: () => setActiveTab("chat"),
    },
    {
      icon: "fa-regular fa-user",
      isActive: activeTab === "groups",
      onclick: () => setActiveTab("groups"),
    },
    {
      icon: "fa-regular fa-bookmark",
      isActive: activeTab === "saved",
      onclick: () => setActiveTab("saved"),
    },
    {
      icon: "fa-solid fa-gear",
      isActive: activeTab === "settings",
      onclick: () => setActiveTab("settings"),
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between h-full border-r p-2 pt-4 border-r-text-color">
      <div>
        <div
          className="rounded-full bg-white p-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <i className="fa-solid fa-comments text-blue-400 text-xl"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {Routes.map((route, index) => (
          <NavbarButton
            key={index}
            icon={route.icon}
            isActive={route.isActive}
            onclick={route.onclick}
          />
        ))}
      </div>
      <div className="">
        <div className="rounded-full bg-primary-color p-2 flex justify-center w-10 aspect-square items-center">
          <i className="fa-solid fa-plus text-text-color"></i>
        </div>
        <div className="rounded-full bg-primary-color p-2 flex justify-center w-10 aspect-square items-center">
          <i className="fa-solid fa-id-card text-text-color"></i>
        </div>
      </div>
    </div>
  );
}
