import illustrasiLogin from "../../assets/Illustrasi-Login.png";
import logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FormLogin from "./components/form-login";

export default function Login() {
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
          Masuk atau buat akun untuk memulai
        </h2>
        <FormLogin />
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
