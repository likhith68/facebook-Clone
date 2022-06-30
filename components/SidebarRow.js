import { Avatar } from "@mui/material";
import React from "react";

function SidebarRow({ Src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-xl cursor-pointer">
      {" "}
      {Icon ? (
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-blue-500" />
      ) : (
        <Avatar className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" src={Src} />
      )}{" "}
      <p className="p-3 hidden sm:inline-flex font-medium"> {title} </p>{" "}
    </div>
  );
}

export default SidebarRow;
