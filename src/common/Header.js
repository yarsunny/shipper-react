import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleMobileSidebar } from "./sidebarSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="h-header w-full flex justify-between items-center">
      <button
        className="md:hidden block ml-4 mb-2 cursor-pointer hover:text-orange-600"
        onClick={() => dispatch(toggleMobileSidebar())}
      >
        <AiOutlineMenu size={32} />
      </button>
      <img
        className="h-16 ml-5 md:ml-4"
        src="https://bookface-images.s3.amazonaws.com/logos/8afeac8fec711d64037cb0f7d4579747f4d04d4a.png"
        alt="logo"
      />
      <div className="flex items-center">
        <div className="hidden md:block">
          <span className="mr-1">Hello&#44;</span>
          <span className="text-orange-600">Shipper User</span>
        </div>
        <BiUserCircle size={32} className="mr-5 ml-2" />
      </div>
    </header>
  );
}
