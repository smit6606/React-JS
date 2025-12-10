import axios from "axios";
import type { WallpaperItem, FilterOptions } from "../Types/Wallpaper";

const PIXABAY_API_KEY = "52638154-d8f0a8fa9299cc7bb60ab90f3"; // Replace with your actual key
const BASE_URL = "https://pixabay.com/api";

export const fetchWallpapers = async (
  query: string = "nature",
  filters: FilterOptions
): Promise<WallpaperItem[]> => {
  try {
    const params: any = {
      key: PIXABAY_API_KEY,
      q: query,
      per_page: 50,
      safesearch: filters.safeSearch,
      image_type: filters.category === "all" ? "all" : filters.category,
    };

    // Add optional filters
    if (filters.orientation !== "all") {
      params.orientation = filters.orientation;
    }
    if (filters.colors.length > 0) {
      params.colors = filters.colors.join(",");
    }
    if (filters.minWidth > 0) {
      params.min_width = filters.minWidth;
    }
    if (filters.minHeight > 0) {
      params.min_height = filters.minHeight;
    }

    // Map sort options to Pixabay parameters
    const sortMap: Record<string, string> = {
      popular: "popular",
      latest: "latest",
      downloads: "downloads",
      likes: "likes",
      comments: "comments",
      views: "views",
    };
    params.order = sortMap[filters.sortBy] || "popular";

    const response = await axios.get(BASE_URL, { params });

    // Sort data based on selected criteria
    let sortedData = [...response.data.hits];
    switch (filters.sortBy) {
      case "latest":
        sortedData.sort((a, b) => b.id - a.id);
        break;
      case "downloads":
        sortedData.sort((a, b) => b.downloads - a.downloads);
        break;
      case "likes":
        sortedData.sort((a, b) => b.likes - a.likes);
        break;
      case "comments":
        sortedData.sort((a, b) => b.comments - a.comments);
        break;
      case "views":
        sortedData.sort((a, b) => b.views - a.views);
        break;
      default:
        // Already sorted by popularity from API
        break;
    }

    return sortedData;
  } catch (error) {
    console.error("Error fetching wallpapers:", error);
    return [];
  }
};
