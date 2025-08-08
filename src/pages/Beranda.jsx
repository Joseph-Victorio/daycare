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
      {/* HEADER */}
      <section className="flex flex-col sm:flex-row  justify-between xl:flex-row min-w-fit  items-center mt-10 mb-10 p-5">
        {/* KIRI */}
        <div className="p-5  sm:w-1/2 md:w-[400px]  lg:flex-1 ">
          <h1 className="sm:text-[45px] text-5xl text-primary font-bold">
            MAFFNA MOSLEM <br /> KIDS DAYCARE
          </h1>
          <p className="mt-5 text-justify w-100 ">
            Di MAFFNA Moslem Kids Daycare, kami menghadirkan layanan pengasuhan
            anak berbasis nilai-nilai Islam. Anak-anak tidak hanya diajarkan
            kemandirian dan kreativitas, tapi juga dibiasakan dengan kegiatan
            harian seperti doa, adab, dan belajar Al-Qur'an sejak dini.
            Lingkungan kami aman, nyaman, dan penuh cinta.
          </p>

          <Link
            to="/produk"
            className="bg-linear-to-t from-primary to-secondary  rounded-full w-[200px] text-white px-6 py-4 flex gap-1 items-center text-[22px] mt-5 hover:bg-secondary ease-in-out duration-300"
          >
            <p className="mx-auto text-lg">Daftar Sekarang</p>
            <img src="/icons/right.svg" alt="" />
          </Link>
        </div>
        {/* KANAN */}
        <div className="sm:w-1/3  mx-auto">
          <HeaderCardCarousel />
        </div>
      </section>
      <Marquee />
      <section className="flex flex-col sm:flex-row  justify-between xl:flex-row min-w-fit  items-center mt-10 mb-10 p-5">
        {/* KIRI */}
        <div className="p-5  sm:w-1/2 md:w-[400px]  lg:flex-1 ">
          <h2 className="sm:text-[45px] text-5xl text-primary font-bold">
            Sistem Monitoring Aktivitas & Laporan Harian
          </h2>
          <p className="mt-5 text-justify w-100 ">
            Platform digital terintegrasi untuk mengawasi perkembangan anak dan
            aktivitas harian di MAFFNA MOSLEM KID DAYCARE dengan mudah dan
            real-time.
          </p>

          <div className="flex gap-5">
            <Link
            to="/login"
            className="bg-linear-to-t from-primary to-secondary  rounded-full w-[150px] text-white px-6 py-4 flex gap-1 items-center text-[22px] mt-5 hover:bg-secondary ease-in-out duration-300"
          >
            <p className="mx-auto">Masuk</p>
          
          </Link>
            <Link
            to="/daftar"
            className="bg-white rounded-full text-primary w-[150px]  px-6 py-4 flex gap-1 items-center text-[22px] mt-5 hover:bg-gray-200 ease-in-out duration-300"
          >
            <p className="mx-auto">Daftar</p>
            
          </Link>
          </div>
        </div>
        {/* KANAN */}
        <div className="sm:w-1/3  mx-auto">
          <img src="/kegiatan/minion2.jpg" alt="gambar aktivitas anak.png" />
        </div>
      </section>
      <FiturUnggulan/>
      <Marquee/>
      <Testimoni/>
      <Galeri/>
      <Footer/>
    </>
  );
};

export default Beranda;
