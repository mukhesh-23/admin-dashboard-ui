import { ArrowUp, ArrowDown, MoreVertical } from "lucide-react"

import Paypal from "../../assets/transactions/paypal.png"
import CreditCard from "../../assets/transactions/credit_card.png"
import Wallet from "../../assets/transactions/wallet.jpg"
import Transfer from "../../assets/transactions/transfer.png"

type Transaction = {
  title: string
  subtitle: string
  amount: string
  positive: boolean
  icon: string
  bg: string
}

const transactions: Transaction[] = [
  {
    title: "Paypal",
    subtitle: "Received Money",
    amount: "+$24,820",
    positive: true,
    icon: Paypal,
    bg: "bg-red-50",
  },
  {
    title: "Credit Card",
    subtitle: "Digital Ocean",
    amount: "-$1,250",
    positive: false,
    icon: CreditCard,
    bg: "bg-green-50",
  },
  {
    title: "Mastercard",
    subtitle: "Netflix",
    amount: "-$99",
    positive: false,
    icon: CreditCard,
    bg: "bg-yellow-50",
  },
  {
    title: "Wallet",
    subtitle: "Mac'D",
    amount: "-$82",
    positive: false,
    icon: Wallet,
    bg: "bg-purple-50",
  },
  {
    title: "Transfer",
    subtitle: "Refund",
    amount: "+$8,934",
    positive: true,
    icon: Transfer,
    bg: "bg-blue-50",
  },
  {
    title: "Wallet",
    subtitle: "Buy Apple Watch",
    amount: "-$399",
    positive: false,
    icon: Wallet,
    bg: "bg-purple-50",
  },
]

const TransactionsTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 w-full h-full flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Transactions
        </h3>
        <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>

      {/* LIST */}
      <div className="space-y-5 mt-auto">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div
                className={`h-11 w-11 rounded-lg flex items-center justify-center ${tx.bg}`}
              >
                <img
                  src={tx.icon}
                  alt={tx.title}
                  className="h-5 w-5"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {tx.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {tx.subtitle}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900 tabular-nums">
                {tx.amount}
              </span>

              {tx.positive ? (
                <ArrowUp className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDown className="w-4 h-4 text-red-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionsTable
