const Footer = () => {
  return (
    <footer className="bg-[#f8f8fb] border-t border-gray-200 px-6 py-4">
      <div className="relative flex items-center">
        
        {/* Center text */}
        <p className="absolute left-1/2 -translate-x-1/2 text-sm text-gray-500">
          © 2022, Made with ❤️ by{" "}
          <span className="text-purple-600 font-medium">
            ThemeSelection
          </span>
        </p>

        {/* Right links */}
        <div className="ml-auto flex items-center gap-6 text-sm">
          <a href="#" className="text-purple-600 hover:underline">
            License
          </a>
          <a href="#" className="text-purple-600 hover:underline">
            More Themes
          </a>
          <a href="#" className="text-purple-600 hover:underline">
            Documentation
          </a>
          <a href="#" className="text-purple-600 hover:underline">
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
