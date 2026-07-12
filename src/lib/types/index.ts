export interface Video {
  id: string;
  title: string;
  subtitle: string;
  categoryId: string;
  url: string;
  thumbnail: string;
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
