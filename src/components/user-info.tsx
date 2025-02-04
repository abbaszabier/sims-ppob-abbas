import Profile from "../assets/Profile-Photo.png";
import BackgroundSaldo from "../assets/Background-Saldo.png";
import { Eye } from "lucide-react";

export default function UserInfo() {
  return (
    <div className="flex py-6 px-4 text-black w-full max-w-screen-xl items-center justify-between mx-auto">
      <div className="flex flex-col w-3/4 items-start justify-center space-y-2">
        <img src={Profile} alt="Profile" className="w-16 h-16 object-cover" />
        <div>
          <p className="text-lg">Selamat datang,</p>
          <h2 className="text-4xl font-bold">Kristanto Wibowo</h2>
        </div>
      </div>

      <div className="relative flex bg-[#F13B2F] flex-col w-fit items-end w-full text-white rounded-xl">
        <img src={BackgroundSaldo} alt="Profile" className="object-cover" />
        <div className="absolute top-1/2 left-6 transform space-y-2 -translate-y-1/2 text-left">
          <p>Saldo Anda</p>
          <h2 className="text-3xl font-bold">Rp •••••••</h2>
          <button className="flex items-center gap-2 mt-2 cursor-pointer">
            Lihat Saldo <Eye size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
