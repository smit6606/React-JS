import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("bg-amber-50 dark:bg-gray-900");

  return (
    <div className={`w-full h-screen ${color}`}>
      <nav className="bg-amber-50 border-b border-amber-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/590/590836.png"
              className="h-8"
              alt="Café Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-amber-800 dark:text-amber-400">
              Brew Bliss
            </span>
          </a>

          {/* Search Box */}
          <div className="flex-1 px-4">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-amber-500 dark:text-amber-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-amber-300 rounded-lg bg-amber-100 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-amber-300 dark:text-white dark:focus:ring-amber-400 dark:focus:border-amber-400"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Color Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setColor("bg-amber-50 dark:bg-gray-900")}
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Default
            </button>

            <button
              onClick={() => setColor("bg-green-700")}
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Green
            </button>

            <button
              onClick={() => setColor("bg-red-700")}
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Red
            </button>

            <button
              onClick={() => setColor("bg-yellow-400")}
              className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Yellow
            </button>

            <button
              onClick={() => setColor("bg-purple-700")}
              className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Purple
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
