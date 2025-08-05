export default function Galeri() {
  const galeriData = [
    { nama: "Jepi", tanggal: "1 Juli 2025" },
    { nama: "Nayara", tanggal: "1 Juli 2025" },
    { nama: "Arsen", tanggal: "1 Juli 2025" },
    { nama: "Jepi", tanggal: "1 Juli 2025" },
    { nama: "Nayara", tanggal: "1 Juli 2025" },
    { nama: "Arsen", tanggal: "1 Juli 2025" }
  ];

  return (
    <section className=" py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold mb-6">Galeri</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {galeriData.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-full aspect-square border border-gray-400 bg-gray-200"></div>
              <p className="text-xs text-gray-600 mt-1">
                {item.tanggal} - {item.nama}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
