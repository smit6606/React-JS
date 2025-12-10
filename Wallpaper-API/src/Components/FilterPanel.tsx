import { RefreshCw, Check } from "lucide-react";
import type { FilterOptions } from "../Types/Wallpaper";

interface FilterPanelProps {
  filters: FilterOptions;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  onReset: () => void;
}

const COLOR_OPTIONS = [
  { name: "Red", value: "red", hex: "#ef4444" },
  { name: "Blue", value: "blue", hex: "#3b82f6" },
  { name: "Green", value: "green", hex: "#10b981" },
  { name: "Yellow", value: "yellow", hex: "#f59e0b" },
  { name: "Purple", value: "purple", hex: "#8b5cf6" },
  { name: "Pink", value: "pink", hex: "#ec4899" },
  { name: "Black", value: "black", hex: "#000000" },
  { name: "White", value: "white", hex: "#ffffff" },
];

const ORIENTATION_OPTIONS = [
  { value: "all", label: "All Orientations" },
  { value: "horizontal", label: "Landscape" },
  { value: "vertical", label: "Portrait" },
];

const CATEGORY_OPTIONS = [
  { value: "all", label: "All Categories" },
  { value: "photo", label: "Photos" },
  { value: "illustration", label: "Illustrations" },
  { value: "vector", label: "Vectors" },
  { value: "video", label: "Videos" },
];

export default function FilterPanel({
  filters,
  onFilterChange,
  onReset,
}: FilterPanelProps) {
  const toggleColor = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    onFilterChange({ colors: newColors });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Advanced Filters</h3>
          <p className="text-gray-500">Refine your search results</p>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Reset All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Category
          </label>
          <div className="space-y-2">
            {CATEGORY_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  value={option.value}
                  checked={filters.category === option.value}
                  onChange={(e) => onFilterChange({ category: e.target.value })}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Orientation Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Orientation
          </label>
          <div className="space-y-2">
            {ORIENTATION_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <input
                  type="radio"
                  name="orientation"
                  value={option.value}
                  checked={filters.orientation === option.value}
                  onChange={(e) =>
                    onFilterChange({ orientation: e.target.value as any })
                  }
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Colors
          </label>
          <div className="grid grid-cols-4 gap-2">
            {COLOR_OPTIONS.map((color) => (
              <button
                key={color.value}
                onClick={() => toggleColor(color.value)}
                className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-gray-200 hover:scale-105 transition-transform"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              >
                {filters.colors.includes(color.value) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}
                {color.value === "white" && (
                  <div className="absolute inset-0 border border-gray-300 rounded-lg" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Resolution Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Minimum Resolution
          </label>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Width (px)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="4000"
                  step="100"
                  value={filters.minWidth}
                  onChange={(e) =>
                    onFilterChange({ minWidth: parseInt(e.target.value) })
                  }
                  className="flex-1"
                />
                <span className="text-sm font-medium text-gray-700 w-16">
                  {filters.minWidth === 0 ? "Any" : `${filters.minWidth}+`}
                </span>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Height (px)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="4000"
                  step="100"
                  value={filters.minHeight}
                  onChange={(e) =>
                    onFilterChange({ minHeight: parseInt(e.target.value) })
                  }
                  className="flex-1"
                />
                <span className="text-sm font-medium text-gray-700 w-16">
                  {filters.minHeight === 0 ? "Any" : `${filters.minHeight}+`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safe Search */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <label className="flex items-center justify-between cursor-pointer">
          <div>
            <span className="font-medium text-gray-800">Safe Search</span>
            <p className="text-sm text-gray-500">Filter out explicit content</p>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={filters.safeSearch}
              onChange={(e) => onFilterChange({ safeSearch: e.target.checked })}
              className="sr-only"
            />
            <div
              className={`w-12 h-6 rounded-full transition-colors ${
                filters.safeSearch ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  filters.safeSearch ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
