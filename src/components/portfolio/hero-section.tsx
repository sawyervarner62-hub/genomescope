import { Button } from "@/components/ui/button";

export function PortfolioHero() {
  return (
    <section className="py-32 sm:py-40 text-center max-w-2xl mx-auto relative">
      {/* Subtle glow behind the name */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: "oklch(0.5 0.25 275)" }}
      />

      <div className="relative space-y-6">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground animate-fade-up">
          Portfolio
        </p>
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-none animate-fade-up-delay-1">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.75 0.2 280), oklch(0.65 0.22 250), oklch(0.7 0.18 300))",
              backgroundSize: "200% 200%",
            }}
          >
            Sawyer
          </span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.65 0.22 250), oklch(0.7 0.18 300), oklch(0.75 0.2 280))",
              backgroundSize: "200% 200%",
            }}
          >
            Varner
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 font-light animate-fade-up-delay-2">
          Student Developer &amp; Entrepreneur
        </p>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed text-sm sm:text-base animate-fade-up-delay-3">
          Building at the intersection of technology and business. I create tools
          that solve real problems &mdash; from AI-powered automation to
          privacy-first genome analysis.
        </p>
        <div className="flex items-center justify-center gap-3 pt-4 animate-fade-up-delay-4">
          <a href="#projects">
            <Button
              size="lg"
              className="text-sm px-8 rounded-full relative overflow-hidden group"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.55 0.25 285), oklch(0.6 0.2 240))",
                color: "white",
              }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="text-sm px-8 rounded-full border-border/60 hover:border-primary/50 transition-colors duration-300"
            >
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
