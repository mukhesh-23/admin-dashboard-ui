import { Moon, Bell, Search } from "lucide-react"

import Logo from "../../assets/header/logo.jpg"
import FlagUS from "../../assets/header/flag.png"
import Avatar from "../../assets/header/profile.png"

const Header = () => {
  return (
    <header className="h-16 bg-[#f8f8fb] border-b border-gray-200 flex items-center justify-between px-6">

      {/* LEFT: Logo + Search */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Materio" className="h-8 w-8" />
          <span className="text-lg font-semibold text-gray-800 tracking-wide">
            MATERIO
          </span>
        </div>

        {/* Search */}
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            //placeholder="Search"
            className="
              w-full
              pl-9 pr-4 py-2
              text-sm
              bg-gray-50
              border border-gray-200
              rounded-lg
              
              text-gray-700
              placeholder-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-[#a87cff]/40
              focus:border-[#a87cff]
              transition
            "
          />
        </div>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-6">
        {/* Language */}
        <img
          src={FlagUS}
          alt="Language"
          className="h-6 w-6 rounded-full cursor-pointer"
        />

        {/* Theme Toggle */}
        <Moon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition" />

        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-gray-600 hover:text-gray-900 transition" />
          {/* Notification dot (optional) */}
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
        </div>

        {/* User Avatar */}
        <div className="relative">
          <img
            src={Avatar}
            alt="User"
            className="h-9 w-9 rounded-full cursor-pointer"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
      </div>
    </header>
  )
}

export default Header
