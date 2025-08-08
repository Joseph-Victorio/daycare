import { useEffect, useState } from "react";
import { FaUserCircle, FaStar, FaRegStar } from "react-icons/fa";

export default function Testimoni() {
  const [testimoniData, setTestimoniData] = useState([]);

  useEffect(() => {
    fetch("http://daycare.test/review-ortu.php")
      .then((res) => res.json())
      .then((data) => {
        setTestimoniData(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-bold mb-8">Apa Kata Mereka?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimoniData.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl p-4 shadow-md flex flex-col items-center text-center"
            >
              <img src={'http://daycare.test/'+item.foto} alt="" className="h-20 w-20 rounded-full"/>
              <h3 className="text-sm font-bold">{item.nama_ortu}</h3>
              <p className="text-xs text-gray-500">{item.anak_dari}</p>

              <div className="flex justify-center text-yellow-500 my-2">
                {Array.from({ length: 5 }).map((_, idx) =>
                  idx < item.rating ? (
                    <FaStar key={idx} />
                  ) : (
                    <FaRegStar key={idx} />
                  )
                )}
              </div>

              <div className="bg-white border border-gray-300 rounded-lg p-4 mt-2 text-sm text-gray-700">
                "{item.ulasan}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
