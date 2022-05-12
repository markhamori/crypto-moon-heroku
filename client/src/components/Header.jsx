import React, { useState } from "react";
import cryptoMoonLogo from "../assets/images/crypto-moon-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);

    document.body.style.overflow = "unset";
  };

  const showSidebar = () => {
    setIsOpen(true);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <header id="header">
      <div className="container px-10 pt-10 lg:px-20 lg:pt-10 lg:pb-0">
        <div className="flex justify-end sm:justify-between items-center lg:flex-row md:items-center">
          <div className="flex w-full">
            <img
              className="hidden md:flex md:w-[100px] md:h-[90px] xl:w-[130px] xl:h-[120px]"
              src={cryptoMoonLogo}
              alt="crypto-moon-logo"
            />
            <nav className="md:flex-1 flex items-center justify-end">
              <ul className="hidden md:flex lg:flex-row text-sm xl:text-md text-zinc-100 lg:gap-2 xl:gap-12">
                <a href="#contact">
                  <li className="py-2 px-10 xl:ml-12 cursor-pointer rounded-md hover:bg-zinc-800 transition-all">
                    Contact
                  </li>
                </a>
                <a href="#top-portfolios">
                  <li className="py-2 px-10 cursor-pointer rounded-md hover:bg-zinc-800 transition-all">
                    Portfolios
                  </li>
                </a>
                <a href="#coin-list">
                  <li className="py-2 px-10 cursor-pointer bg-basic rounded-md text-zinc-900 hover:bg-[#74e7fc] transition-all">
                    Coin list
                  </li>
                </a>
              </ul>
            </nav>
          </div>
          <FontAwesomeIcon
            className="text-basic text-3xl md:hidden cursor-pointer"
            icon={faBars}
            onClick={() => showSidebar()}
          />
        </div>
      </div>
      {isOpen ? (
        <div className="fixed left-0 top-0 bg-zinc-900 flex h-screen w-full flex-col items-center z-50 overflow-hidden">
          <div className="container h-full p-10">
            <nav className="flex flex-col items-center">
              <div className="flex w-full flex-row">
                <div className="flex flex-1 justify-end mb-32">
                  <FontAwesomeIcon
                    className="text-second text-4xl cursor-pointer "
                    icon={faXmark}
                    onClick={() => closeSidebar()}
                  />
                </div>
              </div>
              <ul className="flex flex-col text-2xl font-light text-zinc-100 text-center gap-10">
                <a href="#contact" onClick={() => closeSidebar()}>
                  <li className="py-2 px-10 xl:ml-12 cursor-pointer hover:bg-zinc-800 transition-all">
                    Contact
                  </li>
                </a>
                <a href="#coin-list" onClick={() => closeSidebar()}>
                  <li className="py-2 px-10 cursor-pointer hover:bg-zinc-800 transition-all">
                    Coin list
                  </li>
                </a>
                <a href="#top-portfolios" onClick={() => closeSidebar()}>
                  <li className="py-2 px-10 cursor-pointer hover:bg-zinc-800 transition-all">
                    Portfolios
                  </li>
                </a>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};
