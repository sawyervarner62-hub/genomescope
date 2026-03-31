import { Separator } from "@/components/ui/separator";
import { Github, Mail, Linkedin } from "lucide-react";

export function PortfolioFooter() {
  return (
    <footer id="contact" className="pb-12 pt-8">
      <Separator className="mb-8" />
      <div className="text-center space-y-4">
        <h2 className="text-lg font-semibold">Get in Touch</h2>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/sawyervarner62-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="size-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="size-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Sawyer Varner &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
