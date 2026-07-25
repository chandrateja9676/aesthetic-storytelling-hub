import hero1 from "@/assets/hero-1.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import story5 from "@/assets/story-5.jpg";
import story6 from "@/assets/story-6.jpg";
import portrait1 from "@/assets/portrait-1.jpg";

export type Story = {
  slug: string;
  couple: string;
  location: string;
  year: string;
  tagline: string;
  chapter: string;
  cover: string;
  gallery: string[];
  quote: string;
  quoteBy: string;
};

export const STORIES: Story[] = [
  {
    slug: "aanya-and-vikram",
    couple: "Aanya & Vikram",
    location: "Udaipur, India",
    year: "2025",
    tagline: "A palace, a promise, and monsoon light",
    chapter: "Chapter 01",
    cover: story3,
    gallery: [story3, story4, story2, hero1, portrait1, story6],
    quote:
      "They didn't just document our wedding — they held up a mirror to how it actually felt to be there.",
    quoteBy: "Aanya, the bride",
  },
  {
    slug: "meera-and-noah",
    couple: "Meera & Noah",
    location: "Amalfi Coast, Italy",
    year: "2025",
    tagline: "Salt in the hair, cathedrals on the cliff",
    chapter: "Chapter 02",
    cover: story1,
    gallery: [story1, story6, story2, story4, hero1, story5],
    quote: "Every frame feels like a memory I forgot I had. It's honestly a little uncanny.",
    quoteBy: "Noah, the groom",
  },
  {
    slug: "ishani-and-arjun",
    couple: "Ishani & Arjun",
    location: "Jaipur, India",
    year: "2024",
    tagline: "Marigolds, mirrors, and mothers laughing",
    chapter: "Chapter 03",
    cover: portrait1,
    gallery: [portrait1, story3, story2, story5, story4, story6],
    quote: "We stopped noticing the camera on day one. That's the whole magic.",
    quoteBy: "Ishani, the bride",
  },
  {
    slug: "sara-and-daniel",
    couple: "Sara & Daniel",
    location: "Kyoto, Japan",
    year: "2024",
    tagline: "Cherry blossoms and a very quiet yes",
    chapter: "Chapter 04",
    cover: story6,
    gallery: [story6, story1, story2, hero1, story5, story3],
    quote: "They shot our tiny elopement like it was an epic. Because to us, it was.",
    quoteBy: "Sara",
  },
  {
    slug: "priya-and-rohan",
    couple: "Priya & Rohan",
    location: "Goa, India",
    year: "2024",
    tagline: "Barefoot vows on a beach at low tide",
    chapter: "Chapter 05",
    cover: story5,
    gallery: [story5, story2, story6, story1, story4, portrait1],
    quote: "I'll be honest — I've watched our film seventeen times. It's better than the wedding was.",
    quoteBy: "Rohan, the groom",
  },
  {
    slug: "leila-and-omar",
    couple: "Leila & Omar",
    location: "Marrakech, Morocco",
    year: "2023",
    tagline: "Tiles, tea, and a very loud dance floor",
    chapter: "Chapter 06",
    cover: story4,
    gallery: [story4, story3, story6, story2, hero1, story1],
    quote: "Our grandparents cried at the film. That's the metric that matters.",
    quoteBy: "Leila",
  },
];

export const getStory = (slug: string) => STORIES.find((s) => s.slug === slug);
