import React, { useState } from "react";
import { AtSign, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { motion } from "framer-motion";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };
  return (
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
          type={showPassword ? "text" : "password"}
          placeholder="masukkan password anda"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-[#adb5bd]"
        />

        <div
          className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff size={20} color="#adb5bd" />
          ) : (
            <Eye size={20} color="#adb5bd" />
          )}
        </div>
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
  );
}
