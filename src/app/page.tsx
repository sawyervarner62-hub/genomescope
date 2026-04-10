import { PortfolioHero } from "@/components/portfolio/hero-section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { MetricsBanner } from "@/components/portfolio/metrics-banner";
import { TechStack } from "@/components/portfolio/tech-stack";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { Dna, Bot, Trophy, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "GenomeScope",
    description:
      "Privacy-first genome analysis tool. Upload 23andMe raw data and explore interactive genetic insights — all processing happens in your browser with Web Workers.",
    tags: ["Next.js", "TypeScript", "Web Workers", "Recharts"],
    href: "/projects/genomescope",
    featured: true,
    isLive: true,
    icon: Dna,
    gradientFrom: "oklch(0.55 0.25 285)",
    gradientTo: "oklch(0.6 0.2 240)",
  },
  {
    title: "Vertos AI",
    description:
      "AI-powered lead capture and response system for trade contractors. Monitors job boards, qualifies leads with Claude AI, and responds in under 60 seconds.",
    tags: ["Next.js", "Supabase", "Claude API", "Twilio"],
    href: "https://vertosai.com",
    featured: false,
    icon: Bot,
    gradientFrom: "oklch(0.5 0.2 250)",
    gradientTo: "oklch(0.55 0.18 220)",
  },
  {
    title: "FRC Fantasy",
    description:
      "Fantasy sports platform for FIRST Robotics Competition. Draft teams, track scores in real-time, and compete with friends during FRC season.",
    tags: ["Next.js", "Supabase", "Framer Motion"],
    href: "/projects/frc-fantasy",
    featured: false,
    icon: Trophy,
    gradientFrom: "oklch(0.55 0.22 300)",
    gradientTo: "oklch(0.5 0.2 270)",
  },
  {
    title: "Trading Analytics",
    description:
      "Real-time market data visualization and analysis dashboard with sublinear algorithms for pattern detection.",
    tags: ["TypeScript", "D3.js", "WebSocket"],
    href: "https://github.com/sawyervarner62-hub",
    featured: false,
    icon: BarChart3,
    gradientFrom: "oklch(0.5 0.18 230)",
    gradientTo: "oklch(0.55 0.15 260)",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <PortfolioHero />

        {/* Metrics */}
        <div className="animate-fade-up-delay-3">
          <MetricsBanner />
        </div>

        {/* Tech Stack */}
        <div className="animate-fade-up-delay-4">
          <TechStack />
        </div>

        {/* Divider — glowing line */}
        <div className="my-12 h-px relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Projects */}
        <section id="projects" className="space-y-8 pb-20 animate-fade-up-delay-5">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            <p className="text-sm text-muted-foreground">
              Things I&apos;ve built that I&apos;m proud of
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-4 h-px relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* About + Skills */}
        <SkillsSection />

        <PortfolioFooter />
      </div>
    </div>
  );
}
