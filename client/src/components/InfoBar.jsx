import React, { useState } from "react";

export const InfoBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="info-bar" onClick={() => setOpen(!open)}>
      <div
        className={`flex flex-col items-center justify-start pt-5 ${
          open ? "w-screen" : "w-52"
        } h-screen bg-zinc-800 border-r-[1.5px] border-zinc-700`}
      >
        <div className="flex flex-col justify-center space-y-10 px-5">
          <div className="flex flex-col justify-center">
            <h1 className="text-zinc-200 text-left text-base pb-2">
              Hello, <span className="font-bold">Mark</span>
            </h1>
            <p className="text-zinc-400 font-extralight text-justify text-sm">
              Please select
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <button className="h-8 w-24 bg-indigo-500 text-zinc-100 text-sm rounded-full hover:bg-indigo-400 transition-all">
              Button1
            </button>
            <button className="h-8 w-24 bg-indigo-500 text-zinc-100 text-sm rounded-full hover:bg-indigo-400 transition-all">
              Button2
            </button>
            <button className="h-8 w-24 bg-indigo-500 text-zinc-100 text-sm rounded-full hover:bg-indigo-400 transition-all">
              Button3
            </button>
            <button className="h-8 w-24 bg-indigo-500 text-zinc-100 text-sm rounded-full hover:bg-indigo-400 transition-all">
              Button4
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
