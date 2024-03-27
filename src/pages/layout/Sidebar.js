import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(""); // State untuk menyimpan link aktif

  useEffect(() => {
    // Mendapatkan path URL saat ini
    const currentPath = window.location.pathname;
    
    // Mengatur link aktif berdasarkan path URL saat ini
    setActiveLink(currentPath);
  }, []); // useEffect hanya akan dipanggil sekali saat komponen dimuat pertama kali

  return (
    <aside className="sidebar navbar-default" role="navigation" style={{position:"fixed"}}>
      <div className="sidebar-nav navbar-collapse" style={{ marginLeft: "1vh" }}>
        <ul className="nav" id="side-menu" >
          <li className={`nav-item ${activeLink === "/data_transaksi" ? "active" : ""}`}>
            <a href="data_transaksi" className="nav-link" aria-current="page" style={{ color: "black" }}>
              <i className="fa fa-tasks"></i> Data Transaksi
            </a>
          </li>
          <li className={`mt-2 nav-item ${activeLink === "/stock_barang" ? "active" : ""}`}>
            <a href="stock_barang" className="nav-link link-dark" style={{ color: "black", }}>
              <i className="fa fa-inbox"></i> Stock Barang
            </a>
          </li>
          <li className={`mt-2 nav-item ${activeLink === "/pembelian_stock_barang" ? "active" : ""}`}>
            <a href="pembelian_stock_barang" className="nav-link link-dark" style={{ color: "black" }}>
              <i className="fa fa-shopping-basket"></i> Pembelian Stock Barang
            </a>
          </li>
          <li className={`mt-2 nav-item ${activeLink === "/laporan_keuangan" ? "active" : ""}`}>
            <a href="laporan_keuangan" className="nav-link link-dark" style={{ color: "black" }}>
              <i className="fa fa-bar-chart"></i> Laporan Keuangan
            </a>
          </li>
          <li className={`nav-item mt-2 ${activeLink === "/" ? "active" : ""}`}>
            <a href="/" className="nav-link link-dark" style={{ color: "black" }}>
              <i className="fa fa-sign-out"></i> Keluar
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
