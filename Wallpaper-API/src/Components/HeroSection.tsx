import { useState, useEffect } from "react";
import {
  Search,
  Image as ImageIcon,
  Video,
  Palette,
  Sparkles,
} from "lucide-react";
import Header from "./Header";

interface HeroSectionProps {
  onSearch: (query: string, category: string) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const categories = [
    { id: "all", name: "All", icon: <Sparkles className="w-5 h-5" /> },
    { id: "photo", name: "Photos", icon: <ImageIcon className="w-5 h-5" /> },
    {
      id: "illustration",
      name: "Illustrations",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: "vector",
      name: "Vectors",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      ),
    },
    { id: "video", name: "Videos", icon: <Video className="w-5 h-5" /> },
  ];

  const backgroundImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1920",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    const query = searchText.trim() || "nature";
    onSearch(query, activeCategory);
  };

  return (
    <div className="relative min-h-[600px] overflow-hidden">
      <Header />

      {/* Animated Background */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentBgIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-gray-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Millions of
            <span className="block bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stunning Visual Assets
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            High-quality photos, vectors, illustrations, and videos. Free for
            commercial use.
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  onSearch(searchText || "nature", category.id);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-white text-gray-900 shadow-lg scale-105"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20 shadow-2xl">
              <div className="flex items-center">
                <div className="flex-1 pl-6">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="Search for photos, vectors, illustrations..."
                    className="w-full bg-transparent text-white placeholder-gray-300 text-lg outline-none py-4"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="ml-2 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3"
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="text-gray-300">Trending:</span>
              {[
                "Landscape",
                "Abstract",
                "Technology",
                "Nature",
                "Art",
                "Minimal",
              ].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchText(tag);
                    handleSearch();
                  }}
                  className="text-white/80 hover:text-white hover:scale-105 transition-all"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
