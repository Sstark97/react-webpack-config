import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../assets/styles/containers/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>

      <div className="main">
        <Main children={children} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
