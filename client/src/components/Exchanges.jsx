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
              <p className="text-sm">Top 30 exchanges by trust score.</p>
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
                <div className="flex flex-col w-[250px] items-center justify-center hover:bg-zinc-200 transition-all p-2">
                  <h1 className="text-lg">{d.name}</h1>

                  <p className="text-zinc-500 text-xs mb-2 uppercase">
                    Trust Score
                  </p>
                  <span className="px-[12px] py-[1px] text-lg bg-indigo-400 text-zinc-100 rounded">
                    {d.trust_score}
                  </span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
