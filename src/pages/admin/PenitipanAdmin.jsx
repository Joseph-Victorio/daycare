import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const PenitipanAdmin = () => {
  const [penitipan, setPenitipan] = useState([]);
  const [form, setForm] = useState({
    tipe_waktu: "",
    umur_min: "",
    umur_max: "",
    deskripsi: "",
    foto: null,
  });
  const [editId, setEditId] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchData = async () => {
    const res = await axios.get("http://daycare.test/tipe-penitipan.php");
    setPenitipan(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("tipe_waktu", form.tipe_waktu);
    data.append("umur_min", form.umur_min);
    data.append("umur_max", form.umur_max);
    data.append("deskripsi", form.deskripsi);
    if (form.foto) data.append("foto", form.foto);
    if (editId) data.append("id", editId);

    await axios.post("http://daycare.test/tipe-penitipan.php", data);
    setForm({ tipe_waktu: "", umur_min: "", umur_max: "", deskripsi: "", foto: null });
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.post("http://daycare.test/tipe-penitipan.php", {
      delete_id: id,
    });
    fetchData();
  };

  // Pagination logic
  const totalPages = Math.ceil(penitipan.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = penitipan.slice(startIndex, startIndex + itemsPerPage);

  return (
    <AdminLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gradient-to-t from-primary to-secondary text-white">
              <tr>
                <th className="p-2">Foto</th>
                <th className="p-2">Tipe Waktu</th>
                <th className="p-2">Umur</th>
                <th className="p-2">Deskripsi</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">
                    <img
                      src={`http://daycare.test/${item.foto}`}
                      alt="foto"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-2">{item.tipe_waktu}</td>
                  <td className="p-2">
                    {item.umur_min} - {item.umur_max} tahun
                  </td>
                  <td className="p-2">
                    <p className="line-clamp-2">{item.deskripsi}</p>
                  </td>
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

          {/* Pagination controls */}
          <div className="flex justify-center gap-2 py-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1 ? "bg-primary text-white" : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Form Input */}
        <h2 className="text-xl font-bold mt-10 mb-4">Tambah Tipe Penitipan</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white rounded shadow p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Tipe Waktu:</label>
              <input
                type="text"
                name="tipe_waktu"
                value={form.tipe_waktu}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="font-semibold">Umur Minimum:</label>
              <input
                type="text"
                name="umur_min"
                value={form.umur_min}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="font-semibold">Umur Maksimum:</label>
              <input
                type="text"
                name="umur_max"
                value={form.umur_max}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold">Deskripsi:</label>
            <textarea
              name="deskripsi"
              value={form.deskripsi}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          <div>
            <label className="font-semibold">Foto:</label>
            <input
              type="file"
              name="foto"
              onChange={handleChange}
              className="block w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded"
          >
            Simpan
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default PenitipanAdmin;
