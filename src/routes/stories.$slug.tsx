import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { STORIES, getStory } from "@/lib/stories-data";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.story;
    if (!s) return { meta: [{ title: "Story — Magic in Reels" }] };
    return {
      meta: [
        { title: `${s.couple} — ${s.location} · Magic in Reels` },
        { name: "description", content: `${s.tagline}. A ${s.location} story filmed by Magic in Reels.` },
        { property: "og:title", content: `${s.couple} — ${s.location}` },
        { property: "og:description", content: s.tagline },
        { property: "og:url", content: `/stories/${s.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/stories/${s.slug}` }],
    };
  },
  component: StoryDetail,
});

function StoryDetail() {
  const { story } = Route.useLoaderData();
  const idx = STORIES.findIndex((s) => s.slug === story.slug);
  const next = STORIES[(idx + 1) % STORIES.length];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden bg-ink text-ivory">
        <img
          src={story.cover}
          alt={`${story.couple} cover`}
          width={1200}
          height={1500}
          className="absolute inset-0 h-full w-full object-cover opacity-70 slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink" />
        <div className="grain absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 lg:px-12 pb-20 pt-40">
          <div className="eyebrow text-gold mb-6">{story.chapter} · {story.year}</div>
          <h1 className="font-display text-[12vw] md:text-[9rem] leading-[0.88] max-w-6xl">
            {story.couple.split(" & ").map((n: string, i: number, arr: string[]) => (
              <span key={i}>
                {n}
                {i < arr.length - 1 && <span className="italic text-gold"> & </span>}
              </span>
            ))}
          </h1>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-3">
            <p className="font-serif italic text-2xl text-ivory/85">{story.tagline}</p>
            <span className="text-xs uppercase tracking-[0.28em] text-ivory/60">{story.location}</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <div className="eyebrow mb-6">The prelude</div>
        <p className="font-display text-3xl md:text-4xl leading-tight text-ink">
          It began the way the best stories do — quietly, and slightly ahead of schedule.
          What follows is not a wedding album. It's a small archive of a very particular
          <span className="italic text-ember"> weekend in {story.location.split(",")[0]}</span>.
        </p>
      </section>

      {/* Editorial gallery */}
      <section className="mx-auto max-w-[1500px] px-6 lg:px-12 space-y-16 pb-24">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <img src={story.gallery[0]} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="md:col-span-4 md:pt-24 space-y-6">
            <img src={story.gallery[1]} alt="" loading="lazy" className="w-full aspect-[3/4] object-cover" />
            <div className="font-serif italic text-ink/75 text-lg leading-relaxed">
              "The light through the window at 4pm — that was the moment I knew we'd never
              forget how this day felt."
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <img src={story.gallery[2]} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          <img src={story.gallery[3]} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover md:mt-20" />
        </div>

        <div className="relative">
          <img src={story.gallery[4]} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5 md:pt-32 space-y-6 order-2 md:order-1">
            <div className="eyebrow">The reception</div>
            <p className="text-ink/75 text-lg leading-relaxed">
              String lights strung between old jacaranda trees. A first dance that ended in
              laughter. A grandmother who did not sit down for four hours.
            </p>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <img src={story.gallery[5]} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* Quote block */}
      <section className="bg-ink text-ivory py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="eyebrow text-gold mb-8">In their words</div>
          <blockquote className="font-display text-3xl md:text-5xl leading-tight italic">
            "{story.quote}"
          </blockquote>
          <div className="mt-8 text-xs uppercase tracking-[0.28em] text-ivory/60">— {story.quoteBy}</div>
        </div>
      </section>

      {/* Next chapter */}
      <Link
        to="/stories/$slug"
        params={{ slug: next.slug }}
        className="group relative block min-h-[70vh] overflow-hidden bg-ink text-ivory"
      >
        <img
          src={next.cover}
          alt={next.couple}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-[1600ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-12 py-32 flex flex-col items-start">
          <div className="eyebrow text-gold mb-6">Next chapter →</div>
          <h3 className="font-display text-6xl md:text-8xl leading-[0.9]">
            {next.couple}
          </h3>
          <p className="mt-4 font-serif italic text-xl text-ivory/80">{next.tagline}</p>
          <span className="mt-8 text-xs uppercase tracking-[0.28em] border-b border-gold text-gold pb-1">
            Read the story
          </span>
        </div>
      </Link>
    </SiteLayout>
  );
}
