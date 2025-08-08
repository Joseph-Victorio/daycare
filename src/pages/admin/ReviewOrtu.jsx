import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const itemsPerPage = 5;

const ReviewOrtuAdmin = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    nama_ortu: "",
    nama_anak: "",
    ulasan: "",
    foto: null,
  });
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await axios.get("http://daycare.test/review-ortu.php");
    setReviews(res.data);
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
    data.append("nama_ortu", form.nama_ortu);
    data.append("nama_anak", form.nama_anak);
    data.append("ulasan", form.ulasan);
    if (form.foto) data.append("foto", form.foto);
    if (editId) data.append("id", editId);

    await axios.post("http://daycare.test/review-ortu.php", data);
    setForm({ nama_ortu: "", nama_anak: "", ulasan: "", foto: null });
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.post("http://daycare.test/review-ortu.php", {
      delete_id: id,
    });
    fetchData();
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = reviews.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  return (
    <AdminLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gradient-to-t from-primary to-secondary text-white">
              <tr>
                <th className="p-2">Foto</th>
                <th className="p-2">Nama Ortu</th>
                <th className="p-2">Nama Anak</th>
                <th className="p-2">Ulasan</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">
                    <img
                      src={`http://daycare.test/${item.foto}`}
                      alt="foto"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-2">{item.nama_ortu}</td>
                  <td className="p-2">{item.nama_anak}</td>
                  <td className="p-2">{item.ulasan}</td>
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

          {/* Pagination Controls */}
          <div className="flex justify-center gap-2 my-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <h2 className="text-xl font-bold mt-10 mb-4">Tambah Review</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white rounded shadow p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Nama Orang Tua:</label>
              <input
                type="text"
                name="nama_ortu"
                value={form.nama_ortu}
                onChange={handleChange}
                className="w-full p-2 border rounded"
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
              />
            </div>
          </div>

          <div>
            <label className="font-semibold">Ulasan:</label>
            <textarea
              name="ulasan"
              value={form.ulasan}
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
            {editId ? "Update" : "Simpan"} Review
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default ReviewOrtuAdmin;
