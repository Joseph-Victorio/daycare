import { useEffect, useState } from "react";

export default function Galeri() {
  const [galeriData, setGaleriData] = useState([]);

  useEffect(() => {
    fetch("http://daycare.test/galeri.php")
      .then((res) => res.json())
      .then((data) => {
        setGaleriData(data);
      })
      .catch((err) => console.error("Failed to fetch galeri:", err));
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold mb-6">Galeri</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {galeriData.map((item, i) => (
            <div key={i} className="flex flex-col">
              {/* Preview foto */}
              <div className="w-full aspect-square border border-gray-400 bg-gray-100 overflow-hidden">
                <img
                  src={`http://daycare.test/${item.foto}`}
                  alt={item.nama}
                  className="w-full h-full object-cover"
                />
              </div>

      
              <p className="text-xs text-gray-600 mt-1">
                {item.created_at} - {item.nama}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
