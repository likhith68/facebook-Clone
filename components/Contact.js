import { Avatar } from "@mui/material";
import React from "react";

function Contact({ src, name }) {
  return (
    <div className="flex space-x-3 items center mb-2 mt-2 p-2 hover:bg-gray-200 relative cursor-pointer rounded-xl">
      <Avatar src={src} />
      <p>{name}</p>
      <div className="absolute bottom-2 bg-green-400 h-2 rounded-full w-2 left-7 animate-bounce"></div>
    </div>
  );
}

export default Contact;
