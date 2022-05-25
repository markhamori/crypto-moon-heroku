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
    <section id="hero">
      <div className="container min-h-[80vh] flex items-center justify-center mx-auto lg:mb-10 sm:mt-0 page-transition">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <img
            className="max-w-xs md:max-w-sm"
            src={blockchain}
            alt="hero-image"
          />
          <div className="flex flex-col items-center lg:items-start justify-center lg:w-3/5 2xl:w-2/3">
            <h1 className="text-zinc-100 font-semibold text-center xl:text-left text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-5 md:mt-0">
              Crypto Moon
            </h1>
            <h3 className="text-zinc-500 text-md xl:text-lg max-w-[620px] text-center lg:text-justify font-extralight">
              Lörem ipsum soheten kärösade dirar semins. Tadyliga novellix er,
              metromodern post. Heterotassade epipyktiga. Fisat apostat eller
              dev termotyp mononde.
            </h3>

            {loading ? <HeroInfoLoading /> : ""}
            {data && (
              <div className="flex flex-col md:flex-row mt-10 sm:justify-start sm:items-start sm:flex-row font-light text-zinc-300 gap-5 md:gap-20 lg:gap-10 xl:gap-20 md:text-xl text-center lg:text-left mb-2">
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
            <p className="w-full text-sm xl:text-lg hidden sm:visible sm:flex sm:items-center sm:justify-center lg:justify-start text-zinc-700 uppercase">
              (Real time data using coingecko api)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
