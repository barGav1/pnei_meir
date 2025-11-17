import React, { useState } from "react";
import logo from "../stuff/logo.png" 

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [openPic, setOpenPic] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Demo logo placeholder
  
  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 px-4 sm:px-6 py-4"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand with Image */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img 
            src={logo} 
            alt="לוגו מוסדות פני מאיר" 
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          />
          <div className="text-lg sm:text-xl font-bold text-gray-800">
            מוסדות פני מאיר
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a 
            href="/" 
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            בית
          </a>
          
          <a 
            href="https://www.matara.pro/nedarimplus/online/?mosad=7001770" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            תמיכה במוסדות
          </a>
          
          {/* Videos Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen((o) => !o)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1"
            >
              סרטונים
              <svg
                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 7l5 5 5-5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </button>
            
            {open && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 border border-gray-100">
                <a 
                  href="#design" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  עלינו
                </a>
                <a 
                  href="#hosting" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  פעילויות
                </a>
                <a 
                  href="#seo" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  חומר לימודי
                </a>
              </div>
            )}
          </div>

          {/* Photos Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenPic((o) => !o)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1"
            >
              תמונות
              <svg
                className={`w-4 h-4 transition-transform ${openPic ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 7l5 5 5-5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </button>
            
            {openPic && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 border border-gray-100">
                <a 
                  href="#design" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  חגים
                </a>
                <a 
                  href="#hosting" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  עלינו
                </a>
                <a 
                  href="#seo" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  פעילויות
                </a>
              </div>
            )}
          </div>

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScQFW3ewsgnaQjzTx197DSGirfuoV2P3xyGf5VOXyi3vTl9Ag/viewform?usp=dialog" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            הרשמה למוסדות
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          aria-label="תפריט"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col gap-2 pt-4">
            <a 
              href="/" 
              className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              בית
            </a>
            
            <a 
              href="https://www.matara.pro/nedarimplus/online/?mosad=7001770" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              תמיכה במוסדות
            </a>
            
            {/* Mobile Videos Dropdown */}
            <div>
              <button
                onClick={() => setOpen((o) => !o)}
                className="w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium flex items-center justify-between rounded-lg"
              >
                סרטונים
                <svg
                  className={`w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 7l5 5 5-5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </button>
              
              {open && (
                <div className="mr-4 mt-1 flex flex-col gap-1">
                  <a 
                    href="#design" 
                    className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    עלינו
                  </a>
                  <a 
                    href="#hosting" 
                    className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    פעילויות
                  </a>
                  <a 
                    href="#seo" 
                    className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    חומר לימודי
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Photos Dropdown */}
            <div>
              <button
                onClick={() => setOpenPic((o) => !o)}
                className="w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium flex items-center justify-between rounded-lg"
              >
                תמונות
                <svg
                  className={`w-4 h-4 transition-transform ${openPic ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 7l5 5 5-5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </button>
              
              {openPic && (
                <div className="mr-4 mt-1 flex flex-col gap-1">
                  <a 
                    href="#design" 
                    className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    חגים
                  </a>
                  <a 
                    href="#hosting" 
                    className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    עלינו
                  </a>
                  <a 
                    href="#seo" 
                    className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    פעילויות
                  </a>
                </div>
              )}
            </div>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScQFW3ewsgnaQjzTx197DSGirfuoV2P3xyGf5VOXyi3vTl9Ag/viewform?usp=dialog" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              הרשמה למוסדות
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}