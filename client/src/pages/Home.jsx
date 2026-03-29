import React from 'react';
import Newsletter from "../components/Newsletter";
import Hero from "../components/Hero"
import Footer from '../components/Footer';
import camera from "../assets/camera.png"
import Laptop from "../assets/Laptop.png"
import phone from "../assets/phone.png"
import watch from "../assets/watch.png"
import headphone from "../assets/headphone.png"
import homedecor from "../assets/homedecor.jpg"
import chair from "../assets/chair.png";
import sofa from "../assets/sofa.png";
import dishes from "../assets/dishes.png";
import laptop from "../assets/lamp.png";
import mixer from "../assets/mixer.png";
import blender from "../assets/blender.png";
import appliance from "../assets/appliance.png";
import coffee from "../assets/coffee.png";
import cotegory2 from "../assets/cotegory2.png"
import QuoteSection from '../components/QuoteSection';
import { Link } from "react-router-dom";


import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

import { recommendedProducts } from "../data/products";


const Home = () => {
  const homeProducts = [
    { title: "Soft chairs", price: 19, image: chair },
    { title: "Sofa & chair", price: 19, image: sofa },
    { title: "Kitchen dishes", price: 19, image: dishes },
    { title: "Smart watches", price: 19, image: watch },
    { title: "Kitchen mixer", price: 100, image: mixer },
    { title: "Blenders", price: 39, image: blender },
    { title: "Home appliance", price: 19, image: appliance },
    { title: "Coffee maker", price: 10, image: coffee }
  ];

  const homeProducts2 = [
    { title: "Soft chairs", price: 19, image: chair },
    { title: "Sofa & chair", price: 19, image: watch },
    { title: "Kitchen dishes", price: 19, image: phone },
    { title: "Smart watches", price: 19, image: sofa },
    { title: "Kitchen mixer", price: 100, image: mixer },
    { title: "Blenders", price: 39, image: blender },
    { title: "Home appliance", price: 19, image: camera },
    { title: "Coffee maker", price: 10, image: coffee }
  ];

 
  const services = [
    {
      title: "Source from Industry Hubs",
      image: service1,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">search-rounded</title><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
    },
    {
      title: "Customize Your Products",
      image: service2,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">product</title><path fill="currentColor" d="M22 3H2v6h1v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9h1zM4 5h16v2H4zm15 15H5V9h14zM9 11h6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2" /></svg>
    },
    {
      title: "Fast, reliable shipping by ocean or air",
      image: service3,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">outline-send</title><path fill="currentColor" d="m4.01 6.03l7.51 3.22l-7.52-1zm7.5 8.72L4 17.97v-2.22zM2.01 3L2 10l15 2l-15 2l.01 7L23 12z" /></svg>
    },
    {
      title: "Product monitoring and inspection",
      image: service4,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">security</title><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.425-.75 4.05-2.963T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12z" /></svg>
    }
  ];
  const suppliers = [
    {
      name: "Arabic Emirates",
      domain: "shopname.ae",
      flag: "https://flagcdn.com/w40/ae.png"
    },
    {
      name: "Australia",
      domain: "shopname.ae",
      flag: "https://flagcdn.com/w40/au.png"
    },
    {
      name: "United States",
      domain: "shopname.ae",
      flag: "https://flagcdn.com/w40/us.png"
    },
    {
      name: "Russia",
      domain: "shopname.ru",
      flag: "https://flagcdn.com/w40/ru.png"
    },
    {
      name: "Italy",
      domain: "shopname.it",
      flag: "https://flagcdn.com/w40/it.png"
    },
    {
      name: "Denmark",
      domain: "denmark.com.dk",
      flag: "https://flagcdn.com/w40/dk.png"
    },
    {
      name: "France",
      domain: "shopname.com.fr",
      flag: "https://flagcdn.com/w40/fr.png"
    },
    {
      name: "China",
      domain: "shopname.ae",
      flag: "https://flagcdn.com/w40/cn.png"
    },
    {
      name: "Great Britain",
      domain: "shopname.co.uk",
      flag: "https://flagcdn.com/w40/gb.png"
    },
    {
      name: "Denmark",
      domain: "denmark.com.dk",
      flag: "https://flagcdn.com/w40/dk.png"
    }
  ];
  return (
    <div>


      {/* Gray section for rest of page */}
      <section className="bg-gray-100 pt-5">
        <Hero />


        {/* Deals and offers section */}
        <section className="flex justify-center mt-6">

          <div className="w-full lg:w-[77vw] lg:h-[240px] bg-white lg:rounded-md flex flex-col lg:flex-row overflow-hidden">

            {/* Left Info Section */}
            <div className="flex lg:block lg:w-[300px] p-4 lg:p-6 lg:border-r border-gray-300 gap-5 items-center">
              <div>
                <h2 className="text-md lg:text-2xl font-bold">
                  Deals and offers
                </h2>
                <p className="text-xs lg:text-md text-gray-500">
                  Hygiene equipments
                </p>
              </div>

              {/* Countdown */}
              <div className="flex gap-2 text-center mt-4 overflow-x-auto lg:overflow-visible">
                <div className="bg-[#606060] min-w-[45px] text-white px-2 py-2 lg:py-3 rounded text-xs">
                  <p className="font-semibold">04</p>
                  <p className="text-[10px]">Days</p>
                </div>
                <div className="bg-[#606060] min-w-[45px] text-white px-2 py-2 lg:py-3 rounded text-xs">
                  <p className="font-semibold">13</p>
                  <p className="text-[10px]">Hour</p>
                </div>
                <div className="bg-[#606060] min-w-[45px] text-white px-2 py-2 lg:py-3 rounded text-xs">
                  <p className="font-semibold">34</p>
                  <p className="text-[10px]">Min</p>
                </div>
                <div className="bg-[#606060] min-w-[45px] text-white px-2 py-2 lg:py-3 rounded text-xs">
                  <p className="font-semibold">56</p>
                  <p className="text-[10px]">Sec</p>
                </div>
              </div>
            </div>

            {/* Right Product Grid */}
            <div className="flex lg:grid lg:grid-cols-5 flex-1 overflow-x-auto scrollbar-hide">

              {/* Card 1 */}
              <div className="min-w-[140px] lg:min-w-0 h-[180px] lg:h-full flex flex-col items-center justify-center border-r border-gray-300">
                <img src={watch} alt="watch" className="h-20 lg:h-28 mb-2" />
                <p className="text-sm lg:text-md">Smart watches</p>
                <span className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded-full mt-2">
                  -25%
                </span>
              </div>

              {/* Card 2 */}
              <div className="min-w-[140px] lg:min-w-0 h-[180px] lg:h-full flex flex-col items-center justify-center border-r border-gray-300">
                <img src={Laptop} alt="laptop" className="h-20 lg:h-28 mb-2" />
                <p className="text-sm lg:text-md">Laptops</p>
                <span className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded-full mt-2">
                  -15%
                </span>
              </div>

              {/* Card 3 */}
              <div className="min-w-[140px] lg:min-w-0 h-[180px] lg:h-full flex flex-col items-center justify-center border-r border-gray-300">
                <img src={camera} alt="camera" className="h-20 lg:h-28 mb-2" />
                <p className="text-sm lg:text-md">GoPro camera</p>
                <span className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded-full mt-2">
                  -40%
                </span>
              </div>

              {/* Card 4 */}
              <div className="min-w-[140px] lg:min-w-0 h-[180px] lg:h-full flex flex-col items-center justify-center border-r border-gray-300">
                <img src={headphone} alt="headphones" className="h-20 lg:h-28 mb-2" />
                <p className="text-sm lg:text-md">Headphones</p>
                <span className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded-full mt-2">
                  -25%
                </span>
              </div>

              {/* Card 5 */}
              <div className="min-w-[140px] lg:min-w-0 h-[180px] lg:h-full flex flex-col items-center justify-center">
                <img src={phone} alt="phone" className="h-20 lg:h-28 mb-2" />
                <p className="text-sm lg:text-md">Canon cameras</p>
                <span className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded-full mt-2">
                  -25%
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* first category home and outdoor */}

        <section className="flex justify-center mt-6">

          <div className="w-full lg:w-[77vw] lg:h-[260px] bg-white lg:rounded-md flex flex-col lg:flex-row">

            {/* Mobile Title */}
            <div className="px-4 py-3 border-b lg:hidden">
              <h2 className="font-semibold text-lg">
                Home and outdoor
              </h2>
            </div>


            {/* Left Info Section (desktop only) */}
            <div className="hidden lg:block w-[300px] border-r relative border-gray-300 overflow-hidden">

              <img
                className="w-full h-full object-cover scale-x-[-1]"
                src={homedecor}
                alt=""
              />

              <div className="absolute inset-0 bg-[#FFE8BA] opacity-40"></div>

              <div className="absolute top-6 left-6 z-10">
                <h1 className="text-2xl font-bold">
                  Home and <br /> outdoor
                </h1>

                <button className="mt-4 py-2 px-4 rounded-md text-sm font-medium bg-white">
                  Source now
                </button>
              </div>

            </div>


            {/* Right Product Grid */}
            <div className="flex lg:grid lg:grid-cols-4 lg:grid-rows-2 overflow-x-auto scrollbar-hide flex-1">
              {homeProducts.map((item, index) => (
                <div
                  key={index}
                  className="
      min-w-[140px] h-[160px] 
      lg:min-w-0 lg:h-auto
      flex flex-col items-center justify-center
      lg:block
      relative p-3 lg:p-4
      bg-white border-r border-b border-gray-300 overflow-x-auto scrollbar-hide"
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
        h-20 mb-2
        lg:absolute lg:bottom-2 lg:right-2 lg:h-20"
                  />

                  {/* Text */}
                  <h3 className="text-xs lg:text-sm font-medium text-center lg:text-left">
                    {item.title}
                  </h3>

                  <p className="text-[11px] lg:text-xs text-gray-500 text-center lg:text-left">
                    From USD {item.price}
                  </p>

                </div>
              ))}

            </div>


            {/* Mobile Source button */}
            <div className="lg:hidden px-4 py-3 border-t">
              <button className="text-blue-500 font-medium flex items-center gap-2">
                Source now →
              </button>
            </div>

          </div>

        </section>
        {/* the second category */}
        <section className="flex justify-center mt-6">

          <div className="w-full lg:w-[77vw] lg:h-[260px] bg-white lg:rounded-md flex flex-col lg:flex-row">

            {/* Mobile Title */}
            <div className="px-4 py-3 border-b lg:hidden">
              <h2 className="font-semibold text-lg">
                Consumer electronics
              </h2>
            </div>


            {/* Left Info Section (desktop only) */}
            <div className="hidden lg:block w-[300px] border-r relative border-gray-300 overflow-hidden">

              <img
                className="w-full h-full object-cover opacity-70"
                src={cotegory2}
                alt=""
              />

              <div className="absolute top-6 left-6 z-10">
                <h1 className="text-2xl font-bold">
                  Consumer <br /> electronics
                </h1>

                <button className="mt-4 py-2 px-4 rounded-md text-sm font-medium bg-white">
                  Source now
                </button>
              </div>

            </div>


            {/* Right Product Grid */}
            <div className="flex lg:grid lg:grid-cols-4 lg:grid-rows-2 overflow-x-auto scrollbar-hide flex-1 border-gray-300 lg:border-t lg:border-l">

              {homeProducts2.map((item, index) => (
                <div
                  key={index}
                  className="
          min-w-[140px] h-[160px]
          lg:min-w-0 lg:h-auto
          flex flex-col items-center justify-center
          lg:block
          relative p-3 lg:p-4
          bg-white border-r border-b border-gray-300"
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
            h-16 mb-2
            lg:absolute lg:bottom-2 lg:right-2 lg:h-20"
                  />

                  {/* Text */}
                  <h3 className="text-xs lg:text-sm font-medium text-center lg:text-left">
                    {item.title}
                  </h3>

                  <p className="text-[11px] lg:text-xs text-gray-500 text-center lg:text-left">
                    From USD {item.price}
                  </p>

                </div>
              ))}

            </div>


            {/* Mobile Source */}
            <div className="lg:hidden px-4 py-3 border-t">
              <button className="text-blue-500 font-medium flex items-center gap-2">
                Source now →
              </button>
            </div>

          </div>

        </section>
        <QuoteSection />

        {/* the product listing card */}

        <section className="flex justify-center mt-7">

          <div className="w-full lg:w-[77vw] px-4 lg:px-0">

            {/* Title */}
            <h2 className="text-lg lg:text-2xl font-semibold mb-4 lg:mb-5">
              Recommended items
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">

              {recommendedProducts.map((item, index) => (
                <Link
                  to={`/product/${item.id}`}
                  key={index}
                  className="bg-white p-3 lg:p-4 rounded-md border border-gray-300 hover:shadow-md transition block"
                >

                  {/* Image */}
                  <div className="flex justify-center mb-3 lg:mb-8">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 lg:h-40 object-contain"
                    />
                  </div>

                  {/* Price */}
                  <p className="font-semibold text-sm">
                    ${item.price}
                  </p>

                  {/* Title */}
                  <p className="text-xs lg:text-md text-gray-500 mt-1">
                    {item.title}
                  </p>

                </Link>
              ))}

            </div>

          </div>

        </section>

        {/* our extra sevices */}

        <section className="flex justify-center mt-9">

          <div className="w-full lg:w-[77vw] px-4 lg:px-0">

            <h2 className="text-lg lg:text-2xl font-medium mb-4 lg:mb-6">
              Our extra services
            </h2>

            {/* cards here */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">

              {services.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md overflow-hidden border border-gray-300 hover:shadow-md transition"
                >

                  {/* Image Section */}
                  <div className="relative h-[100px] lg:h-[120px]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Icon */}
                    <div className="absolute bottom-[-18px] right-3 lg:right-4 w-8 h-8 lg:w-10 lg:h-10 bg-blue-100 flex items-center justify-center rounded-full shadow">
                      <span className="text-sm lg:text-lg">
                        {item.icon}
                      </span>
                    </div>

                  </div>

                  {/* Text */}
                  <div className="p-3 pt-5 lg:p-4 lg:pt-6">
                    <p className="text-sm lg:text-md font-medium">
                      {item.title}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* suppliers by region */}
        <section className="flex justify-center mt-9 bg-gray-100 py-6">

          <div className="w-full lg:w-[77vw] px-4 lg:px-0">

            <h2 className="text-lg lg:text-2xl font-semibold mb-4 lg:mb-6">
              Suppliers by region
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-3">

              {suppliers.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 lg:gap-3 hover:shadow-sm p-1 rounded"
                >

                  {/* Flag */}
                  <img
                    src={item.flag}
                    alt={item.name}
                    className="w-5 h-3 lg:w-6 lg:h-4 object-cover"
                  />

                  {/* Text */}
                  <div>
                    <p className="text-xs lg:text-sm font-medium">
                      {item.name}
                    </p>
                    <p className="text-[10px] lg:text-xs text-gray-500">
                      {item.domain}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>
        <Newsletter />
        


      </section>








    </div >
  )
}

export default Home