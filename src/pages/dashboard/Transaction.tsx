import { motion } from "framer-motion";
import { useState } from "react";
import { useHistory } from "../../api/history";
import { formatDate } from "../../lib/utils";

export default function Transaction() {
  const limit = 5;
  const [offset, setOffset] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const { data } = useHistory(offset, limit);
  const transactions = data?.data?.data?.records ?? [];

  const handleShowMore = () => {
    setOffset(offset + limit);
    setShowMore(true);
  };

  const displayedTransactions = showMore
    ? transactions
    : transactions.slice(offset, limit);

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
          Semua Transaksi ({transactions.length})
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
            {transactions.length > 0 ? (
              displayedTransactions.map((transaction, index) => (
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

          {!showMore && transactions?.length >= 5 && (
            <button
              onClick={() => handleShowMore()}
              className="mt-6 text-red-500 hover:underline block mx-auto"
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
