import { PortfolioHero } from "@/components/portfolio/hero-section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "GenomeScope",
    description:
      "Privacy-first genome analysis tool. Upload 23andMe raw data and explore interactive genetic insights — all processing happens in your browser with Web Workers.",
    tags: ["Next.js", "TypeScript", "Web Workers", "Recharts"],
    href: "/projects/genomescope",
    featured: true,
    gradient: true,
  },
  {
    title: "Vertos AI",
    description:
      "AI-powered lead capture and response system for trade contractors. Monitors job boards, qualifies leads with Claude AI, and responds in under 60 seconds.",
    tags: ["Next.js", "Supabase", "Claude API", "Twilio"],
    href: "#",
    featured: false,
    gradient: false,
  },
  {
    title: "FRC Fantasy",
    description:
      "Fantasy sports platform for FIRST Robotics Competition. Draft teams, track scores in real-time, and compete with friends during FRC season.",
    tags: ["Next.js", "Supabase", "Framer Motion"],
    href: "#",
    featured: false,
    gradient: false,
  },
  {
    title: "Trading Analytics",
    description:
      "Real-time market data visualization and analysis dashboard with sublinear algorithms for pattern detection.",
    tags: ["TypeScript", "D3.js", "WebSocket"],
    href: "#",
    featured: false,
    gradient: false,
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <PortfolioHero />

      {/* Projects */}
      <section id="projects" className="space-y-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="pb-16">
        <Separator className="mb-8" />
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
  );
}
