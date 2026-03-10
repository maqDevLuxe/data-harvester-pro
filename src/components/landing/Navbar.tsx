import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = ["Features", "Docs", "Pricing", "Blog", "Status"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="section-container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg tracking-tight text-foreground">
            Scrape<span className="text-primary">Flow</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="btn-secondary text-sm py-2">Sign In</button>
          <button className="btn-primary text-sm py-2">Get API Key</button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-border px-4 pb-4 pt-2 space-y-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="block nav-link py-1" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <div className="flex gap-2 pt-2">
            <button className="btn-secondary text-sm py-2 flex-1">Sign In</button>
            <button className="btn-primary text-sm py-2 flex-1">Get API Key</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
