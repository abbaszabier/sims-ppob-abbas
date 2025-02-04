import Profile from "../assets/Profile-Photo.png";
import BackgroundSaldo from "../assets/Background-Saldo.png";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function UserInfo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row py-6 px-4 text-black w-full max-w-screen-xl items-center justify-between mx-auto gap-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col w-full items-center md:items-start justify-center space-y-2 text-left"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          src={Profile}
          alt="Profile"
          className="w-16 h-16 md:max-w-[80px] object-cover"
        />
        <div>
          <p className="text-lg text-center md:text-left">Selamat datang,</p>
          <h2 className="text-3xl md:text-4xl font-bold">Kristanto Wibowo</h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative flex bg-[#F13B2F] flex-col w-full items-end text-white rounded-xl md:px-0 md:py-0 px-4 py-5"
      >
        <img
          src={BackgroundSaldo}
          alt="Profile"
          className="object-cover w-full md:w-auto"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute top-1/2 left-6 transform space-y-3 -translate-y-1/2 text-left"
        >
          <p>Saldo Anda</p>
          <h2 className="text-xl md:text-3xl font-bold">Rp •••••••</h2>
          <button className="flex text-xs items-center gap-1 mt-2 cursor-pointer">
            Lihat Saldo <Eye size={16} />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
