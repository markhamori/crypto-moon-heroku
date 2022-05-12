import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import cryptoMoonLogo from "../assets/images/crypto-moon-logo.svg";

export const Footer = () => {
  return (
    <section id="footer">
      <div className="bg-zinc-800 shadow-lg block bottom-0 w-full">
        <div className="container p-10">
          <div className="flex flex-col-reverse sm:flex-row md:space-x-10">
            <div className="flex flex-col flex-1 lg:justify-between">
              <div className="hidden sm:flex lg:flex-row text-center text-md pb-5 text-zinc-200 justify-between lg:py-0">
                <a href="#hero">About</a>
                <a href="#coins-list">Coins list</a>
                <a href="#top-portfolios">Portfolios</a>
              </div>
              <div className="flex flex-col-reverse lg:flex-row justify-between">
                <div className="text-sm text-center sm:text-left mt-4 md:mt-10 lg:mt-0 text-zinc-400">
                  <p>
                    @ 2022{" "}
                    <a href="http://www.hmartx.com" target="_blank">
                      HMARTX.COM
                    </a>{" "}
                    - Mark Hamori
                  </p>
                  <p>All rights reserved.</p>
                </div>
                <div className="flex flex-row lg:ml-5 text-left items-end justify-evenly sm:justify-start sm:space-x-5 lg:text-right text-md lg:space-x-10 text-zinc-600">
                  <p>Terms</p>
                  <p>Privacy</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-700 md:h-54 md:w-[1px] lg:hidden" />
            <div className="flex flex-col lg:flex-row flex-1 justify-end lg:border-l-2 lg:border-zinc-700 lg:border-opacity-50">
              <div className="flex flex-col lg:items-start justify-between text-zinc-300">
                <p className="hidden sm:flex text-justify ml-10 text-sm font-light xl:mx-10">
                  Lörem ipsum öhosade miras. Rent barriärvård åsiktskorridor,
                  tremigon. Rös pönade, ibong pasos.
                </p>
                <div className="flex flex-row text-xl items-center justify-center sm:justify-start text-zinc-200 space-x-5 mb-5 lg:mb-0 mt-5 xl:mt-10 sm:ml-10">
                  <FontAwesomeIcon
                    className="hover:scale-105 hover:text-zinc-400 cursor-pointer"
                    icon={faLinkedinIn}
                  />
                  <FontAwesomeIcon
                    className="hover:scale-105 hover:text-zinc-400 cursor-pointer"
                    icon={faFacebookF}
                  />
                  <FontAwesomeIcon
                    className="hover:scale-105 hover:text-zinc-400 cursor-pointer"
                    icon={faTwitter}
                  />
                  <FontAwesomeIcon
                    className="hover:scale-105 hover:text-zinc-400 cursor-pointer"
                    icon={faInstagram}
                  />
                </div>
              </div>
              <div className="flex flex-none items-center justify-center">
                <img
                  className="w-[130px] hidden lg:block lg:w-[150px]"
                  src={cryptoMoonLogo}
                  alt="own-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
