import { PortfolioHero } from "@/components/portfolio/hero-section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { Separator } from "@/components/ui/separator";
import { Dna, Bot, Trophy, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "GenomeScope",
    description:
      "Privacy-first genome analysis tool. Upload 23andMe raw data and explore interactive genetic insights — all processing happens in your browser with Web Workers.",
    tags: ["Next.js", "TypeScript", "Web Workers", "Recharts"],
    href: "/projects/genomescope",
    featured: true,
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
    href: "https://github.com/sawyervarner62-hub",
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
    <div className="relative min-h-screen">
      {/* Gradient orbs background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 size-[500px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: "oklch(0.55 0.25 285)" }}
        />
        <div
          className="absolute top-1/3 -right-32 size-[400px] rounded-full opacity-[0.06] blur-[100px]"
          style={{ background: "oklch(0.6 0.2 240)" }}
        />
        <div
          className="absolute bottom-20 left-1/4 size-[350px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: "oklch(0.5 0.22 300)" }}
        />
      </div>

      <div className="relative container mx-auto px-4 max-w-5xl">
        <PortfolioHero />

        {/* Projects */}
        <section id="projects" className="space-y-8 pb-20">
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

        {/* About */}
        <section id="about" className="pb-20">
          <Separator className="mb-10" />
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">About</h2>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a high school student passionate about building software
              that sits at the intersection of technology and business. From
              AI-powered automation platforms to privacy-first health tools, I
              focus on creating products that solve real problems for real people.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans full-stack development, AI integration, and
              data-driven decision making. I believe the best technical solutions
              come from deeply understanding the business problem first.
            </p>
          </div>
        </section>

        <PortfolioFooter />
      </div>
    </div>
  );
}
