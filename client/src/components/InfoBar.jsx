import React, { useState } from "react";

import cryptoMoonLogo from "../assets/images/crypto-moon-logo.svg";

export const InfoBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="info-bar" onClick={() => setOpen(!open)}>
      <div
        className={`flex flex-col items-center justify-start pt-5 ${
          open ? "w-screen" : "w-52"
        } h-screen bg-zinc-200 rounded-tr-md border-r-[1.5px] border-zinc-300`}
      >
        <div className="flex flex-col items-center justify-center space-y-10">
          <img
            className="block max-w-[80px]"
            src={cryptoMoonLogo}
            alt="crypto-moon-logo"
          />
        </div>
      </div>
    </section>
  );
};
