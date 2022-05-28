import React, { useState, useEffect } from "react";
import axios from "axios";
import { AllExchanges } from "../config/Endpoints";

import Loading from "../loaders/DefaultLoading.svg";

export const Exchanges = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchExchanges = async () => {
    const { data } = await axios.get(AllExchanges());
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchExchanges();
  }, []);

  return (
    <div
      id="exchanges"
      className="min-h-screen flex flex-grow justify-center items-center"
    >
      <div className="flex flex-col h-screen w-full p-10">
        <div className="mb-2">
          <p className="text-xs font-light text-zinc-400">
            Pages / <span className="font-semibold">exchanges</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
          <div className="flex flex-col lg:items-start lg:justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">Exchanges</h1>
              <p className="text-sm">Top 30 exchanges by trust score rank.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap text-zinc-900 text-2xl mt-10 overflow-x-hidden">
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <img className="lg:w-2/8" src={Loading} alt="loading" />
            </div>
          ) : (
            ""
          )}
          {data &&
            data.slice(0, 30).map((d, i) => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col w-[250px] items-center justify-center hover:bg-zinc-200 hover:scale-105 transition-all p-4 group">
                  <img
                    className="max-w-[20px] grayscale group-hover:grayscale-0"
                    src={d.image}
                    alt={d.name}
                  />
                  <h1 className="text-lg">{d.name}</h1>
                  <p className="text-xs mb-1">Since {d.year_established}</p>
                  <span className="px-2 py-[1px] text-sm text-zinc-900 bg-zinc-200 rounded-full">
                    {d.trust_score_rank}
                  </span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
