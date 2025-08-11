import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Galeri() {
  const [dataGaleri, setDataGaleri] = useState([]);

  useEffect(() => {
    const fetchGaleri = async () => {
      try {
        const res = await axios.get("http://daycare.test/galeri.php");
        setDataGaleri(res.data); // pastikan galeri.php mengembalikan JSON array
      } catch (error) {
        console.error("Gagal mengambil data galeri:", error);
      }
    };

    fetchGaleri();
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-linear-to-t from-primary to-secondary text-white text-center font-bold py-3 rounded-t-lg">
            Galeri
          </div>

          <div className="flex justify-center my-8">
            <div className="relative">
              <img src="/logo_daycare.svg" alt="logo" className="w-64" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {dataGaleri.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-full aspect-square border border-gray-400 bg-gray-200 overflow-hidden">
                  <img
                    src={`http://daycare.test/${item.foto}`}
                    alt={item.deskripsi}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-700 mt-1">
                  {item.created_at} - {item.nama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
