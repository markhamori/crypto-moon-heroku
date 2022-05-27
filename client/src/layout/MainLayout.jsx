import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="debug-screens min-h-screen overflow-hidden">{children}</div>
  );
};

export default MainLayout;
