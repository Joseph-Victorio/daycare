import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const GaleriAdmin = () => {
  const [galeri, setGaleri] = useState([]);
  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    foto: null,
  });
  const [preview, setPreview] = useState(null);
  const [editId, setEditId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchData = async () => {
    const res = await axios.get("http://daycare.test/galeri.php");
    setGaleri(res.data);
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
    data.append("nama", form.nama);
    data.append("kategori", form.kategori);
    if (form.foto) data.append("foto", form.foto);
    if (editId) data.append("id", editId);

    await axios.post("http://daycare.test/galeri.php", data);
    setForm({ nama: "", kategori: "", foto: null });
    setPreview(null);
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setForm({
      nama: item.nama,
      kategori: item.kategori,
      foto: null,
    });
    setPreview(`http://daycare.test/${item.foto}`);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.post("http://daycare.test/galeri.php", { delete_id: id });
    fetchData();
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = galeri.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(galeri.length / itemsPerPage);

  return (
    <AdminLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gradient-to-t from-primary to-secondary text-white">
              <tr>
                <th className="p-2">Foto</th>
                <th className="p-2">Nama</th>
                <th className="p-2">Kategori</th>
                <th className="p-2">Tanggal</th>
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
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="p-2">{item.nama}</td>
                  <td className="p-2">{item.kategori}</td>
                  <td className="p-2">{item.created_at}</td>
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

        <h2 className="text-xl font-bold mt-10 mb-4">
          {editId ? "Edit Galeri" : "Tambah Galeri"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white rounded shadow p-6"
        >
          <div>
            <label className="font-semibold">Nama:</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Kategori:</label>
            <input
              type="text"
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Foto:</label>
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

export default GaleriAdmin;
