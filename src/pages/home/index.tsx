import { TypewriterEffectSmooth } from "../../components/typewritter-effect";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";

export default function Home() {
  const navigate = useNavigate();
  const words = [
    {
      text: "Layanan",
    },
    {
      text: "Terpercaya",
    },
    {
      text: "Untuk",
    },
    {
      text: "Semua",
    },
    {
      text: "Kebutuhan",
      className: "text-[#F13B2F]",
    },
    {
      text: "Anda.",
      className: "text-[#F13B2F]",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={logo} alt="Logo" className="w-10 h-10" />
      <p className="text-neutral-600 dark:text-neutral-200 text-base mt-2">
        Selamat datang di SIMS PPOB
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Masuk
        </button>
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm cursor-pointer"
          onClick={() => navigate("/registrasi")}
        >
          Registrasi
        </button>
      </div>
    </div>
  );
}
