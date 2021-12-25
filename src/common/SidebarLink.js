import React from "react";
import { useDispatch } from "react-redux";
import { useMatch, useResolvedPath, Link } from "react-router-dom";
import { toggleMobileSidebar } from "./sidebarSlice";

export default function SidebarLink({ children, to, ...props }) {
  const dispatch = useDispatch();
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li
      data-testid="sidebar-link"
      className={`hover:text-orange-600 border-l-4 border-solid pl-5 mb-2 ${
        match ? "border-orange-600 text-orange-600 font-bold" : "border-white"
      }`}
      onClick={() => dispatch(toggleMobileSidebar())}
    >
      <Link className="flex items-center" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
