import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import { PortfoliosLoading } from "../loaders/PortfoliosLoading";

import { GetPortfolios } from "../config/Endpoints";

export const TopPortfolios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPortfolios = async () => {
    const { data } = await axios.get(GetPortfolios());
    setData(data.portfolios);
    setLoading(false);
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  return (
    <div id="top-portfolios" className="min-h-screen flex flex-col flex-grow">
      <div className="flex flex-col justify-start p-10 h-screen">
        <div className="mb-2">
          <p className="text-xs font-light text-zinc-400">
            Pages / <span className="font-semibold">top-portfolios</span>
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Top portfolios</h1>
          <p className="text-sm">Top portfolios from database by our users.</p>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-5 xl:space-x-10 mt-10">
          {loading ? <PortfoliosLoading /> : ""}

          {data
            ? data.map((data, index) => (
                <div className="pb-5" key={index}>
                  <div className="w-[200px] h-[300px] border-2 rounded-xl border-indigo-400 p-5">
                    <div className="flex flex-col">
                      <h2 className="text-zinc-600 text-base font-bold">
                        Creator:
                      </h2>
                      <p className="text-zinc-500 text-sm font-light">
                        John Doe
                      </p>
                    </div>
                    <div className="flex flex-col pt-2">
                      <h2 className="text-zinc-600 text-base font-bold">
                        Description:
                      </h2>
                      <p className="text-zinc-500 text-sm font-light">
                        {data.portfolioName}
                      </p>
                    </div>
                    <div className="flex flex-col pt-2">
                      <h2 className="text-zinc-600 text-base font-bold">
                        Create date:
                      </h2>
                      <p className="text-zinc-500 text-sm font-light">
                        {data.createdAt.slice(0, 10).replaceAll("-", ".")}
                      </p>
                    </div>
                    <div className="flex flex-col pt-2">
                      <h2 className="text-zinc-600 text-base font-bold">
                        Coins:
                      </h2>
                      {data.coins.map((coin, index) => (
                        <p
                          key={index}
                          className="text-zinc-500 text-sm font-light"
                        >
                          {coin}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-5">
                    <div className="text-indigo-400 text-lg space-x-2 space-y-4">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <span className="text-3xl">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h1 className="text-zinc-900 text-lg md:text-xl font-light">
                      {data.portfolioName}
                    </h1>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
