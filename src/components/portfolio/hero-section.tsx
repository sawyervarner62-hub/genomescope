import { Button } from "@/components/ui/button";

export function PortfolioHero() {
  return (
    <section className="py-28 sm:py-36 text-center space-y-5 max-w-2xl mx-auto">
      <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
        Portfolio
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          }}
        >
          Sawyer Varner
        </span>
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground">
        Student Developer &amp; Entrepreneur
      </p>
      <p className="text-muted-foreground max-w-md mx-auto leading-relaxed text-sm sm:text-base">
        Building at the intersection of technology and business. I create tools
        that solve real problems &mdash; from AI-powered automation to
        privacy-first genome analysis.
      </p>
      <div className="flex items-center justify-center gap-3 pt-4">
        <a href="#projects">
          <Button
            size="lg"
            className="text-sm px-6 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              color: "white",
            }}
          >
            View Projects
          </Button>
        </a>
        <a href="#contact">
          <Button
            variant="outline"
            size="lg"
            className="text-sm px-6 rounded-full"
          >
            Contact Me
          </Button>
        </a>
      </div>
    </section>
  );
}
