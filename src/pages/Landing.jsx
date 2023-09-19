import React, { useState } from "react";
import { Logo3D } from "../components/Logo3D";
import { sentOneTimeCredetialToDB, verifyCode } from "../client/client";

export const Landing = () => {
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const sendVerification = () => {
    sentOneTimeCredetialToDB(whatsAppNumber);
  };
  const login = (e) => {
    e.preventDefault();
    verifyCode(whatsAppNumber, verificationCode)
      .then((r) => {
        console.log("right code");
      })
      .catch((error) => console.log("wrong code"));
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo3D />
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={login}>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                WhatsApp Number
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setWhatsAppNumber(e.currentTarget.value)}
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  placeholder="+00 000-000-000"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={sendVerification}
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Verification Code
              </button>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Verification Code
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setVerificationCode(e.currentTarget.value)}
                  id="code"
                  name="code"
                  type="code"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
