import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Penitipan() {
  const tipeData = [
    { label: "FULL DAY 3 bln - 2 thn", img: "/placeholder.png" },
    { label: "FULL DAY 2 thn - 3 thn", img: "/placeholder.png" },
    { label: "FULL DAY 3 thn - 4 thn", img: "/placeholder.png" },
    { label: "FULL DAY 5 thn - 6 thn", img: "/placeholder.png" },
  ];

  return (
    <>
    <Navbar/>
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-linear-to-t from-primary to-secondary text-white text-center font-bold py-3 rounded-t-lg">
          Tipe Penitipan
        </div>
        <div className="border border-gray-400 rounded-b-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-white">
          {tipeData.map((item, i) => (
            <div
              key={i}
              className="border border-primary rounded-lg p-4 flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square bg-gray-300 border border-gray-400 mb-3 rounded-md "></div>
              <h3 className="font-bold text-sm mb-2 text-primary">{item.label}</h3>
              <button className="bg-linear-to-t from-primary to-secondary text-white text-xs px-4 py-1 rounded">
                Lihat Tipe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
