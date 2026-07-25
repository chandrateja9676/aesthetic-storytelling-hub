import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import logoAsset from "@/assets/logo-full.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/stories", label: "Stories" },
  { to: "/films", label: "Films" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Inquire" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/85 backdrop-blur-md border-b border-line/60 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-3 group">
            <span
              className="inline-block h-8 w-8 rounded-full bg-ink transition-transform group-hover:rotate-45"
              style={{
                maskImage: `url(${logoAsset.url})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url(${logoAsset.url})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
              aria-hidden
            />
            <span className="font-display text-xl tracking-tight text-ink">
              Magic <span className="italic text-gold">in</span> Reels
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-[13px] uppercase tracking-[0.22em] text-ink/70 transition hover:text-ink relative py-1"
                activeProps={{ className: "text-ink" }}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-6 pb-6 pt-4 bg-ivory">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ink py-2 border-b border-line/40"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-0">{children}</main>

      <footer className="mt-32 border-t border-line/60 bg-ink text-ivory">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 py-20 grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-3xl leading-tight">
              Where fleeting moments <span className="italic text-gold">stay forever</span>.
            </div>
            <p className="mt-6 text-sm text-ivory/60 max-w-xs">
              A boutique film & photography studio for people who want their story told, not staged.
            </p>
          </div>
          <FooterCol title="Studio" links={[["About", "/about"], ["Journal", "/journal"], ["Contact", "/contact"]]} />
          <FooterCol title="Work" links={[["Stories", "/stories"], ["Films", "/films"], ["Portraits", "/stories"]]} />
          <FooterCol title="Elsewhere" links={[["Instagram", "#"], ["Vimeo", "#"], ["YouTube", "#"]]} external />
        </div>
        <div className="border-t border-ivory/10">
          <div className="mx-auto max-w-[1500px] px-6 lg:px-12 py-6 flex flex-wrap gap-4 items-center justify-between text-xs text-ivory/50 font-mono">
            <span>© {new Date().getFullYear()} Magic in Reels. All frames reserved.</span>
            <span>Made with warm light and long exposures.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({
  title,
  links,
  external,
}: {
  title: string;
  links: [string, string][];
  external?: boolean;
}) {
  return (
    <div>
      <div className="eyebrow text-gold mb-4">{title}</div>
      <ul className="space-y-2">
        {links.map(([label, href]) =>
          external ? (
            <li key={label}>
              <a href={href} className="text-ivory/80 hover:text-gold transition text-sm">
                {label}
              </a>
            </li>
          ) : (
            <li key={label}>
              <Link to={href} className="text-ivory/80 hover:text-gold transition text-sm">
                {label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
