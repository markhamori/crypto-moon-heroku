import React from "react";

export const Information = () => {
  return (
    <div id="information" className="min-h-screen flex flex-col flex-grow">
      <div className="flex flex-col justify-start p-10 h-screen">
        <div className="mb-2">
          <p className="text-xs font-light text-zinc-400">
            Pages / <span className="font-semibold">information</span>
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Information</h1>
          <p className="text-sm">Get information about this application</p>
        </div>
        <div className="flex flex-col mt-10 space-y-2">
          <div className="flex flex-col space-y-2">
            <h1 className="text-md">Api documents</h1>
            <div className="text-sm text-zinc-100 bg-indigo-400 rounded-full px-5 py-1 w-fit">
              Link
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-md">Used technologies</h1>
            <ul className="flex items-center justify-center w-fit space-x-2">
              <li className="text-sm text-zinc-100 bg-indigo-400 rounded-full px-5 py-1">
                React
              </li>
              <li className="text-sm text-zinc-100 bg-indigo-400 rounded-full px-5 py-1">
                Node
              </li>
              <li className="text-sm text-zinc-100 bg-indigo-400 rounded-full px-5 py-1">
                Vite
              </li>
              <li className="text-sm text-zinc-100 bg-indigo-400 rounded-full px-5 py-1">
                Tailwind
              </li>
              <li className="text-sm text-zinc-100 bg-indigo-400 rounded-full px-5 py-1">
                RestAPI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
