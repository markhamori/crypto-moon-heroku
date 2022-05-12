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
    <section id="top-portfolios">
      <div className="container">
        <div className="flex flex-col items-center justify-center p-10 min-h-full md:min-h-screen">
          <h1 className="text-3xl text-center sm:text-4xl font-bold text-zinc-100 py-10">
            Portfolios from database
          </h1>
          <div className="flex flex-col items-center justify-center md:flex-row md:space-x-5 xl:space-x-10 mt-10">
            {loading ? <PortfoliosLoading /> : ""}

            {data
              ? data.map((data, index) => (
                  <div className="pb-5" key={data[index]}>
                    <div className="w-64 h-96 md:w-[240px] lg:w-[280px] lg:h-[450px] border-2 rounded-xl border-basic p-5">
                      <div className="flex flex-col text-center">
                        <h2 className="text-zinc-100 text-lg font-bold">
                          Creator:
                        </h2>
                        <p className="text-zinc-300 text-sm font-light">
                          John Doe
                        </p>
                      </div>
                      <div className="flex flex-col text-center pt-2">
                        <h2 className="text-zinc-100 text-lg font-bold">
                          Description:
                        </h2>
                        <p className="text-zinc-300 text-sm font-light">
                          {data.portfolioName}
                        </p>
                      </div>
                      <div className="flex flex-col text-center pt-2">
                        <h2 className="text-zinc-100 text-lg font-bold">
                          Create date:
                        </h2>
                        <p className="text-zinc-300 text-sm font-light">
                          {data.createdAt.slice(0, 10).replaceAll("-", ".")}
                        </p>
                      </div>
                      <div className="flex flex-col text-center pt-2">
                        <h2 className="text-zinc-100 text-lg font-bold">
                          Coins:
                        </h2>
                        {data.coins.map((coin, index) => (
                          <p
                            key={coin[index]}
                            className="text-zinc-300 text-sm font-light"
                          >
                            {coin}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-5">
                      <h1 className="text-zinc-200 text-lg md:text-xl font-light">
                        {data.portfolioName}
                      </h1>
                      <div className="text-basic text-lg space-x-2 space-y-4">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span className="text-3xl">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div className="relative w-full flex items-center justify-center mt-12">
            <h1 className="text-zinc-500 text-md text-center mb-5 md:mb-0 md:text-left font-extralight text-md mr-2">
              Consuming data from backend{" "}
              <span className="font-semibold">
                <a
                  href="https://documenter.getpostman.com/view/16898158/UVysxFzY"
                  target="_blank"
                >
                  endpoint(s)
                </a>
              </span>
              .
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
