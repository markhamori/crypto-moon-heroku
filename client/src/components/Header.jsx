import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <header id="header" className="border-b-2 border-zinc-800">
      <div className="container flex h-20 w-full">
        <div className="flex flex-row items-center">
          <div className="hidden md:flex items-center flex-row">
            <Link to="/">
              <img
                className="block max-w-[80px]"
                src={cryptoMoonLogo}
                alt="crypto-moon-logo"
              />
            </Link>
            <h1 className="text-zinc-100 text-lg md:mr-10">CryptoMoon</h1>
          </div>
          <div className="flex flex-grow justify-end">
            <FontAwesomeIcon
              className="flex md:hidden text-zinc-100 text-2xl"
              icon={faBars}
              onClick={() => showSidebar()}
            />
          </div>

          <nav>
            <ul className="hidden md:flex flex-row space-x-5">
              <Link to="/coin-list">
                <li className="text-sm px-5 py-1 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 transition-all">
                  Coin list
                </li>
              </Link>
              <Link to="/top-portfolios">
                <li className="text-sm px-5 py-1 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 transition-all">
                  Portfolios
                </li>
              </Link>
              <Link to="/contact">
                <li className="text-sm px-5 py-1 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 transition-all">
                  Exchanges
                </li>
              </Link>
              <Link to="/contact">
                <li className="text-sm px-5 py-1 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 transition-all">
                  Contact
                </li>
              </Link>
            </ul>
          </nav>
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
