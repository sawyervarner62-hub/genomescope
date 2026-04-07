import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { name: "Languages", skills: ["TypeScript", "Python", "SQL"] },
  { name: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { name: "Backend", skills: ["Node.js", "Supabase", "PostgreSQL"] },
  { name: "Tools", skills: ["Git", "Vercel", "Claude API", "Twilio"] },
];

export function SkillsSection() {
  return (
    <section id="about" className="pb-20 pt-8">
      {/* Glowing divider */}
      <div className="h-px relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">About</h2>
          <p className="text-muted-foreground/80 leading-relaxed">
            I&apos;m a high school student passionate about building software
            that sits at the intersection of technology and business. From
            AI-powered automation platforms to privacy-first health tools, I
            focus on creating products that solve real problems for real people.
          </p>
          <p className="text-muted-foreground/80 leading-relaxed">
            My work spans full-stack development, AI integration, and
            data-driven decision making. I believe the best technical solutions
            come from deeply understanding the business problem first.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Skills</h3>
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
                {category.name}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs font-normal border-border/40 bg-white/[0.02] hover:bg-white/[0.06] transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
