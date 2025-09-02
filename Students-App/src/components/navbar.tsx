import { Sun, Moon } from "lucide-react";

type NavbarProps = {
  prevTheme: string;
  toggleTheme: () => void;
};

export default function Navbar({ prevTheme, toggleTheme }: NavbarProps) {
  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 border-b shadow-lg ${
        prevTheme === "light"
          ? "bg-white border-gray-200"
          : "bg-gray-900 border-gray-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/color/48/graduation-cap.png"
            alt="logo"
            className="h-8 w-8"
          />
          <h1
            className={`text-2xl font-bold tracking-wide ${
              prevTheme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Student Portal
          </h1>
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a
              href="#"
              className={`${
                prevTheme === "light"
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-gray-200 hover:text-yellow-400"
              } transition-colors font-medium`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                prevTheme === "light"
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-gray-200 hover:text-yellow-400"
              } transition-colors font-medium`}
            >
              Students
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                prevTheme === "light"
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-gray-200 hover:text-yellow-400"
              } transition-colors font-medium`}
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                prevTheme === "light"
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-gray-200 hover:text-yellow-400"
              } transition-colors font-medium`}
            >
              Results
            </a>
          </li>
        </ul>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`ml-6 p-2 rounded-full shadow-md transition-colors ${
            prevTheme === "light"
              ? "bg-gray-100 hover:bg-gray-200"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {prevTheme === "light" ? (
            <Moon size={22} className="text-gray-800" />
          ) : (
            <Sun size={22} className="text-yellow-400" />
          )}
        </button>
      </div>
    </nav>
  );
}
