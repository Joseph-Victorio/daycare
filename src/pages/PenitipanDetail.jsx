import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function DetailPenitipan() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://daycare.test/detail-penitipan.php?id=${id}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Failed to fetch detail:", err));
  }, [id]);

  if (!data) {
    return (
      <section className="py-12 px-4 text-center">
        <p className="text-gray-600">Memuat detail tipe penitipan...</p>
      </section>
    );
  }


  const handleTambahPenitipan = () => {
    const selectedData = {
      foto: data.foto,
      tipe_waktu: data.tipe_waktu,
      umur_min: data.umur_min,
      umur_max: data.umur_max,
    };

    localStorage.setItem("tipe_penitipan", JSON.stringify(selectedData));
    navigate("/formulir");
  };

  return (
    <>
      <Navbar />
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white border border-gray-400 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3 aspect-square bg-gray-300 border border-gray-400 overflow-hidden rounded-md">
            <img
              src={`http://daycare.test/${data.foto}`}
              alt={data.nama}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-bold text-lg text-primary">
              {data.tipe_waktu}
            </h2>
            <h3 className="font-bold text-md mb-3 text-secondary">
              Usia {data.tipe_waktu}
              {" " + data.umur_min}
              {" - " + data.umur_max}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
              {data.deskripsi}
            </p>
            <button
              onClick={handleTambahPenitipan}
              className="bg-gradient-to-t from-primary to-secondary text-white text-xs px-6 py-2 rounded-full cursor-pointer"
            >
              Tambah Tipe Penitipan
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
