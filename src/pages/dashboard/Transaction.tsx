import { motion } from "framer-motion";
import { useState } from "react";

interface Transaction {
  amount: number;
  date: string;
  time: string;
  type: string;
  category: string;
}

const transactionData: Transaction[] = [
  {
    amount: 10000,
    date: "17 Agustus 2023",
    time: "13:10 WIB",
    type: "credit",
    category: "Top Up Saldo",
  },
  {
    amount: -40000,
    date: "17 Agustus 2023",
    time: "12:10 WIB",
    type: "debit",
    category: "Pulsa Prabayar",
  },
  {
    amount: -10000,
    date: "17 Agustus 2023",
    time: "11:10 WIB",
    type: "debit",
    category: "Listrik Pascabayar",
  },
  {
    amount: 50000,
    date: "17 Agustus 2023",
    time: "10:10 WIB",
    type: "credit",
    category: "Top Up Saldo",
  },
  {
    amount: 50000,
    date: "17 Agustus 2023",
    time: "10:10 WIB",
    type: "credit",
    category: "Top Up Saldo",
  },
  {
    amount: 50000,
    date: "17 Agustus 2023",
    time: "10:10 WIB",
    type: "credit",
    category: "Top Up Saldo",
  },
  {
    amount: 50000,
    date: "17 Agustus 2023",
    time: "10:10 WIB",
    type: "credit",
    category: "Top Up Saldo",
  },
  {
    amount: 50000,
    date: "17 Agustus 2023",
    time: "10:10 WIB",
    type: "credit",
    category: "Top Up Saldo",
  },
];

export default function Transaction() {
  const [visibleTransactions, setVisibleTransactions] = useState<number>(5);

  const handleShowMore = () => {
    setVisibleTransactions((prev) => prev + 5);
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
        <p className="text-lg text-left">Silahkan masukan</p>
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
            {transactionData
              .slice(0, visibleTransactions)
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
                        transaction.type === "credit"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "credit" ? "+" : "-"}Rp
                      {Math.abs(transaction.amount).toLocaleString("id-ID")}
                    </p>
                    <p className="text-sm text-gray-400">
                      {transaction.date} • {transaction.time}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    {transaction.category}
                  </p>
                </motion.div>
              ))}
          </motion.div>
          {visibleTransactions < transactionData.length && (
            <button
              onClick={handleShowMore}
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
