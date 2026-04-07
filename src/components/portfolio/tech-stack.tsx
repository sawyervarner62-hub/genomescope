import { Badge } from "@/components/ui/badge";

const techs = ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"];

export function TechStack() {
  return (
    <div className="text-center space-y-3 py-6">
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
        Built With
      </p>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {techs.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs font-normal">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
