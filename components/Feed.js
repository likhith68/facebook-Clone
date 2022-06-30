import { useSession } from "next-auth/react";
import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <div className="mb-52 pb-40 h-screen overflow-y-auto xl:mr-40 mr-4 max-w-xl mx-auto md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto xl:max-w-3xl xl:mx-56 scrollbar-hide">
      <Stories />

      {/* Post Input Box */}
      <InputBox />

      {/* Posts */}
      <Posts />
    </div>
  );
}

export default Feed;
