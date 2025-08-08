import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "login.php" : "register.php";
    try {
      const response = await axios.post(`http://daycare.test/${endpoint}`, formData);
      alert(response.data.message);
      if (isLogin && response.data.success) {
      
      navigate("/admin/dashboard");
    }
    } catch (error) {
      alert("Terjadi kesalahan: " + error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-sky-200 to-white relative overflow-hidden">
    
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/clouds.png')] bg-repeat opacity-30"></div>

   
      <div className="absolute bottom-0 w-full flex justify-center z-0">
        <img src="/bunga.png" alt="flowers" className="w-80" />
        <img src="/bunga.png" alt="flowers" className="w-80" />
        <img src="/bunga.png" alt="flowers" className="w-80" />
        <img src="/bunga.png" alt="flowers" className="w-80" />
      </div>

      <div className="bg-white p-10 pt-8 rounded-[30px] shadow-lg w-full max-w-3xl relative z-10 flex flex-col md:flex-row items-center">
       
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:pr-8">
          <h1 className="text-lg font-bold uppercase tracking-wide text-secondary mb-1">
            Welcome to
          </h1>
          <h2 className="text-xl font-bold text-primary leading-tight mb-4">
            MAFFNA MOSLEM <br />
            KID DAYCARE !
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="flex items-center border border-gray-300 p-2 rounded">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  onChange={handleChange}
                  className="w-full focus:outline-none"
                  required
                />
              </div>
            )}

            <div className="flex items-center border border-gray-300 p-2 rounded">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Masukkan email Anda"
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 p-2 rounded">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Masukkan kata sandi"
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-t from-primary to-secondary text-white py-2 rounded-full font-semibold hover:opacity-90 cursor-pointer"
            >
              {isLogin ? "Masuk" : "Daftar"}
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
            <button
              className="text-blue-500 font-semibold hover:underline cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Daftar di sini" : "Masuk di sini"}
            </button>
          </p>
        </div>

    
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/logo_daycare.svg"
            alt="Logo MAFFNA"
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}
