import { motion } from "framer-motion";
import { useState } from "react";
import { useHistory } from "../../api/history";
import { formatDate } from "../../lib/utils";

export default function Transaction() {
  const [offset, setOffset] = useState(5);
  const limit = 5;
  const { data } = useHistory(limit, offset);

  const handleShowMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
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
        <p className="text-lg text-left">
          Semua Transaksi ({data?.data?.data?.records.length})
        </p>
      </motion.div>

      <div className="grid grid-cols-1 text-black w-full max-w-screen-xl mt-6">
        <div className="flex flex-col space-y-2">
          <motion.div
            className="space-y-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {(data?.data?.data?.records?.length ?? 0) > 0 ? (
              data?.data?.data?.records
                .slice(0, offset + limit)
                .map((transaction, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-top p-4 bg-white border border-neutral-200 rounded-md"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                    initial="hidden"
                    animate="show"
                  >
                    <div>
                      <p
                        className={`text-lg font-semibold ${
                          transaction.transaction_type === "TOPUP"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.transaction_type === "TOPUP" ? "+" : "-"}Rp
                        {Math.abs(transaction.total_amount).toLocaleString(
                          "id-ID"
                        )}
                      </p>
                      <p className="text-sm text-gray-400">
                        {formatDate(transaction.created_on)}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">
                      {transaction.transaction_type}
                    </p>
                  </motion.div>
                ))
            ) : (
              <p className="text-center text-gray-500">
                Data transaksi belum ada
              </p>
            )}
          </motion.div>
          <button
            onClick={handleShowMore}
            className="mt-6 text-red-500 hover:underline block mx-auto"
          >
            Show more
          </button>
        </div>
      </div>
    </motion.div>
  );
}
