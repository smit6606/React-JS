import { motion } from "framer-motion";
import { Download, Heart, Eye, ZoomIn } from "lucide-react";
import type { WallpaperItem } from "../Types/Wallpaper";

interface ImageGridProps {
  wallpapers: WallpaperItem[];
  isLoading: boolean;
  onWallpaperSelect: (wallpaper: WallpaperItem) => void;
}

export default function ImageGrid({
  wallpapers,
  isLoading,
  onWallpaperSelect,
}: ImageGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-72 animate-pulse"
          >
            <div className="h-full w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {wallpapers.map((wallpaper) => (
        <motion.div
          key={wallpaper.id}
          variants={item}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          onClick={() => onWallpaperSelect(wallpaper)}
        >
          {/* Image */}
          <div className="relative h-72 overflow-hidden">
            <img
              src={wallpaper.webformatURL}
              alt={wallpaper.tags}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {wallpaper.likes}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {wallpaper.downloads}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {wallpaper.views}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Resolution Badge */}
            <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {wallpaper.imageWidth}×{wallpaper.imageHeight}
            </div>
          </div>

          {/* Info */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow">
                  <img
                    src={
                      wallpaper.userImageURL ||
                      `https://ui-avatars.com/api/?name=${wallpaper.user}&background=random`
                    }
                    alt={wallpaper.user}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {wallpaper.user}
                </span>
              </div>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                {wallpaper.type}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {wallpaper.tags
                .split(",")
                .slice(0, 3)
                .map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    {tag.trim()}
                  </span>
                ))}
              {wallpaper.tags.split(",").length > 3 && (
                <span className="text-xs px-2 py-1 text-gray-400">
                  +{wallpaper.tags.split(",").length - 3}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
