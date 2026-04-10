import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  Trophy,
  Users,
  Zap,
  BarChart3,
  Smartphone,
  Database,
} from "lucide-react";

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
        className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-200 mb-10 animate-fade-up"
      >
        <ArrowLeft className="size-4" />
        Back to Portfolio
      </Link>

      <div className="space-y-10">
        {/* Header */}
        <div className="space-y-4 animate-fade-up-delay-1">
          <div className="flex items-center gap-3">
            <div
              className="size-12 rounded-xl flex items-center justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.55 0.22 300), oklch(0.5 0.2 270))",
              }}
            >
              <Trophy className="size-6 text-white" />
            </div>
            <div>
              <h1
                className="text-3xl sm:text-4xl font-bold tracking-tighter bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, oklch(0.75 0.18 300), oklch(0.65 0.2 270))",
                }}
              >
                FRC Fantasy
              </h1>
              <p className="text-sm text-muted-foreground/60">
                Fantasy sports for FIRST Robotics
              </p>
            </div>
          </div>

          <a
            href="https://frc-fantasy-two.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="text-sm px-6 rounded-full gap-2 relative overflow-hidden group"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.55 0.22 300), oklch(0.5 0.2 270))",
                color: "white",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Visit Live Site
                <ExternalLink className="size-4" />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </a>
        </div>

        {/* Glowing divider */}
        <div className="h-px relative animate-fade-up-delay-2">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>

        {/* Purpose */}
        <section className="space-y-4 animate-fade-up-delay-2">
          <h2 className="text-xl font-semibold text-foreground/90">
            The Purpose
          </h2>
          <p className="text-muted-foreground/80 leading-relaxed">
            FIRST Robotics Competition (FRC) is one of the most exciting STEM
            programs in the world — but unlike traditional sports, there&apos;s
            no mainstream fantasy platform for it. I built FRC Fantasy to bring
            that competitive, social experience to the robotics community.
          </p>
          <p className="text-muted-foreground/80 leading-relaxed">
            The idea is simple: draft real FRC teams, earn points based on how
            they perform at competitions, and compete against your friends in
            private leagues. It turns passive spectating into active engagement
            and gives students another reason to follow the season closely.
          </p>
        </section>

        {/* Features */}
        <section className="space-y-6 animate-fade-up-delay-3">
          <h2 className="text-xl font-semibold text-foreground/90">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-border/30 bg-card/60 backdrop-blur-sm"
              >
                <CardContent className="pt-5 pb-4 space-y-2">
                  <div
                    className="size-9 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, oklch(0.55 0.22 300), oklch(0.5 0.2 270))",
                    }}
                  >
                    <feature.icon className="size-4.5 text-white" />
                  </div>
                  <p className="font-medium text-sm">{feature.title}</p>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4 animate-fade-up-delay-4">
          <h2 className="text-xl font-semibold text-foreground/90">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-normal border-border/40 bg-white/[0.02]"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground/80 leading-relaxed text-sm">
            The app uses a session-based authentication system built from scratch
            with localStorage and Bearer tokens — no Clerk or third-party auth.
            Supabase handles the database and real-time subscriptions for live
            scoring updates. The UI is built with shadcn/ui components and Framer
            Motion for smooth draft animations and transitions.
          </p>
        </section>

        {/* Skills Demonstrated */}
        <section className="space-y-4 animate-fade-up-delay-5">
          <h2 className="text-xl font-semibold text-foreground/90">
            Skills Demonstrated
          </h2>
          <ul className="space-y-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-start gap-3 text-sm text-muted-foreground/80"
              >
                <Zap className="size-3.5 text-primary/60 mt-1 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Glowing divider */}
        <div className="h-px relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>

        {/* CTA */}
        <div className="text-center py-4">
          <a
            href="https://frc-fantasy-two.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary/90 transition-colors duration-200 group"
          >
            Visit FRC Fantasy{" "}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
