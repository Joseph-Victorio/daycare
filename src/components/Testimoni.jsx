import { FaUserCircle, FaStar, FaRegStar } from "react-icons/fa";

export default function Testimoni() {
  const testimoniData = [
    {
      nama: "Budi Santoso",
      sub: "Orang tua Aisyah",
      rating: 5,
      teks: "Anak saya sangat senang di MAFFNA. Metode pengajarannya islami dan pengurusnya sangat ramah. Kemampuan membaca Al-Qur’an anak saya meningkat pesat."
    },
    {
      nama: "Arya",
      sub: "Orang tua Nisayya",
      rating: 5,
      teks: "Laporan harian yang diberikan sangat detail sehingga saya bisa mengetahui perkembangan anak saya setiap hari. Fasilitasnya juga sangat nyaman dan bersih."
    },
    {
      nama: "Sulastri",
      sub: "Orang tua Caca",
      rating: 5,
      teks: "Anak saya yang pemalu sekarang menjadi lebih aktif bersosialisasi setelah bergabung dengan MAFFNA. Sistem monitoringnya sangat membantu kami bekerja dengan tenang."
    },
    {
      nama: "Syamirah",
      sub: "Orang tua Oman",
      rating: 5,
      teks: "Anak saya sangat senang di MAFFNA. Metode pengajarannya islami dan pengurusnya sangat ramah. Kemampuan membaca Al-Qur’an anak saya meningkat pesat."
    },
    {
      nama: "Bambang",
      sub: "Orang tua Cantika",
      rating: 5,
      teks: "Laporan harian yang diberikan sangat detail sehingga saya bisa mengetahui perkembangan anak saya setiap hari. Fasilitasnya juga sangat nyaman dan bersih."
    },
    {
      nama: "Bowok",
      sub: "Orang tua Namirah",
      rating: 5,
      teks: "Anak saya yang pemalu sekarang menjadi lebih aktif bersosialisasi setelah bergabung dengan MAFFNA. Sistem monitoringnya sangat membantu kami bekerja dengan tenang."
    }
  ];

  return (
    <section className=" py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-bold mb-8">Apa Kata Mereka?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimoniData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-300 shadow-sm p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-3">
                <FaUserCircle className="text-4xl text-gray-500" />
                <div>
                  <h3 className="font-semibold text-sm">{item.nama}</h3>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-3">
                {Array.from({ length: 5 }).map((_, idx) =>
                  idx < item.rating ? <FaStar key={idx} /> : <FaRegStar key={idx} />
                )}
              </div>
              <p className="text-gray-700 text-sm">"{item.teks}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
