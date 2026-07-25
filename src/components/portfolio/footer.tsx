import { Github, Mail } from "lucide-react";

const links = [
  {
    href: "https://github.com/sawyervarner62-hub",
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "mailto:sawyervarner62@gmail.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
];

export function PortfolioFooter() {
  return (
    <footer id="contact" className="pb-14 pt-4">
      <hr className="rule-accent mb-14" />
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-4 max-w-md">
          <p className="eyebrow">Get in Touch</p>
          <h2 className="text-display-md text-ink">
            Let&apos;s build something{" "}
            <span className="font-display italic text-viridian">worth using.</span>
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="link-accent inline-flex items-center gap-2 text-sm text-ink-soft hover:text-viridian transition-colors"
              >
                <link.icon className="size-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mono-spec md:text-right">
          SAWYER VARNER
          <br />
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
