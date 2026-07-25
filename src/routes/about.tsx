import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import about1 from "@/assets/about-1.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import story2 from "@/assets/story-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Studio — Magic in Reels" },
      {
        name: "description",
        content: "Meet the small, deliberate team behind Magic in Reels — a boutique film and photography studio.",
      },
      { property: "og:title", content: "The Studio — Magic in Reels" },
      { property: "og:description", content: "Two eyes, one obsession — meet the studio." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  ["2018", "Studio founded above a coffee roastery in Bengaluru."],
  ["2020", "First international commission — a rain-soaked elopement in Kerala backwaters."],
  ["2022", "Named among Vogue India's ten film studios to watch."],
  ["2024", "Opened a second darkroom for hand-printed archival prints."],
  ["2026", "You're reading this. Say hello."],
];

const TEAM = [
  { name: "Anaya Rao", role: "Founder & Lead Cinematographer", img: portrait1 },
  { name: "Kabir Menon", role: "Lead Photographer", img: about1 },
  { name: "Iyla Fernandes", role: "Editor & Colorist", img: story2 },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 mx-auto max-w-[1500px] px-6 lg:px-12 grid gap-14 lg:grid-cols-[1.3fr_1fr] items-end">
        <div>
          <div className="eyebrow mb-6">The studio</div>
          <h1 className="font-display text-[10vw] md:text-[7.5rem] leading-[0.9]">
            A small room, <br />
            a long <span className="italic text-gold">obsession</span>.
          </h1>
        </div>
        <p className="text-lg text-ink/70 font-serif leading-relaxed max-w-md">
          Magic in Reels is a five-person studio working out of a converted mill house in
          Bengaluru. We take on eighteen weddings a year, no more, so that each one gets
          the attention it deserves.
        </p>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="relative aspect-[16/9] overflow-hidden bg-ink">
          <img src={about1} alt="The team at work" loading="lazy" className="h-full w-full object-cover slow-zoom" />
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-[1500px] px-6 lg:px-12 py-32 grid gap-16 lg:grid-cols-[1fr_2fr]">
        <div className="eyebrow lg:sticky lg:top-32 lg:self-start">Our manifesto</div>
        <div className="space-y-10 text-2xl font-serif leading-[1.4] text-ink/85">
          <p>
            We believe the wedding industry has spent a decade optimising for the wrong metric.
            A photograph should not be judged by how many likes it collects on a Tuesday —
            it should be judged by whether your granddaughter will still cry when she finds it.
          </p>
          <p>
            We shoot slowly. We edit slower. We print in editions of one, on paper that will
            still be here in ninety years. And we say <span className="italic text-ember">no</span> often, so that when
            we say yes, we mean it.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-28">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="eyebrow mb-6">The team</div>
          <h2 className="font-display text-5xl md:text-7xl mb-14">Five people, one darkroom.</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {TEAM.map((m, i) => (
              <div key={m.name} className={`${i === 1 ? "md:mt-16" : ""}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
                  <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-1000" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl">{m.name}</h3>
                  <span className="font-mono text-xs text-ink/50">0{i + 1}</span>
                </div>
                <p className="text-sm uppercase tracking-[0.22em] text-ink/60 mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-[1500px] px-6 lg:px-12 py-32">
        <div className="eyebrow mb-6">A short history</div>
        <h2 className="font-display text-5xl md:text-7xl mb-16">Eight years, and counting.</h2>
        <ol className="space-y-2">
          {TIMELINE.map(([year, text]) => (
            <li
              key={year}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[120px_1fr] gap-8 items-baseline border-t border-line/60 py-8 group hover:bg-cream/50 -mx-6 px-6 transition"
            >
              <div className="font-display text-4xl md:text-5xl text-gold">{year}</div>
              <div className="font-serif text-xl md:text-2xl leading-snug text-ink/80">{text}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="bg-ink text-ivory py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="eyebrow text-gold mb-6">Ready when you are</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Let's make something <span className="italic">worth keeping</span>.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-block border border-ivory/60 px-10 py-5 text-xs uppercase tracking-[0.28em] hover:bg-gold hover:border-gold hover:text-ink transition"
          >
            Begin an inquiry →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
