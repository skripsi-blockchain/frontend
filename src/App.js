// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DataTransaksi from "./pages/DataTransaksi";
import StockBarang from "./pages/StockBarang";
import PembelianStockBarang from "./pages/PembelianStockBarang";
import LaporanKeuangan from "./pages/LaporanKeuangan";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data_transaksi" element={<DataTransaksi />} />
        <Route path="/stock_barang" element={<StockBarang />} />
        <Route path="/pembelian_stock_barang" element={<PembelianStockBarang />} />
        <Route path="/laporan_keuangan" element={<LaporanKeuangan />} />
      </Routes>
    </Router>
  );
};

export default App;
