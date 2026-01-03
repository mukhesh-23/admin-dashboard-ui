import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart } from "lucide-react"

type Stat = {
  title: string
  value: string
  change: string
  positive: boolean
  icon: React.ReactNode
}

const stats: Stat[] = [
  {
    title: "Total Users",
    value: "12.4k",
    change: "+5.2%",
    positive: true,
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Revenue",
    value: "$18,750",
    change: "+8.5%",
    positive: true,
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    title: "New Orders",
    value: "320",
    change: "-2.1%",
    positive: false,
    icon: <ShoppingCart className="w-5 h-5" />,
  },
]

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition"
        >
          {/* Accent bar */}
          <span
            className={`absolute top-0 left-0 h-full w-1 rounded-l-xl ${
              stat.positive ? "bg-[#a87cff]" : "bg-red-500"
            }`}
          />

          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">
              {stat.title}
            </p>

            <div
              className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                stat.positive
                  ? "bg-[#f1ebff] text-[#a87cff]"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {stat.icon}
            </div>
          </div>

          {/* Value */}
          <h3 className="text-3xl font-semibold text-gray-800 mt-2 tabular-nums">
            {stat.value}
          </h3>

          {/* Change */}
          <div className="flex items-center gap-1 mt-3">
            {stat.positive ? (
              <TrendingUp className="w-4 h-4 text-[#a87cff]" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}

            <span
              className={`text-sm font-medium ${
                stat.positive ? "text-[#a87cff]" : "text-red-500"
              }`}
            >
              {stat.change}
            </span>

            <span className="text-xs text-gray-400">
              vs last month
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatCards
