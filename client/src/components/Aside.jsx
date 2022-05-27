import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMessage } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { RiLineChartLine } from "react-icons/ri";
import { GiWingedArrow } from "react-icons/gi";

export const Aside = () => {
  return (
    <section id="aside">
      <div className="flex flex-col items-center justify-start pt-5 w-16 h-screen bg-zinc-200 rounded-tr-md border-r-[1.5px] border-zinc-300">
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="bg-zinc-100 p-2 rounded-full">
            <Link to="/coin-list">
              <FaCoins className="text-indigo-500 text-2xl" />
            </Link>
          </div>
          <div className="bg-zinc-100 p-2 rounded-full">
            <BsCurrencyExchange className="text-indigo-500 text-2xl" />
          </div>
          <div className="bg-zinc-100 p-2 rounded-full">
            <RiLineChartLine className="text-indigo-500 text-2xl" />
          </div>
          <div className="bg-zinc-100 p-2 rounded-full">
            <GiWingedArrow className="text-indigo-500 text-2xl" />
          </div>
          <div className="bg-zinc-100 p-2 rounded-full">
            <AiOutlineMessage className="text-indigo-500 text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
