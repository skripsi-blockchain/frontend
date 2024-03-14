// DataTransaksi.js
import React from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

const DataTransaksi = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="page-header" style={{ fontWeight: "bold" }}>
                DATA TRANSAKSI PENJUALAN
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <input
                type="date"
                className="form-control"
                placeholder="Tanggal Pembelian"
                id="searchTanggal"
              />
            </div>
            <div className="col-lg-1">
              <button
                className="btn"
                style={{ backgroundColor: "#CA0C0C", color: "white" }}
              >
                Cari
              </button>
            </div>
            <div className="col-lg-5">
              <input
                type="text"
                className="form-control"
                placeholder="Cari Kode Transaksi"
                id="searchKodeTransaksi"
              />
            </div>
            <div className="col-lg-1">
              <button
                className="btn"
                style={{ backgroundColor: "#CA0C0C", color: "white" }}
              >
                Cari
              </button>
            </div>
            <div className="col-lg-2 text-right">
              <button
                className="btn"
                style={{ backgroundColor: "#20564F", color: "white" }}
                data-toggle="modal"
                data-target="#transaksiModal"
              >
                Tambah Transaksi
              </button>
            </div>
            <div
              className="modal fade"
              id="transaksiModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="transaksiModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <h4
                      className="modal-title"
                      id="transaksiModalLabel"
                      style={{ fontWeight: "bold" }}
                    >
                      TAMBAH TRANSAKSI
                    </h4>
                    <br />
                    <table>
                      <tr>
                        <th> Kode Transaksi </th>
                        <th> : </th>
                        <th> 000001 </th>
                      </tr>
                      <tr>
                        <th> Tanggal Transaksi </th>
                        <th> : </th>
                        <th> 01-03-2024 </th>
                      </tr>
                      <tr>
                        <th> Nama Barang </th>
                        <th> : </th>
                        <th>
                          <select>
                            <option value="option1">Sabun</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </th>
                      </tr>
                      <tr>
                        <th> Jumlah Barang </th>
                        <th> : </th>
                        <th>
                          {" "}
                          <input type="number" placeholder="" />{" "}
                        </th>
                      </tr>
                    </table>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#20564F",
                        color: "white",
                        fontSize: "14px",
                      }}
                      data-toggle="modal"
                      data-target="#transaksiModal"
                    >
                      Tambah ke Tabel
                    </button>
                    <table className="table" style={{ marginTop: "1vh" }}>
                      <thead
                        className="thead-light"
                        style={{ backgroundColor: "#dddddd" }}
                      >
                        <tr>
                          <th scope="col">Nama Barang</th>
                          <th scope="col">Jumlah</th>
                          <th scope="col">Harga Satuan</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Sabun</th>
                          <td>2</td>
                          <td>23.000</td>
                          <td>46000</td>
                        </tr>
                        <tr>
                          <th scope="row">Sabun</th>
                          <td>2</td>
                          <td>23.000</td>
                          <td>46000</td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td>Total Transaksi</td>
                          <td>92.000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn"
                      style={{ backgroundColor: "#CA0C0C", color: "white" }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "2vh", marginBottom: "40vh" }}
          >
            <div className="col-lg-12">
              <div className="table-responsive">
                <table
                  className="table table-striped table-bordered table-hover"
                  id="dataTables-example"
                >
                  <thead>
                    <tr>
                      <th>Kode Transaksi</th>
                      <th>Tanggal</th>
                      <th>Kuantitas</th>
                      <th>Jumlah Transaksi</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>2024-03-10</td>
                      <td>5</td>
                      <td>$250.00</td>
                      <td>
                        <button
                          className="btn"
                          style={{ backgroundColor: "#F9E428", color: "white" }}
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button
                          className="btn"
                          style={{ backgroundColor: "#056DE7", color: "white" }}
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                      </td>
                    </tr>
                    {/* More rows */}
                  </tbody>
                </table>
                <div
                  className="modal fade"
                  id="myModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="transaksiModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h4
                          className="modal-title"
                          id="transaksiModalLabel"
                          style={{ fontWeight: "bold" }}
                        >
                          Detail Transaksi
                        </h4>
                        <table style={{ marginTop: "2vh" }}>
                          <tr>
                            <th> Kode Transaksi </th>
                            <th> : </th>
                            <th> 000001 </th>
                          </tr>
                          <tr>
                            <th> Tanggal Transaksi </th>
                            <th> : </th>
                            <th> 01-03-2024 </th>
                          </tr>
                        </table>
                        <table class="table" style={{ marginTop: "1vh" }}>
                          <thead
                            class="thead-light"
                            style={{ backgroundColor: "#dddddd" }}
                          >
                            <tr>
                              <th scope="col">Nama Barang</th>
                              <th scope="col">Jumlah</th>
                              <th scope="col">Harga Satuan</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Sabun</th>
                              <td>2</td>
                              <td>23.000</td>
                              <td>46000</td>
                            </tr>
                            <tr>
                              <th scope="row">Sabun</th>
                              <td>2</td>
                              <td>23.000</td>
                              <td>46000</td>
                            </tr>
                            <tr>
                              <th scope="row"></th>
                              <td></td>
                              <td>Total Transaksi</td>
                              <td>92.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer style={{ textAlign: "center", paddingTop: "25vh" }}>
            <p>2024 &copy; Point of Sale</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DataTransaksi;
