import { notFound } from "next/navigation";
import { getVideoById, videos } from "@/lib/data/videos";
import { CustomVideoPlayer } from "@/components/video/CustomVideoPlayer";

interface VideoPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return videos.map((v) => ({ id: v.id }));
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { id } = await params;
  const video = getVideoById(id);

  if (!video) {
    notFound();
  }

  return <CustomVideoPlayer video={video} />;
}
