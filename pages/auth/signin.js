import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signIn({ providers }) {
  return (
    //OAuth SignIn from next-auth website
    <>
      {" "}
      <div className="flex flex-col items-center min-h-screen justify-center -mt-2 `text-center">
        <img
          className="w-96"
          src="https://t3.ftcdn.net/jpg/04/32/86/42/360_F_432864205_aaLreq5kBDWUqDqgczdEM0aVP1bXCTTc.jpg"
          alt=""
        />
        <p className="ml-8 mt-5 font-xs italic">
          Facebook Clone--Built For Educational Purposes Only{" "}
        </p>
        <div className="mt-5">
          {" "}
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name} className="mt-3">
                <button
                  className="p-2 pl-3 pr-3 rounded-md normal-case bg-blue-500 text-white font-sans hover:bg-blue-800"
                  onClick={() =>
                    SignIntoProvider(provider.id, { callbackUrl: "/" })
                  }
                >
                  Sign in with {provider.name}{" "}
                </button>{" "}
              </div>
            ))}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
export default signIn;
