import { useState, useEffect } from "react";
import {
  Bell,
  User,
  Upload,
  Menu,
  X,
  Home,
  Bookmark,
  Grid3x3,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
              <Grid3x3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VisualHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className={`flex items-center gap-2 font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </a>
            <a
              href="#"
              className={`flex items-center gap-2 font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              Collections
            </a>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                isScrolled
                  ? "bg-linear-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg"
                  : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              }`}
            >
              <Upload className="w-4 h-4" />
              Upload
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button
              className={`relative p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "hover:bg-gray-100 text-gray-600"
                  : "hover:bg-white/20 text-white"
              }`}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <button
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "hover:bg-gray-100 text-gray-600"
                  : "hover:bg-white/20 text-white"
              }`}
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isScrolled
                  ? "text-gray-600 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  <Bookmark className="w-5 h-5" />
                  <span className="font-medium">Collections</span>
                </a>
                <button className="w-full flex items-center gap-3 p-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow">
                  <Upload className="w-5 h-5" />
                  Upload Content
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
