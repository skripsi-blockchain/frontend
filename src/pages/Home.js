// Home.js
import React from "react";

const Home = () => {
  return (
    <div className="app">
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" style={{ backgroundColor: "#4FD6C5" }}>
        <div className="navbar-header">
          <img
            src="img/logo.png"
            alt="Logo"
            style={{ maxWidth: "100%", height: "20px", marginTop: "15px", marginLeft: "20px" }}
            className="d-inline-block align-top"
          />
        </div>
      </nav>
      <div className="container text-center" style={{ marginTop: "15%" }}>
        <img
          src="img/login1.png"
          alt="Logo"
          style={{ width: "60%", height: "40%" }}
          className="d-inline-block align-top"
        />
        <div className="mt-4">
          <a
            href="/data_transaksi"
            className="btn"
            style={{ border: "0.3px solid rgba(0, 0, 0, 0.2)", padding: "5px 10px", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", textDecoration: "none" }}
          >
            <img
              src="img/wallet.png"
              style={{ width: "20px", height: "20px", marginRight: "2px" }}
              alt="Wallet Icon"
            />{" "}
            Connect to Wallet
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
