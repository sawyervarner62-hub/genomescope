import { Reveal } from "@/components/reveal";

const skillCategories = [
  { name: "Languages", skills: ["TypeScript", "Python", "SQL"] },
  { name: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { name: "Backend", skills: ["Node.js", "Supabase", "PostgreSQL"] },
  { name: "Tools", skills: ["Git", "Vercel", "Claude API", "Twilio"] },
];

export function SkillsSection() {
  return (
    <section id="about" className="pb-24 pt-4">
      <hr className="rule-accent mb-14" />

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16">
        <Reveal className="space-y-5">
          <div className="flex items-baseline gap-4">
            <span className="spec-index">01</span>
            <h2 className="text-display-sm text-ink">About</h2>
          </div>
          <p className="text-ink-soft leading-relaxed max-w-prose">
            I&apos;m a high school student who builds software at the
            intersection of technology and business. From AI-powered automation
            platforms to privacy-first health tools, I focus on products that
            solve real problems for real people.
          </p>
          <p className="text-ink-soft leading-relaxed max-w-prose">
            My work spans full-stack development, AI integration, and
            data-driven decisions. The best technical solutions come from
            understanding the business problem first.
          </p>
        </Reveal>

        <Reveal delay={80} className="space-y-6">
          <div className="flex items-baseline gap-4">
            <span className="spec-index">02</span>
            <h3 className="text-display-sm text-ink">Skills</h3>
          </div>
          <div className="divide-y divide-rule-paper border-y border-rule-paper">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="grid grid-cols-[7rem_1fr] gap-4 py-3"
              >
                <p className="eyebrow pt-0.5">{category.name}</p>
                <p className="text-sm text-ink-soft">
                  {category.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
