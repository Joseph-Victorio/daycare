export default function DetailPenitipan() {
  return (
    <section className=" py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white border border-gray-400 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/3 aspect-square bg-gray-300 border border-gray-400"></div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-bold text-lg text-primary">FULL DAY</h2>
          <h3 className="font-bold text-md mb-3 text-secondary">Usia 3 Bulan – 2 Tahun</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Rentang waktu ini difokuskan untuk menjaga kebutuhan dasar bayi dan
            balita muda. Anak akan mendapatkan makan pagi dan siang sesuai jadwal
            MPASI atau ASI, diikuti dengan aktivitas stimulasi ringan seperti tummy
            time, merangkak, mendengarkan lagu, atau eksplorasi sensorik. Waktu
            tidur siang dijadwalkan untuk mendukung pertumbuhan, dan di akhir sesi
            dibuat catatan perkembangan harian oleh pengasuh.
          </p>
          <button className="bg-linear-to-t from-primary to-secondary text-white text-xs px-6 py-2 rounded-full">
            Tambah Tipe Penitipan
          </button>
        </div>
      </div>
    </section>
  );
}
