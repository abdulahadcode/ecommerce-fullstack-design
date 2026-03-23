// import React from 'react';
// import Banner from "../assets/Banner.png";
// import Avatar from "../assets/Avatar.png"


// const Hero = () => {
//   return (
//     <div className="w-[77vw] h-[400px] mx-auto flex gap-4 bg-white p-4">
//       {/* Left vertical list bar */}
//       <div className="w-[250px] max-w-[250px] rounded-md p-2 overflow-y-auto">
//         <ul className="space-y-0.5 text-taxtbase text-gray-700">
//           <li className="p-1.5 hover:bg-blue-100 cursor-pointer hover:text-black transition ">Automobiles </li>
//           <li className="p-1.5 hover:bg-blue-100 cursor-pointer hover:text-black transition">Clothes an Wear</li>
//           <li className="p-1.5 hover:bg-blue-100 cursor-pointer hover:text-black transition">Home and interior</li>
//           <li className="p-1.5 hover:bg-blue-100 cursor-pointer hover:text-black transition">Computer and tech</li>
//           <li className="p-1.5 hover:bg-blue-100 cursor-pointer hover:text-black transition">Tools, equipment</li>
//           <li className="p-1.5 hover:bg-blue-100 cursor-pointer hover:text-black transition">Sports and outdoor</li>
//           <li className="p-1.5 hover:bg-blue-100 cursor-pointer hover:text-black transition">Animal and pats</li>
//           <li className="p-1.5 hover:bg-blue-100 cursor-pointer hover:text-black transition">Machinery tools</li>
//           <li className="p-1.5 hover:bg-blue-100 cursor-pointer hover:text-black transition">More category</li>
//         </ul>
//       </div>

//       {/* Central hero image *text-black*/}
//       <div className="w-[685px] relative bg-blue-200 rounded-md overflow-hidden">
//         <img
//           src={Banner}
//           alt="Hero"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute top-14 left-9">
//           <h1 className="text-3xl mb-1">Latest tranding</h1>
//           <h1 className="text-4xl font-bold mb-6">Electronic items</h1>
//           <button className='bg-white px-4 py-2 rounded-md'>Learn more</button>

//         </div>
//       </div>

//       {/* Right two cards stacked vertically */}
//       <div className="flex-1 flex flex-col gap-3 h-full">
//         <div className="flex-1 bg-blue-100 shadow-md rounded-md p-3">
//           {/* Card 1 content */}
//           <div className="flex gap-3 items-center">
//             <img src={Avatar} className='w-11 h-11' alt="Profile" />
//             <div>
//               <h3 className="font-medium">Hi User,</h3>
//               <h3 className="font-medium">Let's get started</h3>
//             </div>
//           </div>
//           <button className='py-1.5 w-full text-white text-sm rounded-md bg-blue-500 mt-2'>Join now</button>
//           <button className='py-1.5 w-full text-blue-500 text-sm rounded-md bg-white mt-2'>Login now</button>
//         </div>
//         <div className="flex-1 bg-[#F38332] shadow-md rounded-md p-3 h-[57px]">
//           {/* Card 2 content */}
//           <div className="w-[200px]">
//             <p className="text-xl text-white">Get US $10 off with a new supplier</p>

//           </div>

//         </div>

//         <div className="flex-1 bg-[#55BDC3] shadow-md rounded-md p-3">
//           {/* Card 3 content */}
//           <div className="w-[200px]">
//             <p className="text-lg text-white">Get US $10 off with a new supplier</p>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import Banner from "../assets/Banner.png";
import Avatar from "../assets/Avatar.png";

const Hero = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex gap-4 bg-white px-0 lg:p-4">

      {/* Left vertical list bar (HIDDEN MOBILE) */}
      <div className="hidden lg:block w-[250px] rounded-md p-2 overflow-y-auto">
        <ul className="space-y-0.5 text-gray-700">
          <li className="p-1.5 hover:bg-blue-100 cursor-pointer">Automobiles</li>
          <li className="p-1.5 hover:bg-blue-100 cursor-pointer">Clothes an Wear</li>
          <li className="p-1.5 hover:bg-blue-100 cursor-pointer">Home and interior</li>
          <li className="p-1.5 hover:bg-blue-100 cursor-pointer">Computer and tech</li>
          <li className="p-1.5 hover:bg-blue-100 cursor-pointer">Tools, equipment</li>
          <li className="p-1.5 hover:bg-blue-100 cursor-pointer">Sports and outdoor</li>
          <li className="p-1.5 hover:bg-blue-100 cursor-pointer">Animal and pats</li>
          <li className="p-1.5 hover:bg-blue-100 cursor-pointer">Machinery tools</li>
          <li className="p-1.5 hover:bg-blue-100 cursor-pointer">More category</li>
        </ul>
      </div>

      {/* Center Banner (FULL WIDTH MOBILE) */}
      <div className="w-full lg:w-[685px] relative bg-blue-200 rounded-md overflow-hidden">
        <img
          src={Banner}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Hide text on mobile */}
        <div className="hidden lg:block absolute top-14 left-9">
          <h1 className="text-3xl mb-1">Latest tranding</h1>
          <h1 className="text-4xl font-bold mb-6">Electronic items</h1>
          <button className='bg-white px-4 py-2 rounded-md'>
            Learn more
          </button>
        </div>
      </div>

      {/* Right cards (HIDDEN MOBILE) */}
      <div className="hidden lg:flex flex-1 flex-col gap-3 h-full">

        <div className="flex-1 bg-blue-100 shadow-md rounded-md p-3">
          <div className="flex gap-3 items-center">
            <img src={Avatar} className='w-11 h-11' alt="Profile" />
            <div>
              <h3 className="font-medium">Hi User,</h3>
              <h3 className="font-medium">Let's get started</h3>
            </div>
          </div>

          <button className='py-1.5 w-full text-white text-sm rounded-md bg-blue-500 mt-2'>
            Join now
          </button>

          <button className='py-1.5 w-full text-blue-500 text-sm rounded-md bg-white mt-2'>
            Login now
          </button>
        </div>

        <div className="flex-1 bg-[#F38332] shadow-md rounded-md p-3">
          <p className="text-xl text-white">
            Get US $10 off with a new supplier
          </p>
        </div>

        <div className="flex-1 bg-[#55BDC3] shadow-md rounded-md p-3">
          <p className="text-lg text-white">
            Get US $10 off with a new supplier
          </p>
        </div>

      </div>

    </div>
  );
};

export default Hero;