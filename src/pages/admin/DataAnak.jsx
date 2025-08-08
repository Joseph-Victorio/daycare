import AdminLayout from "../../components/AdminLayout";
import { useEffect, useState } from "react";

const itemsPerPage = 5;

const DataAnak = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    fetch("http://daycare.test/pendaftaran.php")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const closeModal = () => setModalImage(null);

  return (
    <AdminLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Data Anak</h1>
          <button className="bg-gradient-to-t from-primary to-secondary text-white px-4 py-2 rounded hover:bg-white/20 cursor-pointer">
            Ekspor Data Anak
          </button>
        </div>

        <div className="space-y-6">
          {paginatedData.map((anak, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 p-6 space-y-4"
            >
              <h2 className="text-lg font-bold text-primary border-b pb-2 text-center">
                {anak.nama_anak}
              </h2>

              <div className="grid gap-6 lg:grid-cols-3">
                {/* Data Anak */}
                <div>
                  <h3 className="font-semibold mb-2">Data Anak</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <strong>Nama:</strong> {anak.nama_anak}
                    </li>
                    <li>
                      <strong>Tanggal Lahir:</strong> {anak.tanggal_lahir}
                    </li>
                    <li>
                      <strong>Jenis Kelamin:</strong> {anak.jenis_kelamin}
                    </li>
                    <li>
                      <strong>Tipe Penitipan:</strong> {anak.tipe_penitipan}
                    </li>
                  </ul>
                </div>

                {/* Data Wali */}
                <div>
                  <h3 className="font-semibold mb-2">Data Wali</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <strong>Nama Wali:</strong> {anak.nama_wali}
                    </li>
                    <li>
                      <strong>Telepon:</strong> {anak.telepon_wali}
                    </li>
                    <li>
                      <strong>Alamat:</strong> {anak.alamat_wali}
                    </li>
                  </ul>
                </div>

                {/* Pendaftaran & Foto */}
                <div>
                  <h3 className="font-semibold mb-2">Detail Pendaftaran</h3>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>
                      <strong>Kunjungan:</strong> {anak.tanggal_pendaftaran}
                    </li>
                  </ul>
                  <div className="flex space-x-4 justify-center">
                    <div className="text-center">
                      <p className="text-xs font-medium mb-1">Akte</p>
                      <img
                        src={`http://daycare.test/${anak.akte_foto}`}
                        alt="Akte"
                        onClick={() =>
                          setModalImage(`http://daycare.test/${anak.akte_foto}`)
                        }
                        className="w-20 h-20 object-cover rounded border cursor-pointer"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium mb-1">KK</p>
                      <img
                        src={`http://daycare.test/${anak.kk_foto}`}
                        alt="KK"
                        onClick={() =>
                          setModalImage(`http://daycare.test/${anak.kk_foto}`)
                        }
                        className="w-20 h-20 object-cover rounded border cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={closeModal}
          >
            <img
              src={modalImage}
              alt="Fullscreen"
              className="max-w-4xl max-h-[90vh] rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50`}
            >
              Previous
            </button>
            <span className="self-center text-sm font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default DataAnak;
