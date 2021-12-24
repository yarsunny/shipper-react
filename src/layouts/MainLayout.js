import React from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

export default function MainLayout() {
  return (
    <div className="antialiased h-screen">
      <header className="h-header w-full flex justify-between items-center">
        <div className="md:hidden block ml-4 mb-2">
          <AiOutlineMenu size={32} />
        </div>
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
      <div className="flex h-body">
        <div className="hidden md:block flex-none w-64 h-full pt-8">sidebar</div>
        <div className="grow h-full bg-stone-100 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
