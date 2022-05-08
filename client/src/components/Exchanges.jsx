import React, { useState, useEffect } from "react";
import axios from "axios";
import { AllExchanges } from "../config/Endpoints";

import creditCard from "../assets/images/credit-card.svg";
import guardLogo from "../assets/images/guard-logo.svg";
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
    <div className="relative">
      <div className="absolute left-0 top-0 w-full h-screen blur-[300px] opacity-20 bg-basic" />
      <section id="exchanges" className="relative bg-zinc-900">
        <div className="container">
          <div className="flex flex-col justify-center min-h-screen">
            <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
              <div className="flex flex-col lg:items-start lg:justify-between">
                <div className="">
                  <h1 className="text-zinc-100 font-semibold text-center lg:text-left text-3xl lg:text-5xl mb-5 mt-10">
                    Exchanges
                  </h1>
                  <h2 className="text-zinc-400 text-xl lg:text-xl lg:w-2/3 font-light text-center lg:text-left w-full">
                    Lörem ipsum kroment teofoni emedan ed. Jyl wikiläcka, fast
                    ultrabir, och terangar. Ber tåmurad dengen.{" "}
                  </h2>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-evenly">
                  <div className="flex w-full items-center justify-evenly mt-20 lg:mt-10">
                    <h2 className="absolute text-xl lg:text-2xl text-teal-500 py-1 px-3 rounded bg-zinc-800">
                      Reliable Service
                    </h2>
                    <img
                      className="w-32 lg:w-32"
                      src={guardLogo}
                      alt="guard-logo"
                    />
                  </div>
                  <div className="flex w-full items-center justify-evenly mt-20 lg:mt-10">
                    <h2 className="absolute text-2xl lg:text-4xl text-second py-1 px-3 rounded bg-zinc-200">
                      Safe & Secure
                    </h2>
                    <img
                      className="w-32 lg:w-fit"
                      src={guardLogo}
                      alt="guard-logo"
                    />
                  </div>
                  <div className="flex w-full items-center justify-evenly mt-20 lg:mt-10">
                    <h2 className="absolute text-xl lg:text-2xl text-teal-500 py-1 px-3 rounded bg-zinc-800">
                      Trustworthy
                    </h2>
                    <img
                      className="w-32 lg:w-32"
                      src={guardLogo}
                      alt="guard-logo"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="hidden lg:w-full lg:h-full lg:block"
                  src={creditCard}
                  alt="credit-card"
                />
              </div>
            </div>
            <div className="flex flex-col text-zinc-200 justify-evenly text-2xl md:flex-row mb-12 md:mb-0 md:mt-10 lg:mt-20 lg:mb-16">
              {loading ? (
                <div className="w-full flex items-center justify-center">
                  <img className="lg:w-2/8" src={Loading} alt="loading" />
                </div>
              ) : (
                ""
              )}
              {data &&
                data.slice(0, 3).map((d, i) => (
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                  >
                    <div className="w-full inline-flex flex-col flex-1 items-center justify-center">
                      <h1 className="text-2xl lg:text-3xl mt-4">{d.name}</h1>
                      <p className="text-zinc-500 text-sm mb-4 uppercase">
                        Trust Score
                      </p>
                      <span className="px-4 py-1 text-2xl lg:text-3xl bg-teal-400 text-zinc-800 rounded">
                        {d.trust_score}
                      </span>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
