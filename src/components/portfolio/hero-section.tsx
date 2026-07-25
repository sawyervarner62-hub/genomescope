import { DnaHelix } from "@/components/portfolio/dna-helix";

export function PortfolioHero() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Mono spine — editorial page metadata. */}
      <div className="flex items-start justify-between gap-6">
        <p className="eyebrow hero-fade-in">Portfolio</p>
        <p className="mono-spec hidden sm:block text-right hero-fade-in hero-delay-1">
          PG.01 / INDEX
          <br />
          EST. 2026
        </p>
      </div>

      <div className="mt-8 grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
        <div>
          <h1 className="text-display-hero overflow-hidden">
            <span className="block hero-reveal hero-reveal-1">Sawyer</span>
            <span className="block hero-reveal hero-reveal-2">Varner</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg sm:text-xl text-ink-soft leading-relaxed hero-fade-in hero-delay-2">
            Student developer building at the intersection of technology and
            business. I make tools that solve real problems, from AI automation
            to{" "}
            <span className="font-display italic text-viridian">
              privacy-first genome analysis.
            </span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 hero-fade-in hero-delay-3">
            <a href="#projects" className="btn btn-accent">
              View Projects
            </a>
            <a href="#contact" className="btn btn-paper">
              Get in Touch
            </a>
          </div>

          <p className="mt-10 mono-spec">
            <span
              className="hero-type text-steel"
              style={{ "--type-w": "32ch" } as React.CSSProperties}
            >
              IDX.00 / SVARNER / DEV + BUILDER
            </span>
          </p>
        </div>

        {/* Signature illustration — desktop only, decorative flourish. */}
        <div className="hidden lg:flex items-center justify-center h-[420px] shrink-0 hero-fade-in hero-delay-2">
          <DnaHelix />
        </div>
      </div>
    </section>
  );
}
