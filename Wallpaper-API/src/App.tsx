import { useEffect, useState, useCallback } from "react";
import HeroSection from "./Components/HeroSection";
import ImageGrid from "./Components/ImageGrid";
import FilterPanel from "./Components/FilterPanel";
import { fetchWallpapers } from "./Services/WallpaperService";
import type { WallpaperItem, FilterOptions } from "./Types/Wallpaper";
import { motion, AnimatePresence } from "framer-motion";

export default function VisualGallery() {
  const [wallpaperList, setWallpaperList] = useState<WallpaperItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterOptions>({
    sortBy: "popular",
    category: "all",
    orientation: "all",
    colors: [],
    minWidth: 0,
    minHeight: 0,
    safeSearch: true,
  });
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<WallpaperItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("nature");
  const [showFilters, setShowFilters] = useState(false);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await fetchWallpapers(searchQuery, activeFilters);
      setWallpaperList(results);
    } catch (error) {
      console.error("Failed to fetch wallpapers:", error);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, activeFilters]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleSearch = (query: string, category: string = "all") => {
    setSearchQuery(query || "nature");
    setActiveFilters((prev) => ({ ...prev, category }));
  };

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    setActiveFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setActiveFilters({
      sortBy: "popular",
      category: "all",
      orientation: "all",
      colors: [],
      minWidth: 0,
      minHeight: 0,
      safeSearch: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <HeroSection onSearch={handleSearch} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Control Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Discover Amazing Visuals
            </h2>
            <p className="text-gray-500 mt-1">
              {wallpaperList.length}+ premium quality assets
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all"
            >
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
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filters
              {Object.values(activeFilters).some((v) =>
                Array.isArray(v)
                  ? v.length > 0
                  : typeof v === "boolean"
                  ? !v
                  : typeof v === "number"
                  ? v > 0
                  : v !== "all" && v !== "popular"
              ) && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
            </button>

            <select
              value={activeFilters.sortBy}
              onChange={(e) => updateFilters({ sortBy: e.target.value as any })}
              className="px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-no-repeat bg-right pr-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.5rem center",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="popular">Most Popular</option>
              <option value="latest">Latest First</option>
              <option value="downloads">Most Downloads</option>
              <option value="likes">Most Liked</option>
              <option value="comments">Most Comments</option>
              <option value="views">Most Viewed</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <FilterPanel
                filters={activeFilters}
                onFilterChange={updateFilters}
                onReset={resetFilters}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <ImageGrid
          wallpapers={wallpaperList}
          isLoading={isLoading}
          onWallpaperSelect={setSelectedWallpaper}
        />

        {/* No Results */}
        {!isLoading && wallpaperList.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No images found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your filters or search for something else
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
