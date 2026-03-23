// import React, { useState } from 'react';
// import { Link } from "react-router-dom"
// import logo from "../assets/logo.png";
// const Navbar = () => {
  // const [selectedCategory, setSelectedCategory] = useState('All category');
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const categories = [
//     'All category',
//     'Electronics',
//     'Clothing',
//     'Books',
//     'Home & Garden',
//     'Sports'
//   ];

//   return (
//     <nav className="bg-white border-b border-gray-300 px-4">
//       <div className="container mx-auto flex flex-wrap items-center justify-between w-[77vw] py-3 h-[86px] ">
//         {/* Brand / Logo */}
//         <div className="text-2xl font-bold text-gray-800">
//           <img src={logo} alt="logo" />
//         </div>


//         {/* Search Bar - full width on mobile, flexible on desktop */}
//         <div className="flex flex-1 order-last md:order-none md:max-w-[45vw]">
//           <div className="flex w-full">

//             {/* Search Input */}
//             <input
//               type="text"
//               placeholder="Search"
//               className="flex-1 border border-gray-300 rounded-l-md px-4 py-2.5 text-sm outline outline-2 outline-blue-500 focus:border-transparent"
//             />

            // {/* Category Dropdown Button (right side of input) */}
            // <div className="relative ">
            //   <button
            //     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            //     className="flex items-center gap-1 w-[145px] outline outline-2 outline-blue-500 bg-gray-100 border border-l-0 border-gray-300 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
            //   >
            //     <span>{selectedCategory}</span>
            //     <svg
            //       className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            //       fill="none"
            //       stroke="currentColor"
            //       viewBox="0 0 24 24"
            //     >
            //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            //     </svg>
            //   </button>

            //   {/* Dropdown Menu */}
            //   {isDropdownOpen && (
            //     <div className="absolute right-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-50">
            //       {categories.map((cat) => (
            //         <div
            //           key={cat}
            //           className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
            //           onClick={() => {
            //             setSelectedCategory(cat);
            //             setIsDropdownOpen(false);
            //           }}
            //         >
            //           {cat}
            //         </div>
            //       ))}
            //     </div>
            //   )}
            // </div>

//             {/* Search Button */}
//             <button className="bg-blue-500 text-white w-[100px] outline outline-2 outline-blue-500 px-6 py-2.5 rounded-r-md hover:bg-blue-700 transition-colors text-sm font-medium">
//               Search
//             </button>
//           </div>
//         </div>

//         {/* Icons Section: Profile, Message, Orders, My cart */}
//         <div className="flex items-center gap-3 md:gap-5">
//           {/* Profile */}
//           <button className="flex flex-col items-center text-gray-700 hover:text-blue-600 opacity-60 transition-colors">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fill="currentColor"
//                 d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 
//       1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 
//       4v2h16v-2c0-2.66-5.33-4-8-4"
//               />
//             </svg>
//             <span className="text-xs hidden md:block">Profile</span>
//           </button>

//           {/* Message */}
//           <button className="flex flex-col items-center text-gray-700 hover:text-blue-600 opacity-60 transition-colors">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fill="currentColor"
//                 d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"
//               />
//             </svg>
//             <span className="text-xs hidden md:block">Message</span>
//           </button>

//           {/* Orders */}
//           <button className="flex flex-col items-center text-gray-700 opacity-60 hover:text-blue-600 transition-colors">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               viewBox="0 0 24 24"
//             >
//               <title>heart-filled</title>
//               <path
//                 fill="currentColor"
//                 fillOpacity="0"
//                 d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
//               >
//                 <animate
//                   fill="freeze"
//                   attributeName="fill-opacity"
//                   begin="0.6s"
//                   dur="0.4s"
//                   to="1"
//                 />
//               </path>
//               <path
//                 fill="none"
//                 stroke="currentColor"
//                 strokeDasharray="30"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
//               >
//                 <animate
//                   fill="freeze"
//                   attributeName="stroke-dashoffset"
//                   dur="0.6s"
//                   values="30;0"
//                 />
//               </path>
//             </svg>
//             <span className="text-xs hidden md:block">Orders</span>
//           </button>

// {/* My cart */}
// <button className="flex flex-col items-center opacity-60 text-gray-700 hover:text-blue-600 transition-colors relative">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-6 h-6"
//     viewBox="0 0 24 24"
//   >
//     <title>cart-filled</title>
//     <path
//       fill="currentColor"
//       d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm4 20a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
//     />
//   </svg>
//   <span className="text-xs hidden md:block">My cart</span>
// </button>
//         </div>
//       </div>
//     </nav>
//   );
// };


// export default Navbar;

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

import React from 'react';
import { IoSearch } from "react-icons/io5";

import logo from "../assets/logo.png";

const Navbar = () => {
  const categories = ["All category", "Gadgets", "Clothes", "Accessories"];
   const [selectedCategory, setSelectedCategory] = useState('All category');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300">

      <div className="w-full max-w-[1200px] mx-auto px-4 py-3">

        {/* 🔴 MOBILE NAVBAR */}
        <div className="lg:hidden">

          {/* Top Row */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <span className="text-xl"><GiHamburgerMenu />
              </span>

              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="h-8" />
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-5">
              {/* Profile */}
              <button className="flex flex-col items-center text-gray-700 hover:text-blue-600 opacity-60 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 
      1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 
      4v2h16v-2c0-2.66-5.33-4-8-4"
                  />
                </svg>
                <span className="text-xs hidden md:block">Profile</span>
              </button>

              {/* My cart */}
              <button className="flex flex-col items-center opacity-60 text-gray-700 hover:text-blue-600 transition-colors relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  viewBox="0 0 24 24"
                >
                  <title>cart-filled</title>
                  <path
                    fill="currentColor"
                    d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm4 20a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
                  />
                </svg>
                <span className="text-xs hidden md:block">My cart</span>
              </button>

            </div>

          </div>

          {/* Search */}
          <div className="mt-3 relative">
            <IoSearch className="absolute top-1/3 left-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 bg-[#F7FAFC] rounded-md px-7 py-2 text-sm"
            />
          </div>

          {/* Categories */}
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="whitespace-nowrap px-3 py-1.5 bg-gray-100 rounded-md text-sm text-blue-600"
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* 🟢 DESKTOP NAVBAR (YOUR ORIGINAL) */}
        <div className="hidden lg:flex h-[60px] items-center justify-between gap-6">

          {/* Logo */}
          <img src={logo} alt="logo" className="h-12" />

          {/* Search */}
          <div className="flex flex-1 max-w-[600px]">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border border-gray-300 rounded-l-md  px-4 py-2 text-sm outline outline-2 outline-blue-500 focus:border-transparent"
            />
           {/* Category Dropdown Button (right side of input) */}
            <div className="relative ">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 w-[145px] outline outline-2 outline-blue-500 bg-gray-100 border border-l-0 border-gray-300 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                <span>{selectedCategory}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-50">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>
            

            <button className="bg-blue-500 text-white px-5 rounded-r-md text-sm outline outline-2 outline-blue-500 focus:border-transparent">
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Profile */}
            <button className="flex flex-col items-center text-gray-700 hover:text-blue-600 opacity-60 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 
      1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 
      4v2h16v-2c0-2.66-5.33-4-8-4"
                />
              </svg>
              <span className="text-xs hidden md:block">Profile</span>
            </button>

            {/* Message */}
            <button className="flex flex-col items-center text-gray-700 hover:text-blue-600 opacity-60 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"
                />
              </svg>
              <span className="text-xs hidden md:block">Message</span>
            </button>

            {/* Orders */}
            <button className="flex flex-col items-center text-gray-700 opacity-60 hover:text-blue-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <title>heart-filled</title>
                <path
                  fill="currentColor"
                  fillOpacity="0"
                  d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s"
                    dur="0.4s"
                    to="1"
                  />
                </path>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="30;0"
                  />
                </path>
              </svg>
              <span className="text-xs hidden md:block">Orders</span>
            </button>

            {/* My cart */}
            <button className="flex flex-col items-center opacity-60 text-gray-700 hover:text-blue-600 transition-colors relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <title>cart-filled</title>
                <path
                  fill="currentColor"
                  d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm4 20a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
                />
              </svg>
              <span className="text-xs hidden md:block">My cart</span>
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;




