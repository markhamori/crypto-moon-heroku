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
    <div
      id="hero"
      className="min-h-screen flex items-center justify-center flex-grow p-10"
    >
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-zinc-900 font-semibold text-8xl leading-2 mb-5">
            Crypto Moon
          </h1>
          <h3 className="text-zinc-500 text-md xl:text-lg max-w-[620px] text-center font-extralight">
            Lörem ipsum soheten kärösade dirar semins. Tadyliga novellix er,
            metromodern post. Heterotassade epipyktiga. Fisat apostat eller dev
            termotyp mononde.
          </h3>

          {loading ? <HeroInfoLoading /> : ""}
          {data && (
            <div className="flex flex-col md:flex-row mt-10 sm:justify-start sm:items-start sm:flex-row font-light text-zinc-700 gap-5 md:gap-20 lg:gap-10 xl:gap-20 md:text-xl text-center lg:text-left mb-2">
              <p className="text-sm xl:text-lg">
                Cryptos:{" "}
                <span className="font-bold">
                  {parseInt(data.active_cryptocurrencies).toLocaleString()}
                </span>
              </p>
              <p className="text-sm xl:text-lg">
                Exchanges:{" "}
                <span className="font-bold">{parseInt(data.markets)}</span>
              </p>
              <p className="text-sm xl:text-lg">
                Market Cap:{" "}
                <span className="font-bold">
                  {parseInt(data.total_market_cap.usd).toLocaleString()}$
                </span>
              </p>
            </div>
          )}
          <p className="text-sm text-center text-zinc-700 uppercase">
            (Real time data using coingecko api)
          </p>
        </div>
      </div>
    </div>
  );
};
