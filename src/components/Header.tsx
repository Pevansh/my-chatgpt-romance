import { Button } from "@/components/ui/button";
import { PenLine } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <PenLine className="w-5 h-5 text-accent transition-transform group-hover:rotate-12" />
          <span className="font-serif text-xl font-bold text-foreground">
            Delusional.blog
          </span>
        </a>

        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="/">Home</a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a href="#subscribe">Subscribe</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
