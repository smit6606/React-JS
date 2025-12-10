export interface WallpaperItem {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  previewURL: string;
  tags: string;
  user: string;
  userImageURL: string;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  type: string;
}

export interface FilterOptions {
  sortBy: "popular" | "latest" | "downloads" | "likes" | "comments" | "views";
  category: string;
  orientation: "all" | "horizontal" | "vertical";
  colors: string[];
  minWidth: number;
  minHeight: number;
  safeSearch: boolean;
}
