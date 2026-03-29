import React from "react";
import bluecard from "../assets/bluecard.png"

function QuoteSection() {
  return (
    <section className="flex justify-center my-6">

      <div className="w-full lg:w-[77vw] lg:h-[420px] rounded-md relative overflow-hidden">

        {/* Background Image */}
        <img
          src={bluecard}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row justify-between p-4 lg:px-10">

          {/* Left Text */}
          <div className="text-white lg:max-w-md lg:my-10">
            <h2 className="text-xl lg:text-4xl font-bold">
              An easy way to send requests to all suppliers
            </h2>

            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit orem
              ipsum dolor sit amet, adipisicing
            </p>

            {/* Mobile Button */}
            <button className="mt-4 lg:hidden bg-blue-600 text-white text-sm px-4 py-2 rounded">
              Send inquiry
            </button>
          </div>

          {/* Desktop Form Only */}
          <div className="hidden lg:block bg-white p-6 rounded-md w-[491px] my-10">

            <h3 className="font-semibold text-xl mb-3">
              Send quote to suppliers
            </h3>

            <input
              type="text"
              placeholder="What item you need?"
              className="w-full border border-gray-300 p-2 mb-2 rounded"
            />

            <textarea
              placeholder="Type more details"
              className="w-full border border-gray-300 p-2 mb-2 rounded"
            ></textarea>

            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Quantity"
                className="w-1/2 border p-2 rounded border-gray-300"
              />

              <select className="w-1/2 border border-gray-300 p-2 rounded">
                <option>Pcs</option>
              </select>
            </div>

            <button className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 text-white px-4 py-2 rounded">
              Send inquiry
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default QuoteSection;