import { motion } from "framer-motion";
import { useState } from "react";

export default function TopUp() {
  const [nominal, setNominal] = useState<number | null>(null);

  const handleNominalChange = (value: number) => {
    setNominal(value);
  };

  const isDisabled = nominal === null || nominal < 10000 || nominal > 1000000;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center w-full max-w-screen-xl mx-auto px-4 py-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col w-full items-center md:items-start justify-center space-y-2 text-left text-black"
      >
        <p className="text-lg text-left">Silahkan masukan</p>
        <h2 className="text-3xl md:text-4xl font-bold">Nominal Top Up</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black w-full max-w-screen-xl mt-6"
      >
        <div className="col-span-1">
          <input
            type="number"
            placeholder="Masukkan nominal Top Up"
            value={nominal || ""}
            onChange={(e) => setNominal(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 border-neutral-400"
          />
          <motion.button
            whileHover={isDisabled ? {} : { scale: 1.05 }}
            whileTap={isDisabled ? {} : { scale: 0.95 }}
            disabled={isDisabled}
            className={`w-full py-3 rounded-md cursor-pointer ${
              isDisabled
                ? "bg-neutral-400 text-white cursor-not-allowed"
                : "bg-[#F13B2F] text-white hover:bg-red-600"
            }`}
          >
            Top Up
          </motion.button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[10000, 20000, 50000, 100000, 250000, 500000].map((value) => (
            <button
              key={value}
              onClick={() => handleNominalChange(value)}
              className={`px-4 py-3 border border-neutral-400 cursor-pointer rounded-md text-center ${
                nominal === value
                  ? "bg-[#F13B2F] text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              Rp{value.toLocaleString("id-ID")}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
