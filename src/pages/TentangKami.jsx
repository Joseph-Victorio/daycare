import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TentangKami() {
  return (
    <>
      <Navbar />
      <section className=" py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-linear-to-t from-primary to-secondary text-white py-3 px-6 rounded-t-lg text-center font-bold text-lg">
            Tentang Kami
          </div>
          <div className="flex justify-center my-8">
            <div className="relative">
              <img src="/logo_daycare.svg" alt="logo" className="w-80" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
           <img src="/kegiatan/minion2.jpg" alt="" />
            <div>
              <h2 className="text-2xl font-bold">
                Tentang{" "}
                <span className="font-extrabold">
                  MAFFNA MOSLEM KID DAYCARE
                </span>
              </h2>
              <div className="w-12 h-[2px]  my-2"></div>
              <p className="text-black text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <p className="text-black text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="bg-linear-to-t from-primary to-secondary text-white p-6 rounded-xl border border-gray-400">
              <h3 className="font-bold text-xl mb-4">Visi</h3>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-linear-to-t from-primary to-secondary text-white p-6 rounded-xl border border-gray-400">
              <h3 className="font-bold text-xl mb-4">Misi</h3>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-linear-to-t from-primary to-secondary text-white font-semibold py-3 px-6 rounded-lg inline-block">
              Syarat & Ketentuan Pendaftaran di MAFFNA Moslem Kids Daycare
            </div>
          </div>
          <div className="text-black text-sm space-y-4">
            <p>
              Kami ingin memastikan bahwa pengalaman menitipkan buah hati di
              MAFFNA Moslem Kids Daycare berjalan dengan nyaman, aman, dan
              memuaskan. Berikut adalah syarat dan ketentuan yang berlaku:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Anak yang dititipkan berada dalam kondisi sehat dan tidak
                menunjukkan gejala penyakit menular.
              </li>
              <li>
                Waktu layanan daycare berlangsung setiap hari kerja, pukul 07.00
                – 17.30 WIB.
              </li>
              <li>
                Biaya layanan sudah termasuk: makan pagi & siang, aktivitas
                belajar harian, tidur siang, serta laporan kegiatan anak.
              </li>
              <li>
                Anak akan dibimbing oleh pengasuh yang berpengalaman serta
                diawasi sesuai dengan standar keamanan.
              </li>
              <li>
                MAFFNA berhak menghentikan sementara atau menolak layanan jika
                ditemukan pelanggaran aturan atau kondisi tertentu (misalnya
                force majeure, kedaruratan kesehatan, dll).
              </li>
            </ol>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
