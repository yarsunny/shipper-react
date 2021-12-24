import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { selectSidebarStatus } from "../common/sidebarSlice";

export default function MainLayout() {
  const sidebarStatus = useSelector(selectSidebarStatus);

  return (
    <div className="antialiased h-screen">
      <Header />
      <div className="flex h-body">
        {/** Web Sidebar */}
        <div className="hidden md:block flex-none w-64 h-full pt-8">
          <Sidebar />
        </div>
        {/** mobile Sidebar */}
        {sidebarStatus === 'open' && (
          <div className="block md:hidden z-40 fixed w-full h-32 bg-white">
            <Sidebar />
          </div>
        )}
        <div className="grow h-full bg-stone-100 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
