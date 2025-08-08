import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Penitipan() {
  const [tipeData, setTipeData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://daycare.test/tipe-penitipan.php")
      .then((res) => res.json())
      .then((data) => setTipeData(data))
      .catch((err) => console.error("Failed to fetch tipe penitipan:", err));
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-linear-to-t from-primary to-secondary text-white text-center font-bold py-3 rounded-t-lg">
            Tipe Penitipan
          </div>
          <div className="border border-gray-400 rounded-b-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-white">
            {tipeData.map((item) => (
              <div
                key={item.id}
                className="border border-primary rounded-lg p-4 flex flex-col items-center text-center"
              >
                <div className="w-full aspect-square bg-gray-300 border border-gray-400 mb-3 rounded-md overflow-hidden">
                  <img
                    src={`http://daycare.test/${item.foto}`}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm mb-2 text-primary">
                  {item.tipe_waktu}{" " +item.umur_min}{" - " +item.umur_max}
                </h3>
                <button
                  onClick={() => navigate(`/penitipan/${item.id}`)}
                  className="bg-gradient-to-t from-primary to-secondary text-white text-xs px-4 py-1 rounded cursor-pointer"
                >
                  Lihat Tipe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
