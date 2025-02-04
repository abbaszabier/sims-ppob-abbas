import { useState } from "react";
import illustrasiLogin from "../assets/Illustrasi-Login.png";
import logo from "../assets/Logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AtSign, LockKeyhole } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col bg-white justify-center items-center px-8 space-y-8"
      >
        <div className="flex bg-white justify-center items-center gap-2 px-8">
          <img
            src={logo}
            alt="Login Illustration"
            className="w-[40px] h-[40px] object-cover"
          />
          <h2 className="text-2xl font-semibold text-black">SIMS PPOB</h2>
        </div>
        <h2 className="w-1/2 text-center text-3xl text-black font-semibold">
          Masuk atau buat akun untuk memulai
        </h2>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <AtSign size={20} color="#adb5bd" />
            </div>
            <input
              type="email"
              placeholder="masukan email anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
            />
          </div>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <LockKeyhole size={20} color="#adb5bd" />
            </div>
            <input
              type="password"
              placeholder="masukan password anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-[#adb5bd]"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition cursor-pointer"
          >
            Masuk
          </motion.button>
        </form>
        <p className="text-gray-600">
          Belum punya akun? registrasi{" "}
          <button
            className="text-red-500 hover:underline cursor-pointer"
            onClick={() => navigate("/registrasi")}
          >
            di sini
          </button>
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:flex justify-center items-center h-screen"
      >
        <img
          src={illustrasiLogin}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
