import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import React from "react";
import Contact from "./Contact";

const contacts = [
  {
    src: "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
    name: "Jeff Bezoz",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjIyNTgwOTc0Ml5BMl5BanBnXkFtZTgwMzEwMTk5MzE@._V1_UX178_CR0,0,178,264_AL_.jpg",
    name: "Elon Musk",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTk4MDg0ODYyNV5BMl5BanBnXkFtZTcwODU2NDc4Mw@@._V1_UY1200_CR593,0,630,1200_AL_.jpg",
    name: "Bill Gates",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMWE5NTRmMDctMDBlZC00N2JmLWFmYzUtMDEwMTU2MmUyZTY5XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_UY1200_CR173,0,630,1200_AL_.jpg",
    name: "Mark Zuckerberg",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTA1MDc2MTEwNzReQTJeQWpwZ15BbWU4MDE2ODU1NzAy._V1_.jpg",
    name: "Tom Holland",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTkxMDEzNDgxMV5BMl5BanBnXkFtZTgwMTgzODgyNDM@._V1_.jpg",
    name: "Hrithik Roshan",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMDQxMWM4NGItYTBhOS00NDJlLWI3N2UtZTMwYzI2N2RiYTY3XkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
    name: "Ms Dhoni",
  },
];

function Widgets() {
  const { data: session } = useSession();

  return (
    <div>
      {session && (
        <>
          <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
              <h2 className="text-xl">Contacts</h2>
              <div className="flex space-x-2">
                <VideoCameraIcon className="h-6" />
                <SearchIcon className="h-6" />
                <DotsHorizontalIcon className="h-6" />
              </div>
            </div>
            {contacts.map((contact) => (
              <Contact
                key={contact.src}
                src={contact.src}
                name={contact.name}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Widgets;
