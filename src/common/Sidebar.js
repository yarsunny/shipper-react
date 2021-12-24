import React from "react";
import SidebarLink from "./SidebarLink";
import { BiLocationPlus, BiHome, BiCalendar } from "react-icons/bi";

export default function Sidebar() {
  return (
    <ul>
      <SidebarLink to="/">
        <BiHome size={20} className="mr-3" />
        Beranda
      </SidebarLink>
      <SidebarLink to="/driver">
        <BiLocationPlus size={20} className="mr-3" />
        Driver Management
      </SidebarLink>
      <SidebarLink to="/pickup">
        <BiCalendar size={20} className="mr-3" />
        Pickup
      </SidebarLink>
    </ul>
  );
}
