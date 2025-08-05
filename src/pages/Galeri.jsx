import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Galeri() {
  const dataGaleri = [
    { tanggal: "1 Juli 2025", nama: "Jepi" },
    { tanggal: "1 Juli 2025", nama: "Nayara" },
    { tanggal: "1 Juli 2025", nama: "Arsen" },
    { tanggal: "1 Juli 2025", nama: "Jepi" },
    { tanggal: "1 Juli 2025", nama: "Nayara" },
    { tanggal: "1 Juli 2025", nama: "Arsen" },
    { tanggal: "1 Juli 2025", nama: "Jepi" },
    { tanggal: "1 Juli 2025", nama: "Nayara" },
    { tanggal: "1 Juli 2025", nama: "Arsen" },
  ];

  return (
    <>
    <Navbar/>
      <section className=" py-12 px-4">
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
                <div className="w-full aspect-square bg-linear-to-t from-primary to-secondary border border-gray-400"></div>
                <p className="text-xs text-gray-700 mt-1">
                  {item.tanggal} - {item.nama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
