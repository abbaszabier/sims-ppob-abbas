import illustrasiLogin from "../../assets/Illustrasi-Login.png";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FormRegistrasi from "./components/form-registrasi";

export default function Registrasi() {
  const navigate = useNavigate();

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
          Lengkapi data untuk membuat akun
        </h2>
        <FormRegistrasi />
        <p className="text-gray-600">
          Sudah punya akun? login{" "}
          <button
            className="text-red-500 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
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
