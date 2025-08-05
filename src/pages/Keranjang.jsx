import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Keranjang() {
  return (
    <>
      <Navbar />
      <section className=" py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-linear-to-t from-primary to-secondary text-white text-center font-bold py-3 rounded-t-lg">
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
                <input
                  type="text"
                  placeholder="Nama Anak*"
                  className="border border-gray-400 rounded px-3 py-2 text-sm w-full"
                />
                <select className="border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <option>Jenis Kelamin*</option>
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                </select>
                <input
                  type="date"
                  className="border border-gray-400 rounded px-3 py-2 text-sm w-full"
                />
                <input
                  type="text"
                  placeholder="Tipe Penitipan*"
                  className="border border-gray-400 rounded px-3 py-2 text-sm w-full"
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Data Orang Tua / Wali:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama*"
                  className="border border-gray-400 rounded px-3 py-2 text-sm w-full"
                />
                <textarea
                  placeholder="Alamat*"
                  className="border border-gray-400 rounded px-3 py-2 text-sm w-full md:row-span-2"
                ></textarea>
                <input
                  type="tel"
                  placeholder="Nomor Telepon*"
                  className="border border-gray-400 rounded px-3 py-2 text-sm w-full"
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Detail Pendaftaran:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="border border-gray-400 rounded px-3 py-2 text-sm w-full"
                />
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Upload Foto Kartu Keluarga*
                  </label>
                  <input
                    type="file"
                    className="text-xs text-gray-700 border border-gray-400 rounded px-2 py-1 w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Upload Foto Akte Kelahiran*
                  </label>
                  <input
                    type="file"
                    className="text-xs text-gray-700 border border-gray-400 rounded px-2 py-1 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-linear-to-t from-primary to-secondary text-white px-6 py-2 rounded cursor-pointer ">
                Kirim Formulir
              </button>
            </div>
          </div>

          <div className="bg-linear-to-t from-primary to-secondary rounded-t-lg p-4">
            <div className="flex justify-between text-sm text-white">
              <span>Total Produk</span>
              <span>3</span>
            </div>
            <div className="flex justify-between text-sm text-white">
              <span>Total Harga</span>
              <span className="font-semibold">Rp. 215.000</span>
            </div>
          </div>

          <button className="w-full bg-linear-to-t from-primary to-secondary text-white py-3 cursor-pointer rounded-b-lg font-semibold">
            Pesan Produk
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
