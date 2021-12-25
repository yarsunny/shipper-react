import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { debounce } from "./utils";

export default function Search(props) {
  const [query, setQuery] = useState("");

  function queryChanged([e]) {
    const currentQuery = e.target.value;
    if (currentQuery !== query) {
      setQuery(currentQuery);
      props.queryChanged(currentQuery);
    }
  }

  return (
    <>
      <div className="inline-flex bg-white items-center">
        <BiSearchAlt2 size={16} className="ml-1 text-orange-600" />
        <input type="text" onChange={debounce(queryChanged, 300)} />
      </div>
    </>
  );
}
