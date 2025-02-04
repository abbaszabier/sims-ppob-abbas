import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Game from "../assets/Game.png";
import Kurban from "../assets/Kurban.png";
import Listrik from "../assets/Listrik.png";
import Musik from "../assets/Musik.png";
import PaketData from "../assets/Paket-Data.png";
import PBB from "../assets/PBB.png";
import PDAM from "../assets/PDAM.png";
import PGN from "../assets/PGN.png";
import Pulsa from "../assets/Pulsa.png";
import Televisi from "../assets/Televisi.png";
import VoucherMakanan from "../assets/Voucher-Makanan.png";
import Zakat from "../assets/Zakat.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIconService = (name: string) => {
  switch (name) {
    case "Voucher Game":
      return <img src={Game} alt="Game" className="w-16 h-16 object-cover" />;
    case "Kurban":
      return (
        <img src={Kurban} alt="Kurban" className="w-16 h-16 object-cover" />
      );
    case "Listrik":
      return (
        <img src={Listrik} alt="Listrik" className="w-16 h-16 object-cover" />
      );
    case "Musik":
      return <img src={Musik} alt="Musik" className="w-16 h-16 object-cover" />;
    case "Paket Data":
      return (
        <img
          src={PaketData}
          alt="Paket Data"
          className="w-16 h-16 object-cover"
        />
      );
    case "PBB":
      return <img src={PBB} alt="PBB" className="w-16 h-16 object-cover" />;
    case "PDAM":
      return <img src={PDAM} alt="PDAM" className="w-16 h-16 object-cover" />;
    case "PGN":
      return <img src={PGN} alt="PGN" className="w-16 h-16 object-cover" />;
    case "Pulsa":
      return <img src={Pulsa} alt="Pulsa" className="w-16 h-16 object-cover" />;
    case "TV Langganan":
      return (
        <img src={Televisi} alt="Televisi" className="w-16 h-16 object-cover" />
      );
    case "Voucher Makanan":
      return (
        <img
          src={VoucherMakanan}
          alt="Voucher Makanan"
          className="w-16 h-16 object-cover"
        />
      );
    case "Zakat":
      return <img src={Zakat} alt="Zakat" className="w-16 h-16 object-cover" />;
    default:
      return null;
  }
};
