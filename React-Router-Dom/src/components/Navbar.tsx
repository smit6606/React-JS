// Navbar.tsx
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            iSTUDIO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link to="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-blue-600">
              Services
            </Link>
            <Link to="/projects" className="text-gray-800 hover:text-blue-600">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link to="/" className="block text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-800 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-gray-800 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="block text-gray-800 hover:text-blue-600"
            >
              Projects
            </Link>

            {/* Mobile Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center w-full text-gray-800 hover:text-blue-600"
              >
                Pages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="ml-4 space-y-1">
                  <Link
                    to="/features"
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    Features
                  </Link>
                  <Link
                    to="/team"
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/testimonial"
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    Testimonial
                  </Link>
                  <Link
                    to="/404"
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    404 Page
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block text-gray-800 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
