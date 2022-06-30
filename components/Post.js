import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ThumbUpIcon as ThumbUpIconFilled } from "@heroicons/react/solid";
import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
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
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import Moment from "react-moment";

function Post({ id, username, userImage, img, caption, timestamp }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [hideComment, setHideComment] = useState(true);

  ///Like Mechanism starts Here
  useEffect(
    //Likes
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.email) !== -1
      ),
    [likes]
  );

  // addLikes
  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.email));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.email), {
        username: session.user.name,
        email: session.user.email,
      });
    }
  };

  ///Like Mechanism Ends Here

  //   Commment Starts

  const addComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.name,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  useEffect(
    //Comments
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "asc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  return (
    <div className="flex flex-col">
      <div className="pt-5 pl-5 pr-5 pb-3 bg-white mt-5 rounded-2xl shadow-md">
        <div className="flex items-center space-x-2">
          <Avatar src={userImage} className="w-10 h-10" alt="" />
          <div>
            <p className="font-medium">{username}</p>
            <p className="text-sm text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        {caption && <p className="pt-4">{caption}</p>}
        {img && (
          <div className="mt-4">
            <img src={img} />
          </div>
        )}
        {(hasLiked || comments) && (
          <div className="mt-2 pt-2 pb-2 flex items-center justify-between">
            {hasLiked && (
              <div className="flex">
                <div className="bg-blue-500 rounded-full p-1">
                  <ThumbUpIconFilled className="text-white h-4" />
                </div>
                {session && likes.length > 0 && (
                  <p className="pl-2">{likes.length}</p>
                )}
              </div>
            )}
            {comments.length > 0 &&
              (comments.length > 0 && comments.length > 1 ? (
                <div
                  onClick={() => setHideComment(!hideComment)}
                  className="flex cursor-pointer"
                >
                  <p>{comments.length} Comments</p>
                </div>
              ) : (
                <>
                  <div
                    className="flex cursor-pointer"
                    onClick={() => setHideComment(!hideComment)}
                  >
                    <p>{comments.length} Comment</p>
                  </div>
                </>
              ))}
          </div>
        )}

        {session && (
          <>
            <div className="flex border-t border-b justify-between items-center bg-white text-gray-400 border-top border-gray">
              {hasLiked ? (
                <>
                  <button
                    onClick={likePost}
                    className="justify-center inputIcon hover:text-black"
                  >
                    <ThumbUpIconFilled className="btn h-6 text-blue-700" />
                    <p className="hidden md:inline-flex text-xs sm:text-base text-blue-700">
                      Like
                    </p>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={likePost}
                    className="justify-center inputIcon hover:text-black"
                  >
                    <ThumbUpIcon className="h-6" />
                    <p className="hidden md:inline-flex text-xs sm:text-base">
                      Like
                    </p>
                  </button>
                </>
              )}
              <button
                onClick={() => {
                  setHideComment(!hideComment);
                }}
                className="justify-center inputIcon hover:text-black"
              >
                <ChatAltIcon className="h-6" />
                <p className="hidden md:inline-flex text-xs sm:text-base">
                  Comment
                </p>
              </button>
              <button className="justify-center justify-items-center inputIcon hover:text-black">
                <ShareIcon className="h-6" />
                <p className="hidden md:inline-flex text-xs sm:text-base">
                  Share
                </p>
              </button>
            </div>
            <form action="">
              <div className="flex items-center space-x-2 mt-3">
                <Avatar src={userImage} className="w-7 h-7" />
                <input
                  type="text"
                  value={comment}
                  className="h-9 flex-1 bg-gray-100 p-2 rounded-full border-none outline-none"
                  placeholder="Write a public Comment..."
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button
                  type="submit"
                  disabled={!comment.trim()}
                  onClick={addComment}
                  className="font-bold text-blue-400"
                  hidden
                />
              </div>
            </form>
            {comments.length > 0 && (
              <div
                hidden={hideComment}
                className=" h-auto scrollbar-hide mt-3 overflow-y-scroll scrollbar-thumb-black scrollbar-thin"
              >
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex items-center justify-between mb-3"
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar
                        className="h-7 w-7"
                        src={comment.data().userImage}
                        alt=""
                      />
                      <div className=" bg-gray-100 p-1 pl-2 pr-2 rounded-xl">
                        <p className="text-sm font-semibold">
                          {comment.data().username}
                        </p>
                        <p>{comment.data().comment}</p>
                      </div>
                    </div>

                    <Moment className="text-xs" fromNow>
                      {comment.data().timestamp?.toDate()}
                    </Moment>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Post;
