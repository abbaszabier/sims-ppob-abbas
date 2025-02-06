import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useServices } from "../../api/servis";
import { useBanner } from "../../api/banner";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const { data } = useServices();
  const { data: getBanner } = useBanner();
  const navigate = useNavigate();
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
        {data?.data?.data.map((service, index) => (
          <motion.button
            onClick={() =>
              navigate(`/dashboard/transaction/${service.service_code}`)
            }
            key={service.service_code}
            className="flex flex-col items-center space-y-1 gap-2 text-center rounded-xl cursor-pointer p-0 md:p-2 hover:bg-gray-50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="text-2xl sm:text-3xl">
              <img src={service.service_icon} alt={service.service_name} />
            </div>
            <p className="text-xs sm:text-sm">{service.service_name}</p>
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
            {getBanner?.data?.data.map((img, index) => (
              <motion.img
                key={index}
                src={img.banner_image}
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
