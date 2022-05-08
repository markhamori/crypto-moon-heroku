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
    <section id="hero relative overflow-hidden">
      <div className="container flex items-center justify-center px-20 lg:mb-20 min-h-[80vh] mt-10 md:mt-0">
        <div className="flex flex-col-reverse md:flex-col xl:flex-row justify-center items-center">
          <img
            className="w-[550px] 2xl:w-[700px] block mt-10 md:mt-0"
            src={blockchain}
            alt="hero-image"
          />
          <div className="flex flex-col items-center xl:items-start justify-center lg:w-3/5 2xl:w-2/3">
            <h1 className="text-zinc-100 font-semibold text-center xl:text-left text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-5 sm:mt-32 md:mt-0">
              Crypto Moon
            </h1>
            <h3 className="text-zinc-500 text-md text-center xl:text-justify 2xl:text-xl font-extralight w-full">
              Lörem ipsum soheten kärösade dirar semins. Tadyliga novellix er,
              metromodern post. Heterotassade epipyktiga. Fisat apostat eller
              dev termotyp mononde.
            </h3>

            {loading ? <HeroInfoLoading /> : ""}
            {data && (
              <div className="hidden sm:flex sm:mt-10 sm:justify-start sm:items-start sm:flex-row font-light text-zinc-300 gap-20 md:text-xl text-center xl:text-left md:mb-12 lg:mb-10">
                <p>
                  Cryptos:{" "}
                  <span className="font-bold">
                    {parseInt(data.active_cryptocurrencies).toLocaleString()}
                  </span>
                </p>
                <p>
                  Exchanges:{" "}
                  <span className="font-bold">{parseInt(data.markets)}</span>
                </p>
                <p>
                  Market Cap:{" "}
                  <span className="font-bold">
                    {parseInt(data.total_market_cap.usd).toLocaleString()}$
                  </span>
                </p>
              </div>
            )}
            <p className="w-full text-md hidden sm:visible sm:flex sm:items-center sm:justify-center text-zinc-700 uppercase">
              (Real time data using coingecko api.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};