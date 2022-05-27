import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { SelectedCoin } from "../config/Endpoints";
import { CoinChart } from "../config/Endpoints";
import { chartDays } from "../config/ChartSettings";

import Loading from "../loaders/DefaultLoading.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Coin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [chartData, setChartData] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [days, setDays] = useState(1);
  const [currency, setCurrency] = useState("usd");

  const [loading, setLoading] = useState(true);

  const fetchChartData = async () => {
    const { data } = await axios.get(CoinChart(id, days, currency));
    setChartData(data.prices);
    setLoading(false);
  };

  const fetchSelectedCoin = async () => {
    const { data } = await axios.get(SelectedCoin(id));
    setSelectedCoin(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchChartData();
    fetchSelectedCoin();
  }, [days]);

  return (
    <section id="coin" className="overflow-hidden bg-zinc-100">
      <div className="container lg:px-20">
        <div className="min-h-full md:min-h-screen bg-zinc-100">
          <div className="flex md:justify-end justify-center items-center md:items-end mt-20 px-10 md:px-0">
            <button
              type="button"
              className="h-9 py-1 px-5 md:ml-2 mt-2 md:mt-5 rounded-md font-light text-zinc-700 border-2 border-zinc-700 hover:bg-zinc-700 hover:text-zinc-100 transition-all"
              onClick={() => navigate(`/`)}
            >
              Back to the list
              <FontAwesomeIcon
                className="ml-2 text-second"
                icon={faArrowRight}
              />
            </button>
          </div>
          <div className="relative min-h-full lg:min-h-full flex flex-col items-center justify-center mb-16">
            <div className="flex items-end justify-end lg:items-start">
              <h1 className="w-full lg:w-2/3 text-center lg:text-justify mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                molestias aspernatur, facere quidem ipsa repellendus ducimus,
                voluptate cupiditate aliquid praesentium nesciunt ullam,
                consequuntur illo quae ipsum!
              </h1>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center z-10">
              <div className="flex items-center lg:items-start justify-center flex-col mb-5 py-10 lg:w-1/3 space-y-1">
                {selectedCoin && (
                  <>
                    <div className="flex items-center flex-row space-x-4 group transition-all">
                      <h1 className="text-zinc-900 font-bold text-4xl lg:text-5xl">
                        {id.toUpperCase()}
                      </h1>
                    </div>

                    <img
                      className="w-[150px] lg:w-[250px] grayscale group-hover:grayscale-0 absolute opacity-10 top-0 md:top-32 lg:-top-10 lg:-left-10 xl:top-0 left-0"
                      src={selectedCoin.image.large}
                      alt={`${selectedCoin.symbol}-large-alt`}
                      crossorigin
                    />

                    <h2 className="text-zinc-100 text-xl lg:text-xl font-bold text-left bg-zinc-600 py-2 px-10 rounded-full">
                      {selectedCoin.symbol.toUpperCase()}
                    </h2>
                    <h2 className="text-zinc-100 text-xl lg:text-xl font-thin text-left bg-zinc-600 py-2 px-10 rounded-full">
                      Market Cap Rank:{" "}
                      <span className="font-bold">
                        {selectedCoin.market_cap_rank}
                      </span>
                    </h2>

                    <a
                      className="group"
                      href={selectedCoin.links.homepage[0]}
                      target="_blank"
                    >
                      <p className="text-md text-center md:text-xl font-thin text-zinc-100  bg-zinc-600 py-2 px-10 rounded-full">
                        <span className="group-hover:text-zinc-400 transition-all">
                          <FontAwesomeIcon className="pr-2" icon={faLink} />
                        </span>
                        Webpage
                      </p>
                    </a>
                  </>
                )}
              </div>

              <div className="w-full flex flex-col items-center justify-center lg:w-2/3 py-0 md:pb-10">
                <div className="w-full flex flex-wrap md:flex-row items-center justify-evenly md:mb-10 mb-10 lg:mt-10">
                  {chartDays.map((day) => (
                    <button
                      className="bg-zinc-700 w-32 text-zinc-100 rounded-md p-2 mx-2 text-sm hover:bg-zinc-600 mt-2 md:mt-0 transition-all"
                      key={day.value}
                      onClick={() => {
                        setDays(day.value);
                      }}
                      selected={day.value === days}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
                {!chartData | loading ? (
                  <img
                    className="w-1/4"
                    src={Loading}
                    alt="loading"
                    crossorigin
                  />
                ) : (
                  <Line
                    data={{
                      labels: chartData.map((coin) => {
                        let date = new Date(coin[0]);
                        let time =
                          date.getHours() > 12
                            ? `${date.getHours() - 12}:${date.getMinutes()}PM`
                            : `${date.getHours()}:${date.getMinutes()} AM`;

                        return days === 1 ? time : date.toLocaleDateString();
                      }),

                      datasets: [
                        {
                          data: chartData.map((coin) => coin[1]),
                          label: `Price ( Past ${days} Days ) in ${currency}`,
                          borderColor: "#E74DFB",
                          borderWidth: 2,
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      elements: {
                        point: {
                          radius: 2,
                        },
                      },
                    }}
                  />
                )}
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-12">
              <h1 className="text-zinc-500 text-md text-center mb-5 md:mb-0 lg:text-left font-light text-md">
                Chart.js is awesome!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
