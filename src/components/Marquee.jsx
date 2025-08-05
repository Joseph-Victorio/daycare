import { PiShootingStarBold } from "react-icons/pi";

const Marquee = () => {
  return (
    <div className="font-rhodium">
      <marquee
        direction="left"
        scrollamount="15"
        className="bg-linear-to-t from-primary to-secondary  p-4"
      >
        <div className="flex flex-row items-center gap-5 text-white">
          <img src="/Star.svg" alt="" className="" />
          <p className="text-[24px]">Dokumen Digital</p>
          <img src="/Star.svg" alt="" className="" />
          <p className="text-[24px]">Review</p>
          <img src="/Star.svg" alt="" className="" />
          <p className="text-[24px]">Layanan Unggulan Daycare</p>
          <img src="/Star.svg" alt="" className="" />
          <p className="text-[24px]">Dokumentasi Kegiatan</p>
          <img src="/Star.svg" alt="" className="" />
          <p className="text-[24px]">Dokumen Digital</p>
          <img src="/Star.svg" alt="" className="" />
          <p className="text-[24px]">Review</p>
          <img src="/Star.svg" alt="" className="" />
          <p className="text-[24px]">Layanan Unggulan Daycare</p>
          <img src="/Star.svg" alt="" className="" />
          <p className="text-[24px]">Dokumentasi Kegiatan</p>
    
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
