import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../components/AdminLayout";
import { FaClock } from "react-icons/fa";

export default function DashboardAdmin() {
  const [jumlahAnak, setJumlahAnak] = useState(0);
  const [jumlahPembayaran, setJumlahPembayaran] = useState(0);
  const [jumlahTipePenitipan, setJumlahTipePenitipan] = useState(0);
  const [aktivitas, setAktivitas] = useState([]);
  const [galeri, setGaleri] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const anakRes = await axios.get("http://daycare.test/pendaftaran.php");
      const tipeRes = await axios.get("http://daycare.test/tipe-penitipan.php")
      const galeriRes = await axios.get("http://daycare.test/galeri.php");

      setJumlahAnak(anakRes.data.length);
      setJumlahTipePenitipan(tipeRes.data.length);
      setGaleri(galeriRes.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <h2 className="font-bold text-xl">
          Selamat Datang di Dashboard Maffna Moslem Kids Daycare
        </h2>
        <p className="text-sm text-gray-600">
          Silakan pilih menu di sidebar untuk mengelola sistem...
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded shadow text-center py-6 border">
            <p className="text-sm text-gray-600">Total Anak Terdaftar</p>
            <p className="text-2xl font-bold">{jumlahAnak}</p>
          </div>
          <div className="bg-white rounded shadow text-center py-6 border">
            <p className="text-sm text-gray-600">Pembayaran Terbaru</p>
            <p className="text-2xl font-bold">{jumlahAnak}</p>
          </div>
          <div className="bg-white rounded shadow text-center py-6 border">
            <p className="text-sm text-gray-600">Tipe Penitipan</p>
            <p className="text-2xl font-bold">{jumlahTipePenitipan}</p>
          </div>
        </div>

        {/* Aktivitas Terkini */}
        <div className="bg-white border rounded shadow p-4">
          <h3 className="font-semibold mb-4">Aktivitas Terkini</h3>
          <ul className="space-y-2 text-sm">
            {galeri.slice(0, 5).map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaClock className="mt-1 text-gray-500" />
                <span>
                  <strong>{item.nama}</strong> : {item.created_at}
                  <br />
                  <span className="text-gray-600">{item.keterangan}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Foto Kegiatan Harian</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {galeri.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-full aspect-square border rounded bg-gray-200 overflow-hidden">
                  <img
                    src={`http://daycare.test/${item.foto}`}
                    alt={item.deskripsi}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-700 mt-1">
                  {item.created_at} - {item.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
