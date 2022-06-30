import React from "react";
import { useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import {
  ShoppingBagIcon,
  UserGroupIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="p-1 mt-3 max-w-fit md:max-w-xs lg:max-w-sm xl:max-w-6xl xl:min-w-[360px]">
      {" "}
      {session && (
        <>
          <SidebarRow Src={session.user.image} title={session.user.name} />{" "}
          <SidebarRow Icon={UsersIcon} title="Friends" />
          <SidebarRow Icon={UserGroupIcon} title="Groups" />
          <SidebarRow Icon={ShoppingBagIcon} title="Market Place" />
          <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
          <SidebarRow Icon={CalendarIcon} title="Events" />
          <SidebarRow Icon={ClockIcon} title="Memories" />
          <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </>
      )}{" "}
    </div>
  );
}

export default Sidebar;
