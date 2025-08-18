import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const LaporanHarianAdmin = () => {
  const [laporan, setLaporan] = useState([]);
  const [form, setForm] = useState({
    tanggal: "",
    nama_anak: "",
    laporan: "",
    foto: null,
  });
  const [preview, setPreview] = useState(null);
  const [editId, setEditId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchData = async () => {
    const res = await axios.get("http://daycare.test/laporan.php");
    setLaporan(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("tanggal", form.tanggal);
    data.append("nama_anak", form.nama_anak);
    data.append("laporan", form.laporan);
    if (form.foto) data.append("foto", form.foto);
    if (editId) data.append("id", editId);

    await axios.post("http://daycare.test/laporan.php", data);
    setForm({ tanggal: "", nama_anak: "", laporan: "", foto: null });
    setPreview(null);
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setForm({
      tanggal: item.tanggal,
      nama_anak: item.nama_anak,
      laporan: item.laporan,
      foto: null,
    });
    setPreview(item.foto ? `http://daycare.test/${item.foto}` : null);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.post("http://daycare.test/laporan.php", { delete_id: id });
    fetchData();
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = laporan.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(laporan.length / itemsPerPage);

  return (
    <AdminLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* TABEL LAPORAN */}
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gradient-to-t from-primary to-secondary text-white">
              <tr>
                <th className="p-2">Tanggal</th>
                <th className="p-2">Foto Anak</th>
                <th className="p-2">Nama Anak</th>
                <th className="p-2">Laporan Harian</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.tanggal}</td>
                  <td className="p-2">
                    {item.foto && (
                      <img
                        src={`http://daycare.test/${item.foto}`}
                        alt="foto anak"
                        className="w-20 h-20 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="p-2">{item.nama_anak}</td>
                  <td className="p-2">{item.laporan}</td>
                  <td className="p-2 flex gap-2">
                    <button onClick={() => handleEdit(item)}>
                      <FaEdit className="text-blue-500" />
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      <FaTrash className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === i + 1 ? "bg-primary text-white" : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* FORM + PREVIEW SIDE BY SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* FORM INPUT */}
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold mb-4">
              {editId ? "Edit Laporan Harian" : "Tambah Laporan Harian"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-semibold">Tanggal:</label>
                <input
                  type="date"
                  name="tanggal"
                  value={form.tanggal}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="font-semibold">Nama Anak:</label>
                <input
                  type="text"
                  name="nama_anak"
                  value={form.nama_anak}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="font-semibold">Foto Anak:</label>
                <input
                  type="file"
                  name="foto"
                  onChange={handleChange}
                  className="block w-full"
                  accept="image/*"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 object-cover mt-2 rounded"
                  />
                )}
              </div>

              <div>
                <label className="font-semibold">Laporan Harian:</label>
                <textarea
                  name="laporan"
                  value={form.laporan}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded"
              >
                Simpan
              </button>
            </form>
          </div>

          {/* PREVIEW PANEL */}
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold mb-4">Pratinjau Laporan</h2>

            {form.nama_anak || form.laporan || form.tanggal ? (
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">Tanggal:</span>{" "}
                  {form.tanggal || "-"}
                </p>
                <p>
                  <span className="font-semibold">Nama Anak:</span>{" "}
                  {form.nama_anak || "-"}
                </p>
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded"
                  />
                )}
                <div>
                  <span className="font-semibold">Laporan:</span>
                  <p className="mt-2 whitespace-pre-line">
                    {form.laporan || "-"}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-center">
                <p className="text-lg font-semibold">Belum Ada Konten</p>
                <p>Isi laporan untuk melihat pratinjau</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default LaporanHarianAdmin;
