import React from "react";
import xrpLogo from "../assets/images/xrp-logo.png";
import stellarLogo from "../assets/images/stellar-logo.png";
import polygonLogo from "../assets/images/polygon-logo.png";

export const SelectedCoins = () => {
  return (
    <section id="selected-coins">
      <div className="container px-10 mb-20">
        <div className="flex flex-col items-center justify-center py-10 md:py-0 min-h-full">
          <div className="flex flex-col w-full mt-20">
            <div className="flex flex-col text-zinc-100 justify-center items-center gap-10 md:flex-row lg:items-end lg:gap-40 mt-10">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-1/2 lg:w-2/3"
                  src={polygonLogo}
                  alt="xrp-logo"
                />
                <p className="text-zinc-500 text-xl lg:text-2xl font-semibold my-6">
                  Polygon<span>(MATIC)</span>
                </p>

                <a href="https://www.binance.com" target="_blank">
                  <button
                    type="button"
                    className="text-zinc-900 h-10 w-42 py-2 px-10 rounded-sm bg-basic hover:bg-opacity-80 transition-all"
                  >
                    Buy now
                  </button>
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img className="w-1/2 lg:w-2/3" src={xrpLogo} alt="xrp-logo" />
                <p className="text-zinc-500 text-xl lg:text-2xl font-semibold my-6">
                  Ripple<span>(XRP)</span>
                </p>
                <a href="https://www.binance.com" target="_blank">
                  <button
                    type="button"
                    className="text-zinc-900 h-10 w-42 py-2 px-10 rounded-sm bg-basic hover:bg-opacity-80 transition-all"
                  >
                    Buy now
                  </button>
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-1/2 lg:w-2/3"
                  src={stellarLogo}
                  alt="xrp-logo"
                />
                <p className="text-zinc-500 text-xl lg:text-2xl font-semibold my-6">
                  Stellar<span>(XLM)</span>
                </p>
                <a href="https://www.binance.com" target="_blank">
                  <button
                    type="button"
                    className="text-zinc-900 h-10 w-42 py-2 px-10 rounded-sm bg-basic hover:bg-opacity-80 transition-all"
                  >
                    Buy now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
