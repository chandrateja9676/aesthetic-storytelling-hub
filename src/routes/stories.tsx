import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { STORIES } from "@/lib/stories-data";
import { useState } from "react";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories — Magic in Reels" },
      {
        name: "description",
        content:
          "Every wedding, every portrait, every quiet in-between. Browse the full archive of stories from Magic in Reels.",
      },
      { property: "og:title", content: "Stories — Magic in Reels" },
      { property: "og:description", content: "The full archive of weddings, portraits and journeys." },
      { property: "og:url", content: "/stories" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

const FILTERS = ["All", "Weddings", "Portraits", "Elopements", "Editorial"] as const;

function StoriesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  return (
    <SiteLayout>
      <section className="pt-40 pb-16 mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="eyebrow mb-6">The index · {STORIES.length} chapters</div>
        <h1 className="font-display text-[14vw] md:text-[9rem] leading-[0.88]">
          Every <span className="italic text-gold">frame</span>, <br />
          in its place.
        </h1>
        <p className="mt-10 max-w-xl text-lg text-ink/70 font-serif italic">
          A living archive of the stories we've been trusted with. Sorted by year, filed by feeling.
        </p>
      </section>

      <div className="border-y border-line/60 bg-cream/60 sticky top-[68px] z-30 backdrop-blur-sm">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 py-4 flex flex-wrap items-center gap-2 text-xs">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 uppercase tracking-[0.24em] transition border ${
                filter === f
                  ? "bg-ink text-ivory border-ink"
                  : "border-transparent text-ink/60 hover:text-ink hover:border-line"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50">
            Showing {STORIES.length} of {STORIES.length}
          </span>
        </div>
      </div>

      <section className="mx-auto max-w-[1500px] px-6 lg:px-12 py-20">
        <div className="grid gap-x-8 gap-y-24 md:grid-cols-12">
          {STORIES.map((s, i) => {
            // asymmetric masonry-ish
            const patterns = [
              "md:col-span-7",
              "md:col-span-5 md:mt-24",
              "md:col-span-5",
              "md:col-span-7 md:mt-24",
              "md:col-span-6",
              "md:col-span-6",
            ];
            return (
              <Link
                key={s.slug}
                to="/stories/$slug"
                params={{ slug: s.slug }}
                className={`group block ${patterns[i % patterns.length]}`}
              >
                <div className="relative overflow-hidden bg-cream aspect-[4/5]">
                  <img
                    src={s.cover}
                    alt={`${s.couple} — ${s.location}`}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-5 left-5 eyebrow text-ivory/90 bg-ink/40 px-2 py-1 backdrop-blur-sm">
                    {s.chapter}
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl md:text-4xl group-hover:italic transition-all duration-500">
                    {s.couple}
                  </h3>
                  <span className="font-mono text-xs text-ink/50">{s.year}</span>
                </div>
                <p className="mt-1 text-sm uppercase tracking-[0.24em] text-ink/50">{s.location}</p>
                <p className="mt-3 font-serif italic text-ink/70">{s.tagline}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
