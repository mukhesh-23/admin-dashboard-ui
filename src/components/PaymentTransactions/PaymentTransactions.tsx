import { MoreVertical, ArrowUp, ArrowDown } from "lucide-react"

type Source = {
  label: string
  value: number
  percent: number
  color: string
  up: boolean
}

const sources: Source[] = [
  { label: "Direct", value: 86471, percent: 15, color: "#22c55e", up: false },
  { label: "Organic Search", value: 57484, percent: 85, color: "#a87cff", up: true },
  { label: "Referral", value: 2534, percent: 48, color: "#f59e0b", up: true },
  { label: "Mail", value: 977, percent: 36, color: "#ef4444", up: false },
  { label: "Social", value: 92, percent: 55, color: "#0ea5e9", up: true },
  { label: "Other", value: 28, percent: 12, color: "#9ca3af", up: true },
]

const PaymentTransactions = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 w-full h-full flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Transactions
        </h3>
        <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>

      {/* TOP SECTION */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 tabular-nums">
            4,590
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Total Traffic
          </p>
        </div>

        {/* MINI BAR CHART */}
        <div className="flex items-end gap-2 h-16">
          {[32, 20, 46, 28, 40, 26].map((h, i) => (
            <div
              key={i}
              className="w-2 rounded-full bg-[#a87cff]"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>

      <hr className="mb-5" />

      {/* LIST */}
      <div className="space-y-4 mt-auto">
        {sources.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_120px_70px] items-center"
          >
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700">
                {item.label}
              </span>
            </div>

            {/* MIDDLE */}
            <span className="text-sm font-semibold text-gray-900 text-right tabular-nums">
              {item.value.toLocaleString()}
            </span>

            {/* RIGHT */}
            <div className="flex items-center justify-end gap-1">
              <span className="text-sm text-gray-600">
                {item.percent}%
              </span>
              {item.up ? (
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

export default PaymentTransactions
