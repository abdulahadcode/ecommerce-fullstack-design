import React from "react";

function Newsletter() {
    return (
        <section className="flex justify-center bg-gray-200 py-8 lg:py-10 mt-6">

            <div className="w-full lg:w-[77vw] px-4 flex flex-col items-center text-center">

                {/* Title */}
                <h2 className="text-lg lg:text-xl font-medium">
                    Subscribe on our newsletter
                </h2>

                {/* Subtitle */}
                <p className="text-sm lg:text-base text-gray-500 mt-2 max-w-md">
                    Get daily news on upcoming offers from many suppliers all over the world
                </p>

                {/* Input + Button */}
                <div className="flex flex-col lg:flex-row gap-2 mt-4 w-full max-w-md">

                    {/* Input */}
                    <div className="flex items-center rounded-md lg:rounded-l-md lg:rounded-r-none pl-3 bg-white w-full border border-gray-300">
                        
                        <span className="text-gray-400 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"/>
                            </svg>
                        </span>

                        <input
                            type="email"
                            placeholder="Email"
                            className="outline-none py-2.5 text-sm w-full"
                        />
                    </div>

                    {/* Button */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-md lg:rounded-l-none text-sm">
                        Subscribe
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Newsletter;