import React from "react";

export const HeroInfoLoading = () => {
  return (
    <div className="w-full lg:w-2/3 md:mt-12">
      <div className="hidden sm:flex justify-center items-center space-y-6 py-1 animate-pulse">
        <div className="w-full">
          <div className="grid grid-cols-3 gap-10 md:gap-10">
            <div className="h-10 bg-zinc-800 rounded-lg col-span-1"></div>
            <div className="h-10 bg-zinc-800 rounded-lg col-span-1"></div>
            <div className="h-10 bg-zinc-800 rounded-lg col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
