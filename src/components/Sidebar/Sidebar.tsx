// Sidebar.tsx
import React from "react"

/* ---------- Sidebar ---------- */
const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 min-h-screen bg-[#f8f8fb] border-r border-gray-200 px-3 py-4 text-[13px] text-gray-600">

      {/* DASHBOARDS */}
      <div className="flex items-center justify-between bg-gray-100 rounded-full px-3 py-2 mb-3">
        <div className="flex items-center gap-2">
          <HomeIcon />
          <span className="font-medium">Dashboards</span>
          <span className="bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full">
            New
          </span>
        </div>
        <ChevronDown />
      </div>

      <NavItem label="CRM" />
      <NavItem label="Analytics" active />
      <NavItem label="eCommerce" />

      {/* APPS & PAGES */}
      <Section title="APPS & PAGES">
        <IconItem icon={<MailIcon />} label="Email" />
        <IconItem icon={<ChatIcon />} label="Chat" />
        <IconItem icon={<CalendarIcon />} label="Calendar" />
        <IconItem icon={<FileIcon />} label="Invoice" arrow />
        <IconItem icon={<UserIcon />} label="User" arrow />
        <IconItem icon={<LockIcon />} label="Roles & Permissions" arrow />
        <IconItem icon={<LayersIcon />} label="Pages" arrow />
        <IconItem icon={<MessageIcon />} label="Dialog Examples" />
      </Section>

      {/* USER INTERFACE */}
      <Section title="USER INTERFACE">
        <IconItem icon={<TextIcon />} label="Typography" />
        <IconItem icon={<StarIcon />} label="Icons" />
        <IconItem icon={<CardIcon />} label="Cards" arrow />
        <IconItem icon={<GridIcon />} label="Components" arrow />
      </Section>

      {/* FORMS & TABLES */}
      <Section title="FORMS & TABLES">
        <IconItem icon={<FormIcon />} label="Form Elements" />
        <IconItem icon={<LayoutIcon />} label="Form Layout" />
        <IconItem icon={<CheckIcon />} label="Form Validation" />
        <IconItem icon={<WizardIcon />} label="Form Wizard" />
        <IconItem icon={<TableIcon />} label="Table" />
        <IconItem icon={<GridIcon />} label="Mui DataGrid" />
      </Section>

      {/* CHARTS & MISC */}
      <Section title="CHARTS & MISC">
        <IconItem icon={<ChartIcon />} label="Charts" arrow />
        <IconItem icon={<DotsIcon />} label="Others" arrow />
      </Section>
    </aside>
  )
}

/* ---------- Components ---------- */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-4">
    <p className="px-3 mb-2 text-[11px] font-semibold text-gray-400 uppercase">
      {title}
    </p>
    <div>{children}</div>
  </div>
)

const NavItem = ({ label, active }: { label: string; active?: boolean }) => (
  <div
    className={`flex items-center gap-3 px-4 py-2 mb-1 rounded-full cursor-pointer transition-colors ${
      active ? "bg-[#a87cff] text-white" : "hover:bg-gray-100"
    }`}
  >
    <span
      className={`h-3 w-3 rounded-full border ${
        active ? "border-white" : "border-gray-400"
      }`}
    />
    <span>{label}</span>
  </div>
)

const IconItem = ({
  label,
  icon,
  arrow,
}: {
  label: string
  icon: React.ReactNode
  arrow?: boolean
}) => (
  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
    <div className="flex items-center gap-3">
      <span className="text-gray-500">{icon}</span>
      <span>{label}</span>
    </div>
    {arrow && <ChevronRight />}
  </div>
)

/* ---------- Icons (inline SVGs) ---------- */
const base = "h-4 w-4"
const HomeIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />
  </svg>
)
const ChevronDown = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
)
const ChevronRight = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M9 5l7 7-7 7" />
  </svg>
)
const MailIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M4 4h16v16H4z" />
    <path d="M4 4l8 8 8-8" />
  </svg>
)
const ChatIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M21 15a4 4 0 01-4 4H7l-4 4V5a4 4 0 014-4h10a4 4 0 014 4z" />
  </svg>
)
const CalendarIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="16" />
    <path d="M8 3v4M16 3v4M3 11h18" />
  </svg>
)
const FileIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M6 2h9l5 5v15H6z" />
    <path d="M14 2v6h6" />
  </svg>
)
const UserIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 22c0-4 4-7 8-7s8 3 8 7" />
  </svg>
)
const LockIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
)
const LayersIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" />
  </svg>
)
const MessageIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M5 5h14v10H9l-4 4z" />
  </svg>
)
const TextIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M4 4h16M12 4v16" />
  </svg>
)
const StarIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 2l3 7h7l-5.5 4 2 7-6-4-6 4 2-7L2 9h7z" />
  </svg>
)
const CardIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="6" width="18" height="12" />
  </svg>
)
const GridIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
  </svg>
)
const FormIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M4 4h16v16H4z" />
  </svg>
)
const LayoutIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="18" />
  </svg>
)
const CheckIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M5 13l4 4L19 7" />
  </svg>
)
const WizardIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 2l3 7h7l-5.5 4 2 7" />
  </svg>
)
const TableIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" />
  </svg>
)
const ChartIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M4 20V10M10 20V4M16 20v-6" />
  </svg>
)
const DotsIcon = () => (
  <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
)

export default Sidebar
