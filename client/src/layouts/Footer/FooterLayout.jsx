import React from "react";

export const FooterLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">{children}</div>
  );
};
