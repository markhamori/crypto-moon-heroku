import React from "react";

export const FooterLayout = ({ children }) => {
  return (
    <div className="min-h-full flex flex-col justify-between">{children}</div>
  );
};
