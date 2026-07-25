import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { STORIES } from "@/lib/stories-data";
import hero1 from "@/assets/hero-1.jpg";
import about1 from "@/assets/about-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story5 from "@/assets/story-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magic in Reels — Cinematic wedding films & story photography" },
      {
        name: "description",
        content:
          "A boutique studio crafting cinematic wedding films and editorial portraits across India and beyond. Real moments, treated like art.",
      },
      { property: "og:title", content: "Magic in Reels — Cinematic wedding films & story photography" },
      {
        property: "og:description",
        content: "Cinematic wedding films and editorial portraits. Real moments, treated like art.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = STORIES.slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-ink text-ivory">
        <img
          src={hero1}
          alt="Bride bathed in warm golden hour light"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-70 slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink" />
        <div className="grain absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-between px-6 lg:px-12 pt-40 pb-16">
          <div className="max-w-4xl fade-up">
            <div className="eyebrow text-gold mb-8">Est. 2018 · A film & photography studio</div>
            <h1 className="font-display text-[13vw] leading-[0.88] tracking-tight md:text-[9rem] lg:text-[11rem]">
              We keep <br />
              the <span className="italic text-gold">magic</span>
              <br />
              in the reel.
            </h1>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-[1.2fr_auto_auto] md:items-end">
            <p className="max-w-md text-lg text-ivory/80 leading-relaxed font-serif italic">
              Weddings, portraits, and quiet in-between moments — filmed like memories, printed like heirlooms.
            </p>
            <Link
              to="/stories"
              className="group inline-flex items-center gap-4 border border-ivory/40 px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-ivory hover:text-ink transition-colors"
            >
              See the stories
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <div className="text-xs font-mono uppercase tracking-[0.24em] text-ivory/50">
              Scroll<br />↓
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-line/60 bg-cream py-6 overflow-hidden">
        <div className="marquee-track flex gap-14 whitespace-nowrap font-display text-4xl md:text-6xl text-ink/80">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-14">
              {["Weddings", "◆", "Portraits", "◆", "Films", "◆", "Editorial", "◆", "Journeys", "◆", "Legacies", "◆"].map((w, j) => (
                <span key={j} className={w === "◆" ? "text-gold" : "italic"}>
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-[1500px] px-6 lg:px-12 py-32 grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="eyebrow mb-6">Our philosophy</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
            The best photograph <br />
            is the one you <span className="italic text-ember">forgot</span> we took.
          </h2>
        </div>
        <div className="space-y-8 text-lg leading-relaxed text-ink/75">
          <p>
            We don't stage. We don't over-direct. We wait — sometimes for hours — for the second
            your mother laughs so hard she has to sit down, for the instant just before your father
            speaks, for the light that only exists between 6:42 and 6:47 in the evening.
          </p>
          <p>
            Then we press the shutter, roll the camera, and get out of the way. What comes back is
            not a product. It's a small, private film of a day you'll never live again — cut with
            care, scored with restraint, printed on paper that will outlive us all.
          </p>
          <div className="pt-4 grid grid-cols-3 gap-6 border-t border-line/50">
            {[
              ["120+", "Stories told"],
              ["11", "Countries"],
              ["6.5M", "Feet of film"],
            ].map(([n, l]) => (
              <div key={l} className="pt-6">
                <div className="font-display text-4xl text-gold">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/50">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="bg-ink text-ivory py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow mb-4">Selected stories</div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
                Chapters from <br />
                the <span className="italic text-gold">archive</span>.
              </h2>
            </div>
            <Link
              to="/stories"
              className="text-xs uppercase tracking-[0.28em] border-b border-gold pb-1 text-gold hover:text-ivory hover:border-ivory transition"
            >
              View the full index →
            </Link>
          </div>

          <div className="grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-24">
            {featured.map((story, i) => (
              <Link
                key={story.slug}
                to="/stories/$slug"
                params={{ slug: story.slug }}
                className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-ink-soft">
                  <img
                    src={story.cover}
                    alt={`${story.couple} — ${story.location}`}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-70" />
                  <div className="absolute top-6 left-6 eyebrow text-gold">{story.chapter}</div>
                  <div className="absolute bottom-6 right-6 font-mono text-xs text-ivory/70">{story.year}</div>
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl md:text-4xl">{story.couple}</h3>
                  <span className="text-xs uppercase tracking-[0.24em] text-ivory/50">{story.location}</span>
                </div>
                <p className="mt-2 italic text-ivory/70 font-serif text-lg">{story.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-4xl px-6 py-40 text-center">
        <div className="eyebrow mb-8">A word from the couples</div>
        <blockquote className="font-display text-3xl md:text-5xl leading-tight text-ink">
          <span className="text-gold">"</span>They didn't just document our wedding — they held up
          a <span className="italic">mirror</span> to how it actually felt to be there.
          <span className="text-gold">"</span>
        </blockquote>
        <div className="mt-8 text-xs uppercase tracking-[0.28em] text-ink/50">Aanya · Udaipur, 2025</div>
      </section>

      {/* SPLIT — FILM + PORTRAIT */}
      <section className="grid md:grid-cols-2">
        <Link to="/films" className="group relative aspect-[4/5] md:aspect-auto md:min-h-[80vh] overflow-hidden bg-ink">
          <img
            src={story5}
            alt="Behind the camera on a wedding day"
            loading="lazy"
            width={1200}
            height={1500}
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-[1400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/80 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-14 text-ivory">
            <div className="eyebrow text-gold mb-4">The films</div>
            <h3 className="font-display text-5xl md:text-6xl">
              Moving <span className="italic">pictures</span>.
            </h3>
            <p className="mt-4 max-w-sm text-ivory/70">
              Long-form wedding films and short reels, cut with narrative and scored by hand.
            </p>
            <span className="mt-8 text-xs uppercase tracking-[0.28em] text-gold">Watch →</span>
          </div>
        </Link>
        <Link to="/about" className="group relative aspect-[4/5] md:aspect-auto md:min-h-[80vh] overflow-hidden bg-cream">
          <img
            src={about1}
            alt="Cinematographer at work"
            loading="lazy"
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ivory via-ivory/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-14 text-ink">
            <div className="eyebrow mb-4">The studio</div>
            <h3 className="font-display text-5xl md:text-6xl">
              Two eyes. <br />One <span className="italic text-ember">obsession</span>.
            </h3>
            <p className="mt-4 max-w-sm text-ink/70">
              A small team of storytellers who over-prepare so the day itself can feel effortless.
            </p>
            <span className="mt-8 text-xs uppercase tracking-[0.28em] text-ember">Meet us →</span>
          </div>
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-cream py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 grid md:grid-cols-[1.5fr_1fr] gap-12 items-end">
          <div>
            <div className="eyebrow mb-6">Inquire</div>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
              Let's begin your <span className="italic text-ember">chapter</span>.
            </h2>
            <p className="mt-8 max-w-lg text-lg text-ink/70">
              We take on a small, deliberate number of weddings each year. If your date is
              within the next twelve months, tell us about it.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-ink text-ivory px-10 py-5 text-xs uppercase tracking-[0.28em] hover:bg-ember transition"
            >
              Start a conversation →
            </Link>
            <a
              href="mailto:hello@magicinreels.co"
              className="text-sm font-mono text-ink/60 hover:text-ink"
            >
              hello@magicinreels.co
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
