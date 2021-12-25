import React from "react";

export default function Button(props) {
  if (props?.className?.includes('plain')) {
    return (
      <button
        type="button"
        {...props}
        className={`text-lg disabled:text-slate-500 disabled:cursor-not-allowed cursor-pointer hover:text-orange-600 text-slate-800 font-semibold ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      type="button"
      {...props}
      className={`border-orange-600 disabled:cursor-not-allowed hover:bg-orange-500 cursor-pointer border-solid bg-orange-600 text-white px-4 h-12 uppercase font-bold text-sm ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </button>
  );
}
