import { Button } from "@/components/ui/button";

export function PortfolioHero() {
  return (
    <section className="py-24 sm:py-32 text-center space-y-6 max-w-3xl mx-auto">
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
          }}
        >
          Sawyer Varner
        </span>
      </h1>
      <p className="text-xl text-muted-foreground">
        Student Developer &amp; Entrepreneur
      </p>
      <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
        Building at the intersection of technology and business. I create tools
        that solve real problems — from AI-powered automation to privacy-first
        genome analysis.
      </p>
      <div className="flex items-center justify-center gap-3 pt-2">
        <a href="#projects">
          <Button
            size="lg"
            className="text-base px-8"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
              color: "white",
            }}
          >
            View Projects
          </Button>
        </a>
        <a href="#contact">
          <Button variant="outline" size="lg" className="text-base px-8">
            Contact Me
          </Button>
        </a>
      </div>
    </section>
  );
}
