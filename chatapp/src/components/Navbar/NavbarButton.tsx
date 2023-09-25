"use client"
interface NavbarButtonProps {
    icon: string;
    isActive: boolean;
    onclick: () => void;
}
export default function NavbarButton( {icon, isActive, onclick}: NavbarButtonProps)
{   
   return (
    <>
    <button
    className={`rounded-full hover:bg-sent-message-color group ${isActive ? "bg-sent-message-color" : "bg-primary-color"} p-2 flex justify-center w-10 aspect-square items-center`}
    onClick={onclick}
    > 
    <i
      className={`${icon} text-text-color group group-hover:text-white ${isActive ? "text-white" : "text-text-color"} `}
      >
    </i>
  </button>
      </>
  ) 
}