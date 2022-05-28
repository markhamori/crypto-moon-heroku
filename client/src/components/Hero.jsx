import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStats } from "../config/Endpoints";

import blockchain from "../assets/images/blockchain.png";

import { HeroInfoLoading } from "../loaders/HeroInfoLoading";

export const Hero = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGlobalStats = async () => {
    const { data } = await axios.get(GlobalStats());
    setData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGlobalStats();
  }, []);

  return (
    <div id="hero" className="min-h-screen flex flex-col flex-grow p-10">
      <div className="flex flex-row">
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-xl text-indigo-400">Welcome on</h3>
          <h1 className="text-zinc-700 font-bold max-w-[800px] text-8xl leading-[6.5rem]">
            Crypto Moon Dashboard
          </h1>
          <h3 className="text-zinc-500 text-lg font-extralight">
            Check cryptocurrency prices.
          </h3>

          {loading ? <HeroInfoLoading /> : ""}
          {data && (
            <div className="flex flex-col font-extralight text-zinc-500 gap-1 mt-10">
              <p className="text-lg">
                All cryptocurrencies:{" "}
                <span className="font-bold text-zinc-700">
                  {parseInt(data.active_cryptocurrencies).toLocaleString()}
                </span>
              </p>
              <p className="text-lg">
                All exchanges:{" "}
                <span className="font-bold text-zinc-700">
                  {parseInt(data.markets)}
                </span>
              </p>
              <p className="text-lg ">
                Total Market Cap:{" "}
                <span className="font-bold text-zinc-700">
                  {parseInt(data.total_market_cap.usd).toLocaleString()}$
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
