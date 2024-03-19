import React from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

const StockBarang = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="page-header" style={{ fontWeight: "bold" }}>
                DATA STOK BARANG
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
            <style>
              {`
              @media (max-width: 1200px) {
                  .col-lg-1 {
                      margin-top: 10px;
                  }

                  .col-lg-3 {
                      margin-top: 5px;
                  }
              }

              @media (max-width: 767px) {
                  .nav-item {
                      margin-top: 5.2vh;
                  }
              }

              .nav-item {
                  margin-top: 1vh;
              }
            `}
            </style>
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
                placeholder="Nama Barang"
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
                data-target="#barang"
              >
                Tambah Barang
              </button>
            </div>
            <div
              className="modal fade"
              id="barang"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="barangModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4
                      className="modal-title"
                      id="barangModalLabel"
                      style={{ fontWeight: "bold" }}
                    >
                      Tambah Barang
                    </h4>
                  </div>
                  <div className="modal-body">
                    <form id="barangForm">
                      <div className="form-group">
                        <label htmlFor="kodeBarang">Kode Barang:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="kodeBarang"
                          name="kodeBarang"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="tanggalBeli">Tanggal Beli:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="tanggalBeli"
                          name="tanggalBeli"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="jumlahBeli">Jumlah Beli:</label>
                        <input
                          type="number"
                          className="form-control"
                          id="jumlahBeli"
                          name="jumlahBeli"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="hargaSatuan">Harga Satuan:</label>
                        <input
                          type="number"
                          className="form-control"
                          id="hargaSatuan"
                          name="hargaSatuan"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="totalHarga">Total Harga:</label>
                        <input
                          type="number"
                          className="form-control"
                          id="totalHarga"
                          name="totalHarga"
                          required
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick="submitTransaksi()"
                      >
                        Submit
                      </button>
                    </form>
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
                      <th scope="col">Kode Barang</th>
                      <th scope="col">Nama Barang</th>
                      <th scope="col">Jumlah Barang</th>
                      <th scope="col">Harga Satuan</th>
                      {/* <th scope="col">Total Harga</th> */}
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Sample row, you can dynamically populate this part using your data */}
                    <tr>
                      <td>ABC123</td>
                      <td>SABUN BOLONG</td>
                      <td>10</td>
                      <td>50.00</td>
                      {/* <td>500.00</td> */}
                      <td>
                        <button
                          className="btn"
                          style={{ backgroundColor: "#056DE7", color: "white" }}
                        >
                          <i
                            className="fas fa-pencil-alt"
                            data-toggle="modal"
                            data-target="#editBarang"
                          ></i>
                        </button>
                        {/* delete stok barang */}
                        <button className="btn" style={{marginLeft:"10px", backgroundColor:"red", color:"white"}}><i className="fa fa-trash" aria-hidden="true"></i></button>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
                <div
                  className="modal fade"
                  id="editBarang"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="editBarangLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          id="barangModalLabel"
                          style={{ fontWeight: "bold" }}
                        >
                          Edit Stok Barang
                        </h4>
                      </div>
                      <div className="modal-body">
                        <form id="barangForm">
                          <div className="form-group">
                            <label htmlFor="kodeBarang">Kode Barang:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="kodeBarang"
                              value="ABC123"
                              name="kodeBarang"
                              required
                            />
                          </div>
                          

                          <div className="form-group">
                            <label htmlFor="namaBarang">Nama Barang:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="namaBarang"
                              value="sabun bolong"
                              name="namaBarang"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="jumlahBarang">Jumlah Barang:</label>
                            <input
                              type="number"
                              className="form-control"
                              id="jumlahBeli"
                              value="10"
                              name="jumlahBeli"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="hargaSatuan">Harga Satuan:</label>
                            <input
                              type="number"
                              className="form-control"
                              id="hargaSatuan"
                              name="hargaSatuan"
                              value="50.00"
                              required
                            />
                          </div>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick="submitTransaksi()"
                          >
                            Submit
                          </button>
                        </form>
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

export default StockBarang;
