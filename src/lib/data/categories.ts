import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "birthday",
    slug: "birthday",
    icon: "🎂",
    title: "день рождения",
    subtitle: "особенный день",
    videoIds: ["birthday"],
  },
  {
    id: "miss-you",
    slug: "miss-you",
    icon: "🤍",
    title: "мне тебя не хватает",
    subtitle: "когда скучаешь по мне",
    videoIds: ["hug", "smell_me", "just_be_with_me", "love_you"],
  },
  {
    id: "be-with-me",
    slug: "be-with-me",
    icon: "☕",
    title: "побудь со мной",
    subtitle: "просто рядом",
    videoIds: ["tea", "breakfast", "dinner", "cooking", "walk"],
  },
  {
    id: "make-laugh",
    slug: "make-laugh",
    icon: "😂",
    title: "рассмеши меня",
    subtitle: "немного радости",
    videoIds: ["funny_story", "make_you_laugh", "random"],
  },
  {
    id: "kelly",
    slug: "kelly",
    icon: "🐈",
    title: "покажи келли",
    subtitle: "наша девочка",
    videoIds: ["kelly", "kelly_fun"],
  },
  {
    id: "support",
    slug: "support",
    icon: "💛",
    title: "мне нужна поддержка",
    subtitle: "когда тяжело",
    videoIds: ["proud_of_you", "thank_you", "hard_day", "i_need_to_tell_you"],
  },
  {
    id: "sleep",
    slug: "sleep",
    icon: "🌙",
    title: "пора спать",
    subtitle: "тихой ночи",
    videoIds: ["sleep", "bedtime_story"],
  },
  {
    id: "music",
    slug: "music",
    icon: "🎵",
    title: "давай что-нибудь послушаем",
    subtitle: "музыка и тишина",
    videoIds: ["music", "rain"],
  },
  {
    id: "memories",
    slug: "memories",
    icon: "📸",
    title: "давай вспомним",
    subtitle: "наши моменты",
    videoIds: ["childhood", "hold_my_hand", "home"],
  },
  {
    id: "no-reply",
    slug: "no-reply",
    icon: "📱",
    title: "если я сейчас не отвечаю",
    subtitle: "я всё равно здесь",
    videoIds: ["no_reply"],
  },
  {
    id: "surprise",
    slug: "surprise",
    icon: "🎁",
    title: "сюрприз",
    subtitle: "маленький секрет",
    videoIds: ["secret"],
  },
  {
    id: "family-movie",
    slug: "family-movie",
    icon: "🎞️",
    title: "наш фильм",
    subtitle: "для самых близких",
    videoIds: ["family_movie"],
  },
  {
    id: "random",
    slug: "random",
    icon: "🎲",
    title: "выбери за меня",
    subtitle: "доверься мне",
    videoIds: [],
    isRandomPicker: true,
  },
];

export const categoryMap = new Map(categories.map((c) => [c.slug, c]));

export function getCategoryBySlug(slug: string): Category | undefined {
  return categoryMap.get(slug);
}
