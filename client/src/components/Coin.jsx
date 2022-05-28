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
    <div id="coin" className="h-screen overflow-hidden p-10 flex-grow">
      <div className="flex justify-between">
        <p className="text-xs font-light text-zinc-400">
          Pages / coin-list / coin / <span className="font-semibold">{id}</span>
        </p>
        <button
          type="button"
          className="h-8 px-[1.2rem] font-light bg-indigo-500 rounded-full text-zinc-100 hover:bg-indigo-400 transition-all"
          onClick={() => navigate(`/coin-list`)}
        >
          Back to the list
        </button>
      </div>

      <div className="relative flex flex-col items-center justify-center mt-2">
        <div className="w-full flex flex-col">
          <div className="flex flex-col justify-center items-start uppercase">
            {selectedCoin && (
              <>
                <div className="flex items-center flex-row space-x-4 group transition-all">
                  <h1 className="text-3xl font-bold">
                    {id}{" "}
                    <span className="font-extralight">
                      {selectedCoin.symbol}
                    </span>
                  </h1>
                </div>

                <h2 className="text-zinc-800 text-sm">
                  Market Cap Rank:{" "}
                  <span className="font-bold text-zinc-100 bg-indigo-400 rounded-full px-2">
                    {selectedCoin.market_cap_rank}
                  </span>
                </h2>

                <a href={selectedCoin.links.homepage[0]} target="_blank">
                  <p className="text-sm text-center text-zinc-500">Website</p>
                </a>
              </>
            )}
          </div>

          <div className="w-full flex flex-col items-center mt-5">
            <div className="w-4/5">
              {!chartData | loading ? (
                <img
                  className="w-1/4"
                  src={Loading}
                  alt="loading"
                  crossOrigin="true"
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
                        borderColor: "#818CF8",
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
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center space-x-5 mt-5">
        {chartDays.map((day) => (
          <button
            className="h-8 px-[2rem] text-zinc-100 text-sm rounded-full bg-indigo-500 hover:bg-indigo-400 transition-all"
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
    </div>
  );
};
