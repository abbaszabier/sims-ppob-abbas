import { motion } from "framer-motion";
import Modal from "../../components/modal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../api/servis";
import { formatCurrency } from "../../lib/utils";
import { useTransaction } from "../../api/transaction";
import { useBalance } from "../../api/balance";
import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";

export default function DetailService() {
  const { data } = useServices();
  const { data: getBalance } = useBalance();
  const { service_code } = useParams();
  const service = data?.data?.data.find(
    (service) => service.service_code === service_code
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [nominal, setNominal] = useState<number | null>(
    service?.service_tariff ? service.service_tariff : null
  );
  const navigate = useNavigate();

  const doTransaction = useTransaction();
  const handleTransaction = () => {
    if (getBalance?.data?.data?.balance && nominal) {
      if (getBalance?.data?.data?.balance >= nominal) {
        doTransaction.mutate({
          service_code: service?.service_code ?? "",
        });
        setIsOpen(false);
        setNominal(null);
        setIsPaid(true);
      } else {
        setIsOpen(false);
        setIsFailed(true);
      }
    }
  };

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
        <p className="text-lg text-left">Pembayaran</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          {service?.service_code}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 gap-8 text-black w-full max-w-screen-xl mt-6"
      >
        <div className="col-span-1">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Wallet size={20} color="#555" />
            </div>
            <div className="w-full p-3 ps-10 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 border-neutral-400">
              {formatCurrency(
                service?.service_tariff ? service.service_tariff : 0
              )}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className={`w-full py-3 rounded-md cursor-pointer bg-[#F13B2F] text-white hover:bg-red-600`}
          >
            Bayar
          </motion.button>
        </div>
      </motion.div>

      <Modal
        isOpen={isOpen}
        title={`Beli ${service?.service_name} senilai`}
        amount={nominal ?? 0}
        primaryButton={{
          text: `Ya, lanjutkan bayar`,
          onClick: () => {
            handleTransaction();
          },
        }}
        secondaryButton={{ text: "Batalkan", onClick: () => setIsOpen(false) }}
      />

      <Modal
        isOpen={isPaid}
        title={`Pembayaran ${service?.service_name} sebesar`}
        amount={service?.service_tariff ? service.service_tariff : 0}
        statusMessage="Berhasil"
        secondaryButton={{
          text: "Kembali",
          onClick: () => navigate("/dashboard"),
        }}
      />

      <Modal
        isOpen={isFailed}
        title={`Pembayaran ${service?.service_name} sebesar`}
        amount={service?.service_tariff ? service.service_tariff : 0}
        statusMessage="Gagal"
        secondaryButton={{
          text: "Kembali",
          onClick: () => navigate("/dashboard"),
        }}
      />
    </motion.div>
  );
}
