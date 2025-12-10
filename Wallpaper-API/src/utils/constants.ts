export const API_CONFIG = {
  BASE_URL: "https://pixabay.com/api",
  DEFAULT_QUERY: "nature",
  PER_PAGE: 50,
};

export const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "latest", label: "Latest First" },
  { value: "downloads", label: "Most Downloads" },
  { value: "likes", label: "Most Liked" },
  { value: "comments", label: "Most Comments" },
  { value: "views", label: "Most Viewed" },
];

export const CATEGORIES = [
  { id: "all", name: "All", icon: "🎨" },
  { id: "photo", name: "Photos", icon: "📷" },
  { id: "illustration", name: "Illustrations", icon: "🖼️" },
  { id: "vector", name: "Vectors", icon: "📐" },
  { id: "video", name: "Videos", icon: "🎥" },
];
