import React, { useState } from "react";
import logo from "../stuff/logo.png" 

export default function Menu() {
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