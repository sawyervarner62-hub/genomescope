import { PortfolioHero } from "@/components/portfolio/hero-section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { MetricsBanner } from "@/components/portfolio/metrics-banner";
import { TechStack } from "@/components/portfolio/tech-stack";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { Reveal } from "@/components/reveal";
import { JsonLd, personSchema, websiteSchema } from "@/components/seo/json-ld";
import { Dna, Bot, Trophy } from "lucide-react";

const projects = [
  {
    title: "Traitmap",
    description:
      "Privacy-first genome analysis. Upload 23andMe raw data and explore interactive genetic insights. Every byte is processed in your browser with Web Workers, nothing is ever uploaded.",
    tags: ["Next.js", "TypeScript", "Web Workers", "Recharts"],
    href: "/projects/traitmap",
    fig: "01",
    featured: true,
    isLive: true,
    icon: Dna,
  },
  {
    title: "Vertos AI",
    description:
      "AI lead capture and response for trade contractors. Monitors job boards, qualifies leads with Claude, and replies in under 60 seconds.",
    tags: ["Next.js", "Supabase", "Claude API", "Twilio"],
    href: "https://vertosai.com",
    fig: "02",
    icon: Bot,
  },
  {
    title: "FRC Fantasy",
    description:
      "Fantasy sports for FIRST Robotics Competition. Draft teams, track scores live, and compete with friends through the season.",
    tags: ["Next.js", "Supabase", "Realtime"],
    href: "/projects/frc-fantasy",
    fig: "03",
    icon: Trophy,
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <div className="container mx-auto px-4 max-w-5xl">
        <PortfolioHero />

        <Reveal>
          <MetricsBanner />
        </Reveal>

        <Reveal>
          <TechStack />
        </Reveal>

        {/* Projects */}
        <section id="projects" className="space-y-8 pt-14 pb-24">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="spec-index">03</span>
              <div>
                <h2 className="text-display-sm text-ink">Selected Work</h2>
                <p className="mono-spec mt-1">Things I&apos;ve built and shipped</p>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <Reveal
                key={project.title}
                delay={i * 60}
                className={project.featured ? "sm:col-span-2" : undefined}
              >
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </section>

        <SkillsSection />

        <PortfolioFooter />
      </div>
    </div>
  );
}
