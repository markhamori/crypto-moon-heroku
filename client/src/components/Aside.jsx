import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMessage } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { RiLineChartLine } from "react-icons/ri";
import { GiWingedArrow } from "react-icons/gi";

import cryptoMoonLogo from "../assets/images/crypto-moon-logo.svg";

export const Aside = () => {
  return (
    <section id="aside">
      <div className="flex flex-col items-center justify-start pt-5 w-16 h-screen bg-zinc-800 border-r-[1.5px] border-zinc-700">
        <div className="flex flex-col items-center justify-center space-y-10">
          <img
            className="block max-w-[60px]"
            src={cryptoMoonLogo}
            alt="crypto-moon-logo"
          />
          <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
            <Link to="/coin-list">
              <FaCoins className="text-zinc-100 text-2xl" />
            </Link>
          </div>
          <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
            <BsCurrencyExchange className="text-zinc-100 text-2xl" />
          </div>
          <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
            <RiLineChartLine className="text-zinc-100 text-2xl" />
          </div>
          <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
            <GiWingedArrow className="text-zinc-100 text-2xl" />
          </div>
          <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
            <AiOutlineMessage className="text-zinc-100 text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
