import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRef, useState } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      {session ? (
        <>
          <Header />
          <main className="flex">
            {/* Sidebar  */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
          </main>
        </>
      ) : (
        <Login />
      )}

      <Head>
        <title>Facebook - Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
        />
      </Head>
      {/* header */}
    </div>
  );
}

export async function getServerSideProps(context) {
  // to get user
  const session = await getSession(context);
  return { props: { session } };
}
