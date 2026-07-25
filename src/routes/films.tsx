import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { STORIES } from "@/lib/stories-data";
import { useState } from "react";

export const Route = createFileRoute("/films")({
  head: () => ({
    meta: [
      { title: "Films — Magic in Reels" },
      {
        name: "description",
        content:
          "Cinematic wedding films and short reels. Narrative-driven, hand-scored, and cut with restraint.",
      },
      { property: "og:title", content: "Films — Magic in Reels" },
      { property: "og:description", content: "Cinematic wedding films, cut with restraint." },
      { property: "og:url", content: "/films" },
    ],
    links: [{ rel: "canonical", href: "/films" }],
  }),
  component: FilmsPage,
});

const FILMS = STORIES.slice(0, 5).map((s, i) => ({
  ...s,
  runtime: ["04:12", "06:38", "03:55", "05:21", "07:04"][i],
  format: ["Feature Film", "Short Reel", "Documentary", "Feature Film", "Portrait Film"][i],
}));

function FilmsPage() {
  const [active, setActive] = useState(0);
  const film = FILMS[active];

  return (
    <SiteLayout>
      {/* Marquee-ish header */}
      <section className="pt-40 pb-10 mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="eyebrow mb-6">The films · {FILMS.length} releases</div>
        <h1 className="font-display text-[13vw] md:text-[10rem] leading-[0.85]">
          Reels that <br />
          <span className="italic text-ember">breathe</span>.
        </h1>
      </section>

      {/* Player mock */}
      <section className="bg-ink text-ivory py-14">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="relative aspect-video overflow-hidden bg-ink-soft group">
            <img
              src={film.cover}
              alt={film.couple}
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <button
              type="button"
              className="absolute inset-0 grid place-items-center"
              aria-label={`Play ${film.couple}`}
            >
              <span className="relative flex h-24 w-24 items-center justify-center rounded-full border border-ivory/40 backdrop-blur-sm transition group-hover:border-gold group-hover:scale-110">
                <span className="absolute inset-0 rounded-full border border-gold/40 animate-ping" />
                <svg width="26" height="30" viewBox="0 0 26 30" fill="none" className="translate-x-0.5">
                  <path d="M0 0L26 15L0 30V0Z" fill="currentColor" className="text-ivory" />
                </svg>
              </span>
            </button>
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap justify-between items-end gap-4">
              <div>
                <div className="eyebrow text-gold mb-2">{film.format} · {film.runtime}</div>
                <h2 className="font-display text-5xl md:text-7xl">{film.couple}</h2>
                <p className="mt-2 font-serif italic text-ivory/80 text-lg">{film.tagline}</p>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-ivory/60">
                {film.location}
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="mt-10 grid gap-2">
            {FILMS.map((f, i) => (
              <button
                key={f.slug}
                onClick={() => setActive(i)}
                className={`grid grid-cols-[auto_1fr_auto_auto] items-center gap-6 border-t border-ivory/10 py-5 text-left transition ${
                  active === i ? "text-ivory" : "text-ivory/50 hover:text-ivory"
                }`}
              >
                <span className="font-mono text-xs w-10">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <div className="font-display text-2xl md:text-3xl truncate">
                    {f.couple}
                    {active === i && <span className="ml-3 text-gold text-xs align-middle">▶ Now playing</span>}
                  </div>
                  <div className="text-xs uppercase tracking-[0.22em] text-ivory/40 mt-1">{f.format} · {f.location}</div>
                </div>
                <span className="hidden md:inline font-mono text-xs text-ivory/40">{f.runtime}</span>
                <span className="text-gold text-sm">↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <div className="eyebrow mb-6">On the craft</div>
        <p className="font-display text-3xl md:text-4xl leading-tight">
          Each film is edited by hand, over weeks. No templates, no shortcuts, no borrowed
          music you've already heard on someone else's <span className="italic text-ember">reel</span>.
        </p>
      </section>
    </SiteLayout>
  );
}
