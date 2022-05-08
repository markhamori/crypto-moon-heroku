import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { CoinListLoading } from "../loaders/CoinListLoading";

import { AllCoins } from "../config/Endpoints";

export const CoinList = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const inputEl = useRef(null);

  const fetchMarketData = async () => {
    const { data } = await axios.get(AllCoins());
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  const filteredCoins = data?.filter((coin) =>
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const onChange = (e) => {
    e.preventDefault();
    setSearch(inputEl.current.value);
  };

  return (
    <section id="coins-list" className="relative overflow-x-hidden bg-zinc-100">
      <div className="container">
        <div className="flex flex-col max-h-screen py-10 lg:px-20 md:mb-20">
          <h1 className="absolute left-10 top-10 sm:top-0 md:top-10 font-bold text-zinc-800 text-[80px] md:text-[150px] opacity-5">
            Top 50
          </h1>
          <div className="flex items-center justify-center sm:items-end lg:justify-end flex-col md:flex-row md:mt-10">
            <div className="relative flex items-center justify-center">
              <input
                className="p-1 bg-transparent text-zinc-900 text-sm placeholder-zinc-400 border-2 border-basic rounded-l-md font-light px-2 outline-none"
                type="text"
                name="search"
                ref={inputEl}
                onChange={onChange}
                placeholder="Enter coin symbol..."
              />
              <FontAwesomeIcon
                className="text-zinc-100 border-2 rounded-r-md text-sm border-basic bg-basic p-[0.45rem]"
                icon={faSearch}
              />
            </div>
          </div>

          <div className="grid grid-cols-5 mt-8 md:mt-20 lg:mt-10 lg:mb-5">
            <div className="flex items-center justify-center">
              <h1 className="text-zinc-900 font-bold text-sm md:text-lg py-4">
                Rank
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-zinc-900 font-bold text-sm md:text-lg py-4">
                Symbol
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-zinc-900 font-bold text-sm md:text-lg py-4">
                Name
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-zinc-900 font-bold text-sm md:text-lg py-4">
                Price
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-zinc-900 font-bold text-sm md:text-lg py-4">
                24H%
              </h1>
            </div>
          </div>

          <div className="flex flex-col text-center overflow-x-hidden">
            <div className="flex flex-col flex-1">
              {loading ? <CoinListLoading /> : ""}

              <div className="text-zinc-900 text-lg font-light lg:text-xl space-y-8 md:space-y-16">
                <div className="grid grid-rows-5 gap-6 items-center">
                  {filteredCoins
                    ? filteredCoins.map((coin) => (
                        <div
                          className="flex flex-row items-center justify-center cursor-pointer h-14 hover:bg-zinc-300 transition-all group"
                          key={coin.id}
                          onClick={() => navigate(`coin/${coin.id}`)}
                        >
                          <div className="w-1/4 sm:w-1/5 text-sm md:text-sm lg:text-md">
                            <h1>{coin.market_data.market_cap_rank}</h1>
                          </div>
                          <div className="flex w-1/5 sm:w-1/5 items-center justify-center">
                            <img
                              className="w-8 md:w-10 grayscale group-hover:grayscale-0"
                              src={coin.image.small}
                              alt={`${coin.id}-small`}
                              crossOrigin="true"
                            />
                          </div>
                          <div className="w-1/4 sm:w-1/5 text-sm md:text-sm lg:text-md">
                            <h1>
                              {coin.name}
                              <span className="hidden md:block">
                                ({coin.symbol.toUpperCase()})
                              </span>
                            </h1>
                          </div>
                          <div className="w-1/4 sm:w-1/5 text-sm md:text-sm lg:text-md">
                            {coin.market_data.current_price.usd < 0.0001 ? (
                              <p>
                                {coin.market_data.current_price.usd.toFixed(8)}$
                              </p>
                            ) : (
                              <p>
                                {coin.market_data.current_price.usd.toLocaleString()}
                                $
                              </p>
                            )}
                          </div>
                          <div className="w-1/4 sm:w-1/5 text-sm md:text-sm lg:text-md">
                            {Math.round(
                              coin.market_data
                                .price_change_percentage_1h_in_currency.usd *
                                100
                            ) /
                              100 >
                            0 ? (
                              <div className="flex items-center justify-center">
                                <p className="">
                                  {Math.round(
                                    coin.market_data
                                      .price_change_percentage_24h_in_currency
                                      .usd * 100
                                  ) / 100}
                                  %
                                </p>
                                <FontAwesomeIcon
                                  className="pl-2 w-3 h-4 text-basic"
                                  icon={faChevronUp}
                                />
                              </div>
                            ) : (
                              <div className="flex items-center justify-center">
                                <p className="">
                                  {Math.round(
                                    coin.market_data
                                      .price_change_percentage_24h_in_currency
                                      .usd * 100
                                  ) / 100}
                                  %
                                </p>
                                <FontAwesomeIcon
                                  className="pl-2 w-3 h-4 text-second"
                                  icon={faChevronDown}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-12">
            <h1 className="text-zinc-500 text-md text-center mb-5 md:mb-0 lg:text-left font-light text-md">
              Consuming Coingecko API to get real time cryptocurrency market
              data.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
