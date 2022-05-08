import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/fontawesome-free-regular";

export const PortfoliosLoading = () => {
  return (
    <div className="pb-5 animate-pulse">
      <div className="w-64 h-96 md:w-[240px] lg:w-[340px] lg:h-[580px] border-2 rounded-xl border-zinc-500 p-5">
        <div className="grid grid-rows-5 gap-2 md:gap-5">
          <div className="h-7 bg-zinc-800 rounded-lg col-span-1"></div>
          <div className="h-7 bg-zinc-800 rounded-lg col-span-1"></div>
          <div className="h-7 bg-zinc-800 rounded-lg col-span-1"></div>
          <div className="h-7 bg-zinc-800 rounded-lg col-span-1"></div>
        </div>
      </div>
      <div className="grid grid-rows-2 justify-center gap-2 mt-10">
        <div className="h-10 bg-zinc-800 rounded-lg col-span-1"></div>
        <div className="text-zinc-800 text-xl lg:text-3xl space-x-2">
          <FontAwesomeIcon icon={faStarRegular} />
          <FontAwesomeIcon icon={faStarRegular} />
          <span className="text-4xl">
            <FontAwesomeIcon icon={faStarRegular} />
          </span>
          <FontAwesomeIcon icon={faStarRegular} />
          <FontAwesomeIcon icon={faStarRegular} />
        </div>
      </div>
    </div>
  );
};
