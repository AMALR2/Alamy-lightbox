import React from "react";
import Header from "./header";

export const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

