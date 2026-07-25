import { TagList } from "@/components/ui/tag-list";

const techs = ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"];

export function TechStack() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6">
      <p className="eyebrow shrink-0">Built With</p>
      <TagList tags={techs} tagClassName="text-ink-soft" />
    </div>
  );
}
