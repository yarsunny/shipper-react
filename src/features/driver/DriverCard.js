import React from "react";
import { format } from "date-fns";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function DriverCard({ driver }) {
  const { picture, name, phone, email, dob, login } = driver;
  return (
    <div className="w-100 md:inline-block shrink-0 md:w-[300px] md:mr-6 mt-6 bg-white">
      <div className="w-full flex justify-between items-center border-slate-500 px-4 py-4 border-solid border-b">
        <div>
          <span className="text-slate-500 text-sm">Driver ID</span>
          <span className="text-orange-600 ml-2 font-semibold">
            {login.username}
          </span>
        </div>
        <BiDotsHorizontalRounded className="right-0" />
      </div>
      <div className="w-100 px-6 pt-6 pb-8 inline-flex md:block">
        <img
          className="h-16 block md:hidden rounded-full shrink-0"
          src={picture.thumbnail}
          alt="driver"
        />
        <img
          className="hidden md:block rounded-full mb-4"
          src={picture.medium}
          alt="driver"
        />
        <div className="ml-3 md:ml-0">
          <FormControl
            display="Nama Driver"
            value={`${name.first}, ${name.last}`}
          ></FormControl>
          <FormControl display="Telepon" value={phone}></FormControl>
          <FormControl
            className="hidden md:block"
            display="Email"
            value={email}
          ></FormControl>
          <FormControl
            className="hidden md:block"
            display="Tanggal Lahir"
            value={format(new Date(dob.date), "dd-MM-yy")}
          ></FormControl>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DriverCard);

function FormControl(props) {
  return (
    <div
      {...props}
      className={`mb-2 ${props.className ? props.className : ""}`}
    >
      <label className="leading-none text-xs text-slate-500">
        {props.display}
      </label>
      <div
        title={props.value}
        className="leading-none overflow-hidden w-[180px] md:w-[250px] text-ellipsis"
      >
        {props.value}
      </div>
    </div>
  );
}
