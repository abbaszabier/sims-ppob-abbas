import React, { useState } from "react";
import { AtSign, Eye, EyeOff, LockKeyhole, User } from "lucide-react";
import { motion } from "framer-motion";

export default function FormRegistrasi() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

      <div className="mb-4 relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <User size={20} color="#adb5bd" />
        </div>
        <input
          type="text"
          placeholder="nama depan"
          className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
        />
      </div>

      <div className="mb-4 relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <User size={20} color="#adb5bd" />
        </div>
        <input
          type="text"
          placeholder="nama belakang"
          className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
        />
      </div>

      <div className="relative mb-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <LockKeyhole size={20} color="#adb5bd" />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="buat password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 ps-10 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
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

      <div className="relative mb-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <LockKeyhole size={20} color="#adb5bd" />
        </div>
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="konfirmasi password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
        />
        <div
          className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? (
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
        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
      >
        Registrasi
      </motion.button>
    </form>
  );
}
