import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  deleteDoc,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import { useSession } from "next-auth/react";
import { Avatar, Button } from "@mui/material";
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { db, storage } from "../firebase";
import { useState } from "react";
import firebase from "../firebase";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const pickImageRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  //adding post to the cloud firestore
  const sendPost = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    }); //1.

    console.log("New doc added with ID", docRef.id); //2.

    const imageRef = ref(storage, `posts/${docRef.id}/images`); //3.

    await uploadString(imageRef, imageToPost, "data_url").then(
      //4
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef); //4
        await updateDoc(doc(db, "posts", docRef.id), {
          postImage: downloadURL,
        });
      }
    );

    //texted posted{

    inputRef.current.value = "";
    setImageToPost(null);
  };
  //adding image to the input box
  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  //removing image when image is clicked
  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="bg-white pl-3 pt-3 pr-3 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center pb-3">
        <Avatar src={session?.user?.image} />
        <form className="flex flex-1" action="">
          <input
            ref={inputRef}
            className="p-5 rounded-full h-12 bg-gray-100 flex-grow focus:outline-none"
            type="text"
            placeholder={`Whats on your mind, ${session?.user?.name}?`}
          />
          <button
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-900 "
            disabled={!imageToPost}
            type="submit"
            onClick={sendPost}
          >
            Post
          </button>
        </form>
        {imageToPost && (
          <div
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}
          >
            <img src={imageToPost} className="h-10 object-contain" alt="" />
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div onClick={() => pickImageRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <input ref={pickImageRef} type="file" hidden onChange={addImage} />
          <p className="text-xs sm:text-sm xl:text-base">Upload Photo</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
