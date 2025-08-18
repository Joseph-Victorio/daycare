import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { SlCalender } from "react-icons/sl";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LaporanHarian = () => {
  const [laporan, setLaporan] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const fetchData = async () => {
    const res = await axios.get("http://daycare.test/laporan.php");
    setLaporan(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredLaporan = selectedDate
    ? laporan.filter(
        (item) =>
          new Date(item.tanggal).toDateString() === selectedDate.toDateString()
      )
    : laporan;

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-white py-6">
        <div className="max-w-3xl mx-auto">
          <div className="mt-6 space-y-4 bg-background p-5">
            <div className="">
              <h2 className="font-semibold text-gray-700 text-right flex gap-5 items-center justify-end mb-2">
                <SlCalender />Pilih Tanggal Laporan Harian
              </h2>
              <div className="flex justify-end">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Pilih tanggal"
                  className="border p-2 rounded w-70 bg-white"
                  popperPlacement="bottom-end"
                  onChangeRaw={(e) => e.preventDefault()}
                />
              </div>
            </div>
            {filteredLaporan.length > 0 ? (
              filteredLaporan.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded shadow flex gap-4"
                >
                  <div className="w-28 h-28 bg-gray-200 flex-shrink-0 flex items-center justify-center rounded">
                    {item.foto ? (
                      <img
                        src={`http://daycare.test/${item.foto}`}
                        alt={item.nama_anak}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">No Foto</span>
                    )}
                  </div>

                  {/* DETAIL LAPORAN */}
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">{item.nama_anak}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(item.tanggal).toLocaleDateString("id-ID", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                      {item.laporan}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-10">
                Tidak ada laporan untuk tanggal ini
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LaporanHarian;
