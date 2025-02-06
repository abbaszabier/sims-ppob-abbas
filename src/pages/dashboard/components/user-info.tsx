import Profile from "../../../assets/Profile-Photo.png";
import BackgroundSaldo from "../../../assets/Background-Saldo.png";
import { Eye, EyeClosed } from "lucide-react";
import { motion } from "framer-motion";
import { useProfile } from "../../../api/profile";
import { useBalance } from "../../../api/balance";
import { useState } from "react";
import { formatCurrency } from "../../../lib/utils";

export default function UserInfo() {
  const { data } = useProfile();
  const { data: getBalance } = useBalance();
  const [showSaldo, setShowSaldo] = useState(false);

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
          src={
            data?.data?.data?.profile_image ===
            "https://minio.nutech-integrasi.com/take-home-test/null"
              ? Profile
              : data?.data?.data?.profile_image
          }
          alt="Profile"
          className="w-16 h-16 md:max-w-[80px] object-cover rounded-full"
        />
        <div>
          <p className="text-lg text-center md:text-left">Selamat datang,</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            {data?.data?.data?.first_name} {data?.data?.data?.last_name}
          </h2>
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
          {showSaldo ? (
            <h2 className="text-xl md:text-3xl font-bold">
              {formatCurrency(getBalance?.data?.data?.balance ?? 0)}
            </h2>
          ) : (
            <h2 className="text-xl md:text-3xl font-bold">Rp •••••••</h2>
          )}
          <button
            className="flex text-xs items-center gap-1 mt-2 cursor-pointer"
            onClick={() => setShowSaldo(!showSaldo)}
          >
            {showSaldo ? "Tutup Saldo" : "Lihat Saldo"}{" "}
            {showSaldo ? <Eye size={10} /> : <EyeClosed size={10} />}
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
