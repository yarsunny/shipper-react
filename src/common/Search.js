import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { debounce } from "./utils";

export default function Search(props) {
  const [query, setQuery] = useState("");

  function queryChanged([e]) {
    const currentQuery = e.target.value;
    if (currentQuery !== query) {
      setQuery(currentQuery);
      props.queryChanged(currentQuery.toLowerCase());
    }
  }

  return (
    <div className="flex md:inline-flex mt-4 md:mt-0 h-12 border-2 border-solid border-slate-200 bg-white items-center">
      <BiSearchAlt2 size={24} className="ml-2 mr-1 text-orange-600" />
      <input type="text" placeholder="Cari Driver" className="outline-none text-l" onChange={debounce(queryChanged, 300)} />
    </div>
  );
}
