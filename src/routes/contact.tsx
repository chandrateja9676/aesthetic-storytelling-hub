import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Inquire — Magic in Reels" },
      {
        name: "description",
        content: "Tell us about your day. We take on a small number of weddings each year and reply within 48 hours.",
      },
      { property: "og:title", content: "Inquire — Magic in Reels" },
      { property: "og:description", content: "Tell us about your day. Replies within 48 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    partner: "",
    email: "",
    date: "",
    location: "",
    kind: "Wedding Film + Photo",
    message: "",
  });

  const set = <K extends keyof typeof form>(k: K, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="pt-40 pb-14 mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="eyebrow mb-6">Inquire</div>
        <h1 className="font-display text-[13vw] md:text-[10rem] leading-[0.85]">
          Tell us the <br />
          <span className="italic text-gold">story</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 lg:px-12 grid gap-20 lg:grid-cols-[1.4fr_1fr] pb-32">
        {/* Form */}
        <div className="border-t border-ink pt-10">
          {sent ? (
            <div className="fade-up py-20 text-center">
              <div className="text-6xl text-gold mb-8">✧</div>
              <h2 className="font-display text-5xl">Received. Thank you.</h2>
              <p className="mt-6 font-serif italic text-lg text-ink/70 max-w-md mx-auto">
                We read every message ourselves. Expect a note back within 48 hours — usually
                before the light is good.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", partner: "", email: "", date: "", location: "", kind: "Wedding Film + Photo", message: "" });
                }}
                className="mt-10 text-xs uppercase tracking-[0.28em] border-b border-ink pb-1"
              >
                Send another →
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-10">
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Your name" value={form.name} onChange={(v) => set("name", v)} required />
                <Field label="Partner's name" value={form.partner} onChange={(v) => set("partner", v)} />
              </div>
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Email" type="email" value={form.email} onChange={(v) => set("email", v)} required />
                <Field label="Approximate date" type="date" value={form.date} onChange={(v) => set("date", v)} />
              </div>
              <Field label="Location / Venue" value={form.location} onChange={(v) => set("location", v)} placeholder="Udaipur, Amalfi, a barn we haven't heard of…" />
              <div>
                <Label>Coverage</Label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Wedding Film + Photo", "Film only", "Photo only", "Portrait / Editorial", "Other"].map((k) => (
                    <button
                      type="button"
                      key={k}
                      onClick={() => set("kind", k)}
                      className={`px-4 py-2.5 text-xs uppercase tracking-[0.22em] border transition ${
                        form.kind === k
                          ? "bg-ink text-ivory border-ink"
                          : "border-line text-ink/60 hover:text-ink hover:border-ink"
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label>Tell us about the day</Label>
                <textarea
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  rows={5}
                  placeholder="How you met, what you're picturing, and anything else you'd like us to know."
                  className="mt-3 w-full bg-transparent border-b border-ink/30 focus:border-ink outline-none py-3 text-lg font-serif transition"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-4 bg-ink text-ivory px-10 py-5 text-xs uppercase tracking-[0.28em] hover:bg-ember transition"
              >
                Send inquiry
                <span>→</span>
              </button>
            </form>
          )}
        </div>

        {/* Aside */}
        <aside className="space-y-12 lg:pt-10">
          <Info title="Studio" lines={["Mill House No. 4", "Domlur, Bengaluru", "India"]} />
          <Info
            title="Direct"
            lines={[
              <a key="e" className="hover:text-gold" href="mailto:hello@magicinreels.co">hello@magicinreels.co</a>,
              <a key="p" className="hover:text-gold" href="tel:+911234567890">+91 12345 67890</a>,
            ]}
          />
          <Info title="Hours" lines={["Mon — Fri · 10:00 to 18:00 IST", "Weekends spent on set"]} />
          <Info title="Response time" lines={["Within 48 hours, always."]} />
          <div className="border-t border-line/60 pt-8 text-sm text-ink/60 font-serif italic leading-relaxed">
            "We only take on eighteen weddings a year. If ours isn't the right fit, we'll happily
            introduce you to a studio that is."
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow text-ink/70">{children}</span>;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <Label>{label}{required && <span className="text-ember"> *</span>}</Label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full bg-transparent border-b border-ink/30 focus:border-ink outline-none py-3 text-lg font-serif transition"
      />
    </label>
  );
}

function Info({ title, lines }: { title: string; lines: React.ReactNode[] }) {
  return (
    <div>
      <div className="eyebrow mb-4">{title}</div>
      <div className="space-y-1 text-lg font-serif text-ink/80">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}
