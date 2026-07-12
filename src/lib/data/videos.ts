import { videos as videoConfigs } from "@/data/videos";
import type { Video } from "@/lib/types";

const EXCLUDE_FROM_RANDOM_CATEGORIES = new Set(["birthday", "family-movie"]);

function toVideo(config: (typeof videoConfigs)[number]): Video {
  return {
    id: config.id,
    title: config.title,
    subtitle: config.description,
    categoryId: config.category,
    url: config.url,
    thumbnail: config.thumbnail,
    excludeFromRandom: EXCLUDE_FROM_RANDOM_CATEGORIES.has(config.category),
    showFamilyMovieButton: config.id === "birthday",
  };
}

export const videos: Video[] = videoConfigs.map(toVideo);

export const videoMap = new Map(videos.map((v) => [v.id, v]));

export function getVideoById(id: string): Video | undefined {
  return videoMap.get(id);
}

export function getVideosByCategory(categoryId: string): Video[] {
  return videos.filter((v) => v.categoryId === categoryId);
}
