import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStats } from "../config/Endpoints";

import { HeroInfoLoading } from "../loaders/HeroInfoLoading";
import Illustration from "../assets/images/Illustration.svg";

export const Welcome = () => {
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
    <div id="welcome" className="min-h-screen flex flex-col flex-grow p-10">
      <div className="absolute max-w-[250px] md:max-w-xs flex items-center justify-center right-10 bottom-10">
        <img src={Illustration} alt="illustration" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center md:items-start justify-center">
          <h1 className="text-zinc-700 font-bold max-w-[800px] text-4xl text-center md:text-left md:text-8xl md:leading-[6.5rem] mb-5">
            Crypto Moon Application
          </h1>
          <h3 className="text-zinc-500 text-sm md:text-lg text-center md:text-left font-extralight">
            Check cryptocurrency prices.
          </h3>

          {loading ? <HeroInfoLoading /> : ""}
          {data && (
            <div className="flex flex-col font-extralight text-zinc-500 gap-1 mt-10">
              <p className="text-sm md:text-lg text-center md:text-left">
                All cryptocurrencies:{" "}
                <span className="font-bold text-zinc-700">
                  {parseInt(data.active_cryptocurrencies).toLocaleString()}
                </span>
              </p>
              <p className="text-sm md:text-lg text-center md:text-left">
                All exchanges:{" "}
                <span className="font-bold text-zinc-700">
                  {parseInt(data.markets)}
                </span>
              </p>
              <p className="text-sm md:text-lg text-center md:text-left ">
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
