import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaHome,
  FaFileUpload,
} from "react-icons/fa";
import { MdWc, MdCategory } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

export default function Formulir() {
  const [formData, setFormData] = useState({
    nama_anak: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    tipe_penitipan: "",
    nama_wali: "",
    alamat_wali: "",
    telepon_wali: "",
    tanggal_pendaftaran: "",
    kk_foto: null,
    akte_foto: null,
  });
  const [tipeOptions, setTipeOptions] = useState([]);

  useEffect(() => {
    const fetchTipeOptions = async () => {
      try {
        const res = await axios.get("http://daycare.test/tipe-penitipan.php");
        setTipeOptions(res.data);
      } catch (error) {
        console.error("Gagal memuat tipe penitipan:", error);
      }
    };

    fetchTipeOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };
  useEffect(() => {
    const stored = localStorage.getItem("tipe_penitipan");
    if (stored) {
      const parsed = JSON.parse(stored);
      setFormData((prev) => ({
        ...prev,
        tipe_waktu: parsed.tipe_waktu,
        umur_min: parsed.umur_min,
        umur_max: parsed.umur_max,
        foto: parsed.foto,
      }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      await axios.post("http://daycare.test/pendaftaran.php", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Formulir berhasil dikirim!");
      localStorage.removeItem("tipe_penitipan");

      const { data } = await axios.post(
        "http://daycare.test/get-snap-token.php",
        {
          amount: 100000,
          name: formData.nama_wali,
        }
      );

      if (data.token) {
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            toast.success("Pembayaran berhasil!");
            setTimeout(() => {
              window.location.href = "/";
            }, 2000);
          },
          onPending: function (result) {
            toast("Menunggu pembayaran...");
          },
          onError: function (result) {
            toast.error("Pembayaran gagal.");
          },
          onClose: function () {
            toast("Kamu belum menyelesaikan pembayaran.");
          },
        });
      } else {
        toast.error("Gagal memulai pembayaran.");
      }
    } catch (error) {
      toast.error("Gagal mengirim formulir.");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-gradient-to-t from-primary to-secondary text-white text-center font-bold py-3 rounded-t-lg">
            Formulir
          </div>
          {formData.tipe_waktu && (
            <div className="bg-white p-4 rounded-xl mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-md bg-white border border-gray-400 overflow-hidden">
                  {formData.foto ? (
                    <img
                      src={`http://daycare.test/${formData.foto}`}
                      alt="Foto Tipe Penitipan"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                      No image
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Tipe Penitipan yang di pilih
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {formData.tipe_waktu} Usia {formData.umur_min} –{" "}
                    {formData.umur_max}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("tipe_penitipan");
                }}
                className="text-sm px-3 py-1 rounded-full bg-white border border-gray-400 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="bg-white border border-gray-400 rounded-lg p-6 space-y-6"
          >
            <h2 className="font-bold text-lg text-primary">
              Formulir Pendaftaran
            </h2>

            <div>
              <h3 className="font-semibold mb-3">Data Anak:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="nama_anak"
                    placeholder="Nama Anak*"
                    className="outline-none w-full"
                    value={formData.nama_anak}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <MdWc className="text-gray-500 mr-2" />
                  <select
                    name="jenis_kelamin"
                    className="outline-none w-full"
                    value={formData.jenis_kelamin}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Jenis Kelamin*</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <FaCalendarAlt className="text-gray-500 mr-2" />
                  <input
                    type="date"
                    name="tanggal_lahir"
                    className="outline-none w-full"
                    value={formData.tanggal_lahir}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <MdCategory className="text-gray-500 mr-2" />
                  <select
                    name="tipe_penitipan"
                    className="outline-none w-full bg-transparent"
                    value={formData.tipe_penitipan}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Pilih Tipe Penitipan*
                    </option>
                    {tipeOptions.map((tipe) => (
                      <option key={tipe.id} value={tipe.tipe_waktu}>
                        {tipe.tipe_waktu} Usia {tipe.umur_min} – {tipe.umur_max}{" "}
                        Tahun
                      </option>
                    ))}
                  </select>
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
                    name="nama_wali"
                    placeholder="Nama*"
                    className="outline-none w-full"
                    value={formData.nama_wali}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-start border border-gray-400 rounded px-3 py-2 text-sm w-full md:row-span-2">
                  <FaHome className="text-gray-500 mr-2 mt-1" />
                  <textarea
                    name="alamat_wali"
                    placeholder="alamat_wali*"
                    className="outline-none w-full resize-none"
                    value={formData.alamat_wali}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="flex items-center border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <FaPhone className="text-gray-500 mr-2" />
                  <input
                    type="tel"
                    name="telepon_wali"
                    placeholder="Nomor telepon_wali*"
                    className="outline-none w-full"
                    value={formData.telepon_wali}
                    onChange={handleChange}
                    required
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
                    name="tanggal_pendaftaran"
                    className="outline-none w-full"
                    value={formData.tanggal_pendaftaran}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <label className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                    <FaFileUpload /> Upload Foto Kartu Keluarga*
                  </label>
                  <input
                    type="file"
                    name="kk_foto"
                    className="text-xs w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="border border-gray-400 rounded px-3 py-2 text-sm w-full">
                  <label className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                    <FaFileUpload /> Upload Foto akte_foto Kelahiran*
                  </label>
                  <input
                    type="file"
                    name="akte_foto"
                    className="text-xs w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-t from-primary to-secondary text-white px-6 py-2 rounded cursor-pointer">
                Kirim Formulir
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
