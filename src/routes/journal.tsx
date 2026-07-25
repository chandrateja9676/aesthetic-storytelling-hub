import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import story5 from "@/assets/story-5.jpg";
import story6 from "@/assets/story-6.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Field notes from the studio · Magic in Reels" },
      { name: "description", content: "Essays, field notes, and behind-the-lens reflections from the Magic in Reels studio." },
      { property: "og:title", content: "Journal — Magic in Reels" },
      { property: "og:description", content: "Essays and field notes from the studio." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

const POSTS = [
  {
    title: "Why we still shoot on film, in 2026",
    excerpt: "There's a texture to a moment captured in silver halide that no sensor has yet replicated. We explain, defensively.",
    read: "6 min read",
    date: "March 12, 2026",
    tag: "Craft",
    image: story2,
  },
  {
    title: "A quiet manifesto against the highlight reel",
    excerpt: "The most-liked frame is almost never the truest one. On resisting the algorithm during a wedding day.",
    read: "8 min read",
    date: "February 04, 2026",
    tag: "Philosophy",
    image: story5,
  },
  {
    title: "Field notes: monsoon weddings in Udaipur",
    excerpt: "What happens when the light disappears at 4pm and the mehndi starts to run. (Spoiler: the best photos of the year.)",
    read: "5 min read",
    date: "January 22, 2026",
    tag: "Field notes",
    image: story3,
  },
  {
    title: "The gear list, honestly",
    excerpt: "We get asked this weekly, so here it is — every camera, lens, and beat-up bag we actually use.",
    read: "10 min read",
    date: "December 09, 2025",
    tag: "Gear",
    image: story4,
  },
  {
    title: "On being invisible at a wedding",
    excerpt: "A short essay on the very specific choreography of not being noticed.",
    read: "4 min read",
    date: "November 28, 2025",
    tag: "Philosophy",
    image: story6,
  },
];

function JournalPage() {
  const [feature, ...rest] = POSTS;

  return (
    <SiteLayout>
      <section className="pt-40 pb-16 mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="eyebrow mb-6">The journal</div>
        <h1 className="font-display text-[13vw] md:text-[10rem] leading-[0.85]">
          Field <span className="italic text-gold">notes</span>.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ink/70 font-serif italic">
          Essays, gear talk, and half-formed thoughts from behind the lens. Updated when the light is bad.
        </p>
      </section>

      {/* Feature post */}
      <section className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <Link to="/journal" className="group grid gap-10 md:grid-cols-2 items-center">
          <div className="relative overflow-hidden aspect-[5/4] bg-cream">
            <img
              src={feature.image}
              alt={feature.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-ink/50">
              <span className="text-gold">{feature.tag}</span>
              <span>·</span>
              <span>{feature.date}</span>
              <span>·</span>
              <span>{feature.read}</span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] group-hover:italic transition">
              {feature.title}
            </h2>
            <p className="mt-6 text-lg text-ink/70 font-serif leading-relaxed">{feature.excerpt}</p>
            <span className="mt-8 inline-block text-xs uppercase tracking-[0.28em] border-b border-ink pb-1">
              Read the essay →
            </span>
          </div>
        </Link>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[1500px] px-6 lg:px-12 mt-24 pb-24">
        <div className="border-t border-line/60 pt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.title} to="/journal" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream mb-5">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 eyebrow bg-ivory/85 px-2 py-1 text-ink">{p.tag}</span>
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-ink/50 font-mono">{p.date} · {p.read}</div>
              <h3 className="mt-2 font-display text-3xl group-hover:italic transition">{p.title}</h3>
              <p className="mt-2 text-ink/70">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
