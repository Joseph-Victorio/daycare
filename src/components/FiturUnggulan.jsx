import { PiImageSquareBold, PiClipboardTextBold } from "react-icons/pi";
import {
  MdOutlinePhotoLibrary,
  MdOutlineDashboardCustomize,
} from "react-icons/md";

export default function FiturUnggulan() {
  return (
    <section className=" py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-2xl font-bold mb-2 text-primary">
          Fitur Unggulan Kami
        </h2>
        <p className="italic text-gray-600 mb-8">
          Platform kami menyediakan berbagai fitur canggih untuk memudahkan
          monitoring dan pelaporan
        </p>

        {/* Grid Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <a href="/laporan-harian">
            <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-6 flex flex-col items-center text-center">
              <div className="bg-background rounded-full p-4 mb-4">
                <PiClipboardTextBold className="text-4xl text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Laporan Harian</h3>
              <p className="text-gray-600 text-sm">
                Dapatkan laporan harian terstruktur tentang kegiatan,
                perkembangan, dan pencapaian anak Anda.
              </p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="/galeri">
            <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-6 flex flex-col items-center text-center">
              <div className="bg-background rounded-full p-4 mb-4">
                <MdOutlinePhotoLibrary className="text-4xl text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Galeri Aktivitas</h3>
              <p className="text-gray-600 text-sm">
                Kumpulan foto dan video momen berharga anak selama mengikuti
                program di daycare.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
