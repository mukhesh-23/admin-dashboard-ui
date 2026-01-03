import { FileText } from "lucide-react"

import Cover from "../../assets/activity/cover.png"
import Avatar from "../../assets/activity/profile.png"


type TimelineItem = {
  title: string
  description: string
  date: string
  color: string
  file?: string
  user?: string
}

const timeline: TimelineItem[] = [
  {
    title: "8 Invoices have been paid",
    description: "Invoices have been paid to the company.",
    date: "Wednesday",
    color: "bg-red-500",
    file: "invoice.pdf",
  },
  {
    title: "Create a new project for client 😎",
    description: "Invoices have been paid to the company.",
    date: "April, 18",
    color: "bg-purple-500",
    user: "John Doe (Client)",
  },
  {
    title: "Order #37745 from September",
    description: "Invoices have been paid to the company.",
    date: "January, 10",
    color: "bg-blue-500",
  },
]

const ActivityTimeline = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

      {/* Cover Image */}
      <img
        src={Cover}
        alt="cover"
        className="h-40 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-8">
          Activity Timeline
        </h3>

        {/* TIMELINE CONTAINER */}
        <div className="relative">

          {/* CONTINUOUS VERTICAL LINE */}
          <div className="absolute left-[10px] top-0 h-full w-px bg-gray-200" />

          {/* TIMELINE ITEMS */}
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-6">

                {/* DOT */}
                <span
                  className={`relative z-10 mt-1 h-5 w-5 rounded-full ${item.color}`}
                />

                {/* CONTENT */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <span className="text-sm text-gray-400">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-base text-gray-500 mt-2">
                    {item.description}
                  </p>

                  {/* FILE */}
                  {item.file && (
                    <div className="flex items-center gap-2 mt-4">
                      <FileText className="w-5 h-5 text-red-500" />
                      <span className="text-base font-medium text-gray-700">
                        {item.file}
                      </span>
                    </div>
                  )}

                  {/* USER */}
                  {item.user && (
                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={Avatar}
                        alt="user"
                        className="h-9 w-9 rounded-full"
                      />
                      <span className="text-base font-medium text-gray-700">
                        {item.user}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ActivityTimeline
