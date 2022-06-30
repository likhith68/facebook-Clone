import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { Avatar } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex sticky top-0 z-50 bg-white items-center p-2 lg:pl-5 lg:pr-5 shadow-md">
      {/* Header Left */}
      <div className="flex items-center p-2 lg:p-0 sm:space-x-1 md:space-x-2 lg:space-x-4">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
          width={40}
          height={40}
          className="cursor-pointer"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="bg-transparent ml-2 items-center outline-none placeholder-gray-500 hidden lg:inline-flex"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Header Center */}
      <div className="flex justify-center items-center flex-grow">
        <div className="flex max-w-xl mx-auto md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto xl:max-w-6xl xl:mx-auto">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Header Right */}
      {session ? (
        <>
          <div className="flex items-center justify-end space-x-2 md:space-x-3 lg:space-x-4 ">
            <Link
              className="hover:bg-gray-200 rounded-full flex p-2 items-center justify-end space-x-2 md:space-x-3 lg:space-x-4"
              href="/auth/signin"
            >
              <div className="flex items-center space-x-2 hover:bg-gray-200 rounded-full p-2 justify-end md:space-x-3 lg:space-x-4">
                <Avatar
                  className="cursor-pointer"
                  src={session?.user?.image}
                  onClick={signOut}
                />
                <p className="font-semibold whitespace-nowrap hidden lg:inline-flex">
                  {session?.user?.name}
                </p>
              </div>
            </Link>

            <ViewGridIcon className="icon" />
            <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <ChevronDownIcon className="icon" />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-end space-x-2 md:space-x-3 lg:space-x-4">
          <p className="font-semibold whitespace-nowrap lg:inline-flex pl-10 pr-10">
            <button className="p-2 pl-3 pr-3 rounded-md normal-case bg-blue-500 text-white font-sans hover:bg-blue-800">
              <Link href="auth/signin">SignIn</Link>
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
