import { videos } from "@/lib/data/videos";

export function pickRandomVideoId(excludeIds: string[] = []): string {
  const pool = videos.filter(
    (v) => !v.excludeFromRandom && !excludeIds.includes(v.id),
  );

  if (pool.length === 0) {
    return videos[0].id;
  }

  const index = Math.floor(Math.random() * pool.length);
  return pool[index].id;
}
