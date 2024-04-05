import React, { useRef } from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import { ReactToPrint } from "react-to-print";

const LaporanKeuangan = () => {
  const componentRef = useRef(null);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div id="page-wrapper">
        <div className="container-fluid" style={{ marginTop: "5vh" }}>
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-primary">Print disini</button>
            )}
            content={() => componentRef.current}
            documentTitle="new document"
            pageStyle="print"
          />
          <div ref={componentRef}>
            {/* Your content here */}
            <table
              className="table table-striped table-bordered table-hover"
              id="dataTables-example"
            >
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Tanggal</th>
                  <th>Kuantitas</th>
                  <th>Jumlah Transaksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>23-07-2023</td>
                  <td>5</td>
                  <td>$250.00</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>24-07-2023</td>
                  <td>3</td>
                  <td>$150.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporanKeuangan;
