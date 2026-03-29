import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [language, setLanguage] = useState("English");
  const [showDropdown, setShowDropdown] = useState(false);

  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <footer className="bg-white pt-8 lg:pt-10">

      {/* Main Footer */}
      <div className="w-full lg:w-[77vw] mx-auto px-4 lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">

        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <img src={logo} alt="Company Logo" className="mb-2" />

          <p className="text-lg text-gray-500 mb-4 max-w-xs">
            Best information about the companies here but now lorem ipsum is
          </p>

          <div className="flex space-x-2">
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-white"><FaFacebookF/></a>
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-white"><FaTwitter/></a>
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-white"><FaLinkedinIn/></a>
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-white"><FaInstagram/></a>
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-white"><FaYoutube/></a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-2 text-lg lg:text-2xl">About</h3>
          <ul className="lg:text-lg text-sm text-gray-500 space-y-2">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Partnership */}
        <div>
          <h3 className="font-semibold text-lg lg:text-2xl mb-2">Partnership</h3>
          <ul className="lg:text-lg text-sm text-gray-500 space-y-2">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold text-lg lg:text-2xl mb-2">Information</h3>
          <ul className="lg:text-lg text-sm text-gray-500 space-y-2">
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* For users */}
        <div>
          <h3 className="font-semibold text-lg lg:text-2xl mb-2">For users</h3>
          <ul className="lg:text-lg text-sm text-gray-500 space-y-2">
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My Orders</li>
          </ul>
        </div>

        {/* Get App */}
        <div>
          <h3 className="font-semibold mb-2">Get app</h3>

          <div className="flex flex-col gap-2">
            <a className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-md w-[140px]">
              <FaApple/>
              <div className="leading-tight">
                <div className="text-[10px]">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>

            <a className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-md w-[140px]">
              <FaGooglePlay/>
              <div className="leading-tight">
                <div className="text-[10px]">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="w-full bg-gray-100 mt-6">
        <div className="w-full lg:w-[77vw] mx-auto px-4 lg:px-0 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <div>© {currentYear} Ecommerce.</div>

          <div className="relative mt-2 md:mt-0">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 px-3 py-1 border rounded"
            >
              {language} ▲
            </button>

            {showDropdown && (
              <ul className="absolute bottom-full right-0 mb-1 bg-white border rounded shadow w-32">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;