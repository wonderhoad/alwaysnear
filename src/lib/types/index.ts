export type AppVersion = "1.0" | "1.1" | "2.0" | "3.0";

export interface Video {
  id: string;
  filename: string;
  title: string;
  subtitle: string;
  categoryId: string;
  version: AppVersion;
  excludeFromRandom?: boolean;
  showFamilyMovieButton?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  videoIds: string[];
  /** Opens a random video instead of a category listing */
  isRandomPicker?: boolean;
}
