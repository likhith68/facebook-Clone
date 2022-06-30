import React from "react";

function HeaderIcon({ Icon, active }) {
  return (
    <div
      className="flex items-center rounded-xl lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 md:h-15 cursor-pointer sm:h-14 md:hover:bg-gray-100 active:border-b-2
    active:border-blue-500 group p-1"
    >
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 group-hover:text-blue-500 ${
          active && "text-blue-500"
        } `}
      />
    </div>
  );
}

export default HeaderIcon;
