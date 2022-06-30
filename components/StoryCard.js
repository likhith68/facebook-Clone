import React from "react";

function StoryCard({ name, img, profile, profilePic }) {
  return (
    <div className="relative h-14 w-14 md:w-20 md:h-15 lg:h-44 lg:w-32 overflow-x transition-all duration-200 hover:scale-105 ease-in hover:animate-pulse">
      <a href={profile} target="_blank">
        <img
          className="h-40 w-40 hidden lg:inline lg:w-40 lg:h-40 lg:object-cover filter brightness-75 rounded-full lg:rounded-3xl xl:h-45 xl:w-45"
          src={img}
          alt=""
        />
        <div className="mx-fit"></div>
        <img
          className="absolute w-17 h-17 object-cover sm:w-19 sm:h-19 sm:object-cover md:w-22 md:h-22 md:object-cover rounded-full z-50 top-5 h-10 w-10"
          src={profilePic}
          alt=""
        />
        {/* </div> */}
      </a>
      {/* <h1>{name}</h1> */}
    </div>
  );
}

export default StoryCard;
