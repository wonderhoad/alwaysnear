import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-4xl">🤍</p>
      <p className="text-lg text-foreground/70">кажется, мы немного потерялись</p>
      <Link
        href="/"
        className="rounded-full bg-pink-soft/60 px-6 py-3 text-sm font-medium text-foreground/80 transition hover:bg-pink-soft"
      >
        🏠 домой
      </Link>
    </div>
  );
}
