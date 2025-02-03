import { useState } from "react";
import illustrasiLogin from "../assets/Illustrasi-Login.png";
import logo from "../assets/Logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
      <div className="flex flex-col bg-white justify-center items-center px-8 space-y-8">
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
          <div className="mb-4">
            <input
              type="email"
              placeholder="masukan email anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="masukan password anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Masuk
          </button>
        </form>
        <p className="text-gray-600">
          Belum punya akun? registrasi{" "}
          <a href="#" className="text-red-500">
            di sini
          </a>
        </p>
      </div>

      <div className="md:flex justify-center items-center h-screen">
        <img
          src={illustrasiLogin}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
