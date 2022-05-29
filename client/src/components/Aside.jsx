import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineInfo,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineStar,
} from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { RiLineChartLine } from "react-icons/ri";

import cryptoMoonLogo from "../assets/images/crypto-moon-logo.svg";

export const Aside = () => {
  return (
    <section id="aside">
      <div className="flex flex-col items-center justify-start pt-5 w-16 h-screen bg-zinc-800 border-r-[1.5px] border-zinc-700">
        <div className="max-w-[40px] mb-10">
          <Link to="/">
            <img
              className="block"
              src={cryptoMoonLogo}
              alt="crypto-moon-logo"
            />
          </Link>
        </div>
        <div className="h-full flex flex-col items-center justify-between">
          <div className="flex flex-col space-y-5">
            <Link to="/coin-list">
              <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
                <FaCoins className="text-zinc-100 text-2xl" />
              </div>
            </Link>
            <Link to="/exchanges">
              <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
                <BsCurrencyExchange className="text-zinc-100 text-2xl" />
              </div>
            </Link>
            <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
              <RiLineChartLine className="text-zinc-100 text-2xl" />
            </div>
            <Link to="/top-portfolios">
              <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
                <AiOutlineStar className="text-zinc-100 text-2xl" />
              </div>
            </Link>
            <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
              <AiOutlineInfo className="text-zinc-100 text-2xl" />
            </div>
          </div>
          <div className="flex flex-col space-y-5 mb-10">
            <Link to="/login">
              <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
                <AiOutlineLogin className="text-zinc-100 text-2xl" />
              </div>
            </Link>
            <Link to="/register">
              <div className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 cursor-pointer transition-all">
                <AiOutlineUserAdd className="text-zinc-100 text-2xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
