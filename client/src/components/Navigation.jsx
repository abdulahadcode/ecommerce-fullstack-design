import React, { useState, useRef, useEffect } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isShipDropdownOpen, setIsShipDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    language: 'English',
    currency: 'USD'
  });
  const [selectedShip, setSelectedShip] = useState({
    countryCode: 'us', // ISO country code for flag
    country: 'United States'
  });

  const langRef = useRef(null);
  const shipRef = useRef(null);

  // Language/currency options (no flags)
  const langOptions = [
    { language: 'English', currency: 'USD' },
    { language: 'English', currency: 'GBP' },
    { language: 'Spanish', currency: 'EUR' },
    { language: 'French', currency: 'EUR' },
    { language: 'German', currency: 'EUR' },
    { language: 'Chinese', currency: 'CNY' },
  ];

  // Shipping country options with ISO country codes
  const shipOptions = [
    { countryCode: 'pk', country: 'Pakistan' },
    { countryCode: 'us', country: 'United States' },
    { countryCode: 'gb', country: 'United Kingdom' },
    { countryCode: 'ca', country: 'Canada' },
    { countryCode: 'au', country: 'Australia' },
    { countryCode: 'de', country: 'Germany' },
    { countryCode: 'fr', country: 'France' },
    { countryCode: 'jp', country: 'Japan' },
    { countryCode: 'cn', country: 'China' },

  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
      if (shipRef.current && !shipRef.current.contains(event.target)) {
        setIsShipDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className="hidden w-full max-w-[1200px] mx-auto lg:flex border-b border-gray-200 py-5 ">
      <div className="container flex flex-wrap items-center justify-between text-sm w-[77vw] mx-auto py-10px">
        {/* Left side - Category links */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 text-black font-medium">
          <span className="flex items-center gap-1"><svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
            All category</span>
          <Link to="/products/mobile-accessories ">Mobile accessories</Link>
          <Link to="/products/electronics ">Electronics</Link>
          <Link to="/products/clothes ">Clothes</Link>
          <Link to="/products/home-decor ">Home decor</Link>
          <Link to="/products/tech ">Tech
          
        </Link>
      </div>

      {/* Right side - Language & Ship to dropdowns */}
      <div className="flex items-center gap-4 md:gap-6 text-black font-medium">
        {/* Language / Currency Dropdown (no flags) */}
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <span>{selectedLang.language}, {selectedLang.currency}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isLangDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50 py-1">
              {langOptions.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedLang(option);
                    setIsLangDropdownOpen(false);
                  }}
                >
                  <span>{option.language}, {option.currency}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Ship to Dropdown (with SVG flags) */}
        <div className="relative" ref={shipRef}>
          <button
            onClick={() => setIsShipDropdownOpen(!isShipDropdownOpen)}
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >

            <span>Ship to</span>
            {/* SVG Flag for selected country */}
            <span className={`fi fi-${selectedShip.countryCode} fis ml-1`} style={{ width: '20px', height: '15px' }}></span>
            {/* <span className="ml-1 hidden sm:inline">{selectedShip.country}</span> */}
            <svg
              className={`w-4 h-4 transition-transform ${isShipDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isShipDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50 py-1">
              {shipOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedShip(option);
                    setIsShipDropdownOpen(false);
                  }}
                >
                  {/* SVG Flag for each option */}
                  <span className={`fi fi-${option.countryCode} fis`} style={{ width: '20px', height: '15px' }}></span>
                  <span>{option.country}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </div >
  );
};

export default Navigation;