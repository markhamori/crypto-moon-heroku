import React from "react";

export const HeaderLayout = ({ children }) => {
  return (
    <div className="min-h-full md:min-h-screen flex flex-col">{children}</div>
  );
};
