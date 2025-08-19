import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("bg-amber-50");
  const [search, setSearch] = useState("");

  const colorMap = {
    default: "bg-amber-50",
    dark: "bg-gray-900",
    green: "bg-green-100",
    red: "bg-red-100",
    yellow: "bg-yellow-100",
    purple: "bg-purple-100",
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const theme = search.toLowerCase();
      if (colorMap[theme]) {
        setColor(colorMap[theme]);
        setSearch("");
      }
    }
  };

  return (
    <div className={`w-full h-screen transition-colors duration-500 ${color}`}>
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/590/590836.png"
              className="h-8"
              alt="Café Logo"
            />
            <span className="self-center text-2xl font-bold text-gray-800">
              Brew Bliss
            </span>
          </a>

          <div className="flex-1 px-4">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search theme..."
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setColor(colorMap.default)}
              className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow"
            >
              Default
            </button>

            <button
              onClick={() => setColor(colorMap.dark)}
              className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black shadow"
            >
              Dark
            </button>

            <button
              onClick={() => setColor(colorMap.green)}
              className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow"
            >
              Green
            </button>

            <button
              onClick={() => setColor(colorMap.red)}
              className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow"
            >
              Red
            </button>

            <button
              onClick={() => setColor(colorMap.yellow)}
              className="px-4 py-2 rounded-lg text-gray-900 bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 shadow"
            >
              Yellow
            </button>

            <button
              onClick={() => setColor(colorMap.purple)}
              className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow"
            >
              Purple
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}