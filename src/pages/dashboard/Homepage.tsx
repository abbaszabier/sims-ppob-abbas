import { getIconService } from "../../lib/utils";
import Banner1 from "../../assets/Banner-1.png";
import Banner2 from "../../assets/Banner-2.png";
import Banner3 from "../../assets/Banner-3.png";
import Banner4 from "../../assets/Banner-4.png";
import Banner5 from "../../assets/Banner-5.png";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 w-full max-w-screen-xl py-2 md:py-6 text-black"
      >
        {services.map((service, index) => (
          <motion.button
            onClick={() => alert(service.name)}
            key={service.name}
            className="flex flex-col items-center space-y-1 text-center rounded-xl cursor-pointer p-0 md:p-2 hover:bg-gray-50 dark:hover:bg-[#051c29] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="text-2xl sm:text-3xl">
              {getIconService(service.name)}
            </div>
            <p className="text-xs sm:text-sm">{service.name}</p>
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative w-full mx-auto overflow-hidden my-6"
      >
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <div className="flex gap-4">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                className="w-full object-cover rounded-lg gap-4"
                alt="Promo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              />
            ))}
          </div>
        </Marquee>
      </motion.div>
    </motion.div>
  );
}
