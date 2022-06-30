import { signIn } from "next-auth/react";
import React from "react";

function Login() {
  return (
    <div>
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
          <div className="mt-3">
            <button
              onClick={signIn}
              className="p-2 pl-3 pr-3 rounded-md normal-case bg-blue-500 text-white font-sans hover:bg-blue-800"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
