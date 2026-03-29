import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { recommendedProducts } from "../data/products";
import QuoteSection from "../components/QuoteSection";
import { MdOutlineVerifiedUser } from "react-icons/md";

import R from "../assets/R.jpg"

function ProductDetail() {
  const { id } = useParams();
  const productId = Number(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = recommendedProducts.find(
    (item) => item.id === Number(id)
  );
  const otherProducts = recommendedProducts.filter(
    (item) => item.id !== productId
  );

  if (!product) {
    return <p className="text-center mt-6">Product not found</p>;
  }

  return (
    <section className="bg-gray-100 pt-5">
      <section className="flex justify-center">
        <div className="w-[77vw] grid grid-cols-1 lg:grid-cols-3 my-9 bg-white gap-6">

          {/* LEFT IMAGE */}
          <div className="border border-gray-400 rounded-md m-5 p-4 ">
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-contain"
            />
          </div>

          {/* MIDDLE DETAILS */}
          <div className="col-span-1 m-5">
            <h1 className="text-2xl font-semibold">
              {product.title}   {/* show product title */}
            </h1>

            <div className="flex items-center gap-4 mt-3 text-md">
              <span className="text-orange-500 text-2xl">★★★★☆</span>
              <span className="text-gray-500">{product.reviews} reviews</span>
              <span className="text-gray-500">{product.sold} sold</span>
            </div>

            {/* price box */}
            <div className="bg-[#FFF0DF] p-4 mt-4 rounded-md">
              <div className="flex justify-between text-xl">
                <div>
                  <p className="text-red-500 font-semibold">
                    ${product.price}
                  </p>
                  <p className="text-xs text-gray-500">50-100 pcs</p>
                </div>

                <div>
                  <p className="font-semibold">
                    ${(product.price * 0.9).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">100-700 pcs</p>
                </div>

                <div>
                  <p className="font-semibold">
                    ${(product.price * 0.8).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">700+ pcs</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm lg:text-xl">
              <span className="text-gray-500 text-md">Price:</span>
              <span>Negotiable</span>

              <span className="text-gray-500 text-md">Type:</span>
              <span>{product.type}</span>

              <span className="text-gray-500 text-md">Material:</span>
              <span>{product.material}</span>

              <span className="text-gray-500 text-md">Design:</span>
              <span>{product.design}</span>

              <span className="text-gray-500 text-md">Supplier:</span>
              <span>{product.supplier}</span>

              <span className="text-gray-500 text-md">Location:</span>
              <span>{product.location}</span>
            </div>

          </div>
          {/* RIGHT SELLER BOX */}
          <div className="border border-gray-300 rounded-md p-4 m-5 hidden lg:block bg-white h-fit">
            <div className="flex gap-2 mb-3">
              <img className="h-15" src={R} alt="" />
              <div>
                <p className="font-semibold text-xl"> Supplier </p>
                <p className="text-md text-gray-500 mt-1"> Guanjoi Trading LLC </p>
              </div>
            </div>
            <p className="text-lg text-gray-500 mt-2"> Germany, Berlin </p>
            <div className="flex items-center mt-2 gap-2">
              <MdOutlineVerifiedUser className="text-2xl text-gray-500" />

              <p className="text-lg text-gray-500 ">Verified sellor</p></div>
            <p className="text-lg text-gray-500 mt-2"> Worldwide shipping </p>
            <button className='py-3 w-full mt-5 text-white text-lg rounded-md bg-blue-500 mt-2'>
              Send Inquiry
            </button>

            <button className='py-3 w-full text-blue-500 text-lg font-semibold rounded-md border border-gray-300 bg-white mt-2'>
              Seller's profile
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-6">
        <div className="w-[95vw] lg:w-[77vw] grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-3">

            {/* Tabs header */}
            <div className="border border-gray-300 rounded-md lg:text-lg text-xs  bg-white p-4">

              <div className="flex gap-6 border-b  font-medium pb-3">
                <button className="text-blue-600 border-b-2 border-blue-600 ">
                  Description
                </button>

                <button className="text-gray-500">
                  Reviews
                </button>

                <button className="text-gray-500">
                  Shipping
                </button>

                <button className="text-gray-500">
                  About seller
                </button>
              </div>

              {/* lorem text */}
              <p className=" text-black mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* table */}
              <div className="m-6 border  w- lg:w-100 overflow-hidden">
                <div className="grid grid-cols-2 ">

                  <div className="bg-gray-100 p-2 font-bold  border">
                    Model
                  </div>
                  <div className="p-2 border">
                    #8786867
                  </div>

                  <div className="bg-gray-100 font-bold p-2 border">
                    Style
                  </div>
                  <div className="p-2 border">
                    Classic style
                  </div>

                  <div className="bg-gray-100 font-bold p-2 border">
                    Certificate
                  </div>
                  <div className="p-2 border">
                    ISO-898921212
                  </div>

                  <div className="bg-gray-100 font-bold p-2 border">
                    Size
                  </div>
                  <div className="p-2 border">
                    34mm x 450mm x 19mm
                  </div>

                  <div className="bg-gray-100 font-bold p-2 border">
                    Memory
                  </div>
                  <div className="p-2 border">
                    36GB RAM
                  </div>


                </div>


              </div>
              <ul className="space-y-3 mt-5 text-gray-700">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8.364 8.364a1 1 0 01-1.414 0L3.293 11.414a1 1 0 011.414-1.414l3.222 3.222 7.657-7.657a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Some great feature name here</span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8.364 8.364a1 1 0 01-1.414 0L3.293 11.414a1 1 0 011.414-1.414l3.222 3.222 7.657-7.657a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Lorem ipsum dolor sit amet, consectetur</span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8.364 8.364a1 1 0 01-1.414 0L3.293 11.414a1 1 0 011.414-1.414l3.222 3.222 7.657-7.657a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Duis aute irure dolor in reprehenderit</span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8.364 8.364a1 1 0 01-1.414 0L3.293 11.414a1 1 0 011.414-1.414l3.222 3.222 7.657-7.657a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Some great feature name here</span>
                </li>
              </ul>


            </div>

          </div>
          {/* RIGHT SIDEBAR */}
          <div className="space-y-3 lg:space-y-3">
            <h3 className="font-medium text-2xl">
              You may like
            </h3>

            <div className=" flex lg:block gap-3 overflow-x-auto lg:overflow-visible pb-2
  ">

              {otherProducts.slice(0, 6).map((item) => (
                <Link
                  to={`/product/${item.id}`}
                  key={item.id}
                  className="min-w-[160px]
        lg:min-w-0
        flex lg:flex-row flex-col
        border border-gray-300
        p-2
        rounded-md
        bg-white
        hover:shadow-md
        transition
        "

                >

                  <img
                    src={item.image}
                    className="
          
          h-32 lg:h-16
          object-contain
          "
                  />

                  <div className="mt-2 lg:mt-0 lg:ml-2">
                    <p className="text-sm line-clamp-2">
                      {item.title}
                    </p>

                    <p className="text-sm text-gray-500">
                      ${item.price}
                    </p>
                  </div>

                </Link>
              ))}

            </div>
          </div>

        </div>
      </section>



      <QuoteSection />
    </section>
  );
}

export default ProductDetail;
