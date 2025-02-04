import { getIconService } from "../../lib/utils";
import Banner1 from "../../assets/Banner-1.png";
import Banner2 from "../../assets/Banner-2.png";
import Banner3 from "../../assets/Banner-3.png";
import Banner4 from "../../assets/Banner-4.png";
import Banner5 from "../../assets/Banner-5.png";
import Marquee from "react-fast-marquee";

export default function Homepage() {
  const services = [
    { name: "PBB" },
    { name: "Listrik" },
    { name: "Pulsa" },
    { name: "PDAM" },
    { name: "PGN" },
    { name: "TV Langganan" },
    { name: "Musik" },
    { name: "Voucher Game" },
    { name: "Voucher Makanan" },
    { name: "Kurban" },
    { name: "Zakat" },
    { name: "Paket Data" },
  ];

  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className="grid grid-cols-12 gap-3 w-full max-w-screen-xl py-6 px-4 text-black">
        {services.map((service) => (
          <button
            onClick={() => alert(service.name)}
            key={service.name}
            className="flex flex-col items-center space-y-1 text-center rounded-xl cursor-pointer"
          >
            <div className="text-3xl">{getIconService(service.name)}</div>
            <p className="text-sm">{service.name}</p>
          </button>
        ))}
      </div>
      <div className="relative w-full mx-auto overflow-hidden my-6">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <div className="flex gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-full object-cover rounded-lg gap-4"
                alt="Promo"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
