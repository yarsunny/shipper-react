import React from "react";
import { BsPersonCircle } from "react-icons/bs";

export default function DriverManagementLoader() {
  return (
    <>
      <div className="w-full bg-white py-4 px-6 h-48 md:h-20"></div>
      <DriverCardLoader />
      <DriverCardLoader />
      <DriverCardLoader />
      <DriverCardLoader />
    </>
  );
}

function DriverCardLoader() {
  return (
    <div className="w-100 md:inline-block shrink-0 md:w-[300px] md:mr-6 mt-6 bg-white">
      <div className="w-full h-16 border-slate-500 px-4 py-4 border-solid border-b">
        <div className="h-full rounded w-24 bg-slate-200"></div>
      </div>
      <div className="w-100 px-6 pt-6 pb-8 inline-flex md:block">
        <BsPersonCircle
          size={48}
          className="text-slate-200 h-16 block md:hidden shrink-0"
        />
        <BsPersonCircle
          size={64}
          className="text-slate-200 hidden md:block mb-4"
          alt="driver"
        />
        <div className="mt-4 md:mt-0 ml-3 md:ml-0 h-32 md:h-48">
          <div className="mb-6 md:mb-4">
            <div className="rounded h-4 w-16 mb-2 bg-slate-200"></div>
            <div className="rounded h-6 w-48 bg-slate-200"></div>
          </div>
          <div className="mb-4">
            <div className="rounded h-4 w-16 mb-2 bg-slate-200"></div>
            <div className="rounded h-6 w-48 bg-slate-200"></div>
          </div>
          <div className="mb-4 hidden md:block">
            <div className="rounded h-4 w-16 mb-2 bg-slate-200"></div>
            <div className="rounded h-6 w-48 bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
