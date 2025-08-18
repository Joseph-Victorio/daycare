import Navbar from "../components/Navbar";
import HeaderCardCarousel from "../components/HeaderCardCarousel";
import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";
import FiturUnggulan from "../components/FiturUnggulan";
import Testimoni from "../components/Testimoni";
import Galeri from "../components/Galeri";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <>
      <Navbar />

      {/* SECTION: HEADER */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-5 py-10 gap-10">
        {/* LEFT */}
        <div className="md:w-1/2 w-full flex-1">
          <h1 className="text-4xl sm:text-5xl text-primary font-bold leading-tight">
            MAFFNA MOSLEM <br /> KIDS DAYCARE
          </h1>
          <p className="mt-4 text-justify">
            Di MAFFNA Moslem Kids Daycare, kami menghadirkan layanan pengasuhan anak berbasis nilai-nilai Islam. Anak-anak tidak hanya diajarkan kemandirian dan kreativitas, tapi juga dibiasakan dengan kegiatan harian seperti doa, adab, dan belajar Al-Qur'an sejak dini. Lingkungan kami aman, nyaman, dan penuh cinta.
          </p>
          <Link
            to="/penitipan"
            className="bg-gradient-to-t from-primary to-secondary rounded-full text-white px-6 py-3 inline-flex items-center text-lg mt-6 hover:opacity-90 transition duration-300"
          >
            <span className="mx-auto">Daftar Sekarang</span>
            <img src="/icons/right.svg" alt="right arrow" className="ml-2 w-5" />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 w-full">
          <HeaderCardCarousel />
        </div>
      </section>

      <Marquee />

      {/* SECTION: MONITORING */}
      <section className="flex flex-col md:flex-row items-center justify-between px-5 py-10 gap-10">
        {/* LEFT */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl sm:text-4xl text-primary font-bold leading-tight">
            Sistem Monitoring Aktivitas & Laporan Harian
          </h2>
          <p className="mt-4 text-justify">
            Platform digital terintegrasi untuk mengawasi perkembangan anak dan aktivitas harian di MAFFNA MOSLEM KID DAYCARE dengan mudah dan real-time.
          </p>

        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 w-full">
          <img
            src="/kegiatan/minion2.jpg"
            alt="Aktivitas Anak"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <FiturUnggulan />
      <Marquee />
      <Testimoni />
      <Galeri />
      <Footer />
    </>
  );
};

export default Beranda;
