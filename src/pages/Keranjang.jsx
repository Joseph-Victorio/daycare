import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaUser, FaPhone, FaCalendarAlt, FaHome, FaFileUpload } from "react-icons/fa";
import { MdWc, MdCategory } from "react-icons/md";

export default function Keranjang() {
  return (
    <>
      <Navbar />
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-gradient-to-t from-primary to-secondary text-white text-center font-bold py-3 rounded-t-lg">
            Keranjang
          </div>

          <div className="bg-white border border-gray-400 rounded-lg p-4 flex items-center gap-4">
            <div className="w-24 aspect-square bg-gray-300 border border-gray-400"></div>
            <h3 className="font-bold">Full Day Usia 3 Bulan – 2 Tahun</h3>
          </div>

          <div className="bg-white border border-gray-400 rounded-lg p-6 space-y-6">
            <h2 className="font-bold text-lg text-primary">Formulir Pendaftaran</h2>

            <div>
              <h3 className="font-semibold mb-3">Data Anak:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Nama Anak*"
                    className="outline-none w-full"
                  />
                </div>
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <MdWc className="text-gray-500 mr-2" />
                  <select className="outline-none w-full">
                    <option>Jenis Kelamin*</option>
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <FaCalendarAlt className="text-gray-500 mr-2" />
                  <input
                    type="date"
                    className="outline-none w-full"
                  />
                </div>
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <MdCategory className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Tipe Penitipan*"
                    className="outline-none w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Data Orang Tua / Wali:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Nama*"
                    className="outline-none w-full"
                  />
                </div>
                <div className="flex items-start border border-gray-400 rounded px-3 py-2 text-sm w-full md:row-span-2">
                  <FaHome className="text-gray-500 mr-2 mt-1" />
                  <textarea
                    placeholder="Alamat*"
                    className="outline-none w-full resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <FaPhone className="text-gray-500 mr-2" />
                  <input
                    type="tel"
                    placeholder="Nomor Telepon*"
                    className="outline-none w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Detail Pendaftaran:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <FaCalendarAlt className="text-gray-500 mr-2" />
                  <input
                    type="date"
                    className="outline-none w-full"
                  />
                </div>
                <div className="border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <label className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                    <FaFileUpload /> Upload Foto Kartu Keluarga*
                  </label>
                  <input type="file" className="text-xs w-full" />
                </div>
                <div className="border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <label className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                    <FaFileUpload /> Upload Foto Akte Kelahiran*
                  </label>
                  <input type="file" className="text-xs w-full" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-t from-primary to-secondary text-white px-6 py-2 rounded cursor-pointer">
                Kirim Formulir
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-t from-primary to-secondary rounded-t-lg p-4">
            <div className="flex justify-between text-sm text-white">
              <span>Total Produk</span>
              <span>3</span>
            </div>
            <div className="flex justify-between text-sm text-white">
              <span>Total Harga</span>
              <span className="font-semibold">Rp. 215.000</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-t from-primary to-secondary text-white py-3 cursor-pointer rounded-b-lg font-semibold">
            Pesan Produk
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
