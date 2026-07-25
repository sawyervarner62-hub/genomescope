import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Trophy,
  Users,
  Zap,
  BarChart3,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TagList } from "@/components/ui/tag-list";
import { SITE_URL, getOgImageUrl } from "@/lib/seo";

const DESCRIPTION =
  "A fantasy sports platform for FIRST Robotics Competition. Draft real teams, track scores live, and compete with friends through the season.";

export const metadata: Metadata = {
  title: "FRC Fantasy",
  description: DESCRIPTION,
  alternates: { canonical: "/projects/frc-fantasy" },
  openGraph: {
    type: "website",
    title: "FRC Fantasy — Case Study",
    description: DESCRIPTION,
    url: `${SITE_URL}/projects/frc-fantasy`,
    images: [getOgImageUrl("FRC Fantasy", DESCRIPTION)],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRC Fantasy — Case Study",
    description: DESCRIPTION,
    images: [getOgImageUrl("FRC Fantasy", DESCRIPTION)],
  },
};

const techStack = [
  "Next.js 15",
  "TypeScript",
  "Supabase",
  "Tailwind CSS v4",
  "shadcn/ui",
  "Framer Motion",
];

const features = [
  {
    icon: Trophy,
    title: "Live Drafting",
    description:
      "Draft FRC teams in real-time with friends. Pick your favorites before kickoff and build your dream alliance.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Scoring",
    description:
      "Scores update live during competition. Watch your picks climb the leaderboard as matches play out.",
  },
  {
    icon: Users,
    title: "Leagues & Competition",
    description:
      "Create private leagues, invite friends, and compete head-to-head throughout the FRC season.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Built for the pits. Check scores, make trades, and trash-talk your league from your phone.",
  },
];

const skills = [
  "Full-stack application architecture",
  "Real-time data synchronization with Supabase",
  "Session-based authentication without third-party auth providers",
  "Complex state management across drafting, scoring, and league systems",
  "Responsive, animation-rich UI with Framer Motion",
  "Database schema design for relational data (teams, users, leagues, picks)",
];

export default function FRCFantasyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link
        href="/"
        className="link-accent inline-flex items-center gap-2 mono-spec text-steel hover:text-viridian transition-colors duration-200 mb-12 hero-fade-in"
      >
        <ArrowLeft className="size-4" />
        Back to Portfolio
      </Link>

      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-6 hero-fade-in hero-delay-1">
          <div className="flex items-center gap-4">
            <div className="size-14 border border-ink bg-ink flex items-center justify-center text-viridian shrink-0">
              <Trophy className="size-6" strokeWidth={1.5} />
            </div>
            <div>
              <p className="eyebrow">Case Study / FIG. 03</p>
              <h1 className="text-display-sm text-ink">FRC Fantasy</h1>
              <p className="mono-spec mt-0.5">Fantasy sports for FIRST Robotics</p>
            </div>
          </div>

          <a
            href="https://frc-fantasy-two.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            Visit Live Site
            <ExternalLink className="size-4" />
          </a>
        </div>

        <hr className="rule-accent hero-fade-in hero-delay-2" />

        {/* Purpose */}
        <Reveal>
          <section className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="spec-index">01</span>
              <h2 className="font-display text-xl font-semibold text-ink">
                The Purpose
              </h2>
            </div>
            <p className="text-ink-soft leading-relaxed">
              FIRST Robotics Competition (FRC) is one of the most exciting STEM
              programs in the world, but unlike traditional sports, there&apos;s
              no mainstream fantasy platform for it. I built FRC Fantasy to bring
              that competitive, social experience to the robotics community.
            </p>
            <p className="text-ink-soft leading-relaxed">
              The idea is simple: draft real FRC teams, earn points based on how
              they perform at competitions, and compete against your friends in
              private leagues. It turns passive spectating into active engagement
              and gives students another reason to follow the season closely.
            </p>
          </section>
        </Reveal>

        {/* Features */}
        <Reveal>
          <section className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="spec-index">02</span>
              <h2 className="font-display text-xl font-semibold text-ink">
                How It Works
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="spec-tile space-y-3">
                  <div className="size-10 border border-rule-paper flex items-center justify-center text-viridian">
                    <feature.icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-base font-semibold text-ink">
                    {feature.title}
                  </p>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Tech Stack */}
        <Reveal>
          <section className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="spec-index">03</span>
              <h2 className="font-display text-xl font-semibold text-ink">
                Built With
              </h2>
            </div>
            <TagList tags={techStack} tagClassName="text-ink-soft" />
            <p className="text-ink-soft leading-relaxed text-sm max-w-2xl">
              The app uses a session-based authentication system built from
              scratch with localStorage and Bearer tokens, no Clerk or
              third-party auth. Supabase handles the database and real-time
              subscriptions for live scoring updates. The UI is built with
              shadcn/ui components and Framer Motion for smooth draft animations
              and transitions.
            </p>
          </section>
        </Reveal>

        {/* Skills Demonstrated */}
        <Reveal>
          <section className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="spec-index">04</span>
              <h2 className="font-display text-xl font-semibold text-ink">
                Skills Demonstrated
              </h2>
            </div>
            <ul className="space-y-2.5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed"
                >
                  <Zap className="size-3.5 text-viridian mt-1 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <hr className="rule-accent" />

        <div className="py-2">
          <a
            href="https://frc-fantasy-two.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            Visit FRC Fantasy
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
