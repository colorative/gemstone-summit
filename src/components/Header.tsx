import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/gemstone-logo.png";

const navItems = [
  { label: "About", id: "insights" },
  { label: "Agenda", id: "agenda" },
  { label: "Learn", id: "learn" },
  { label: "Gallery", id: "gallery" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="Gemstone Lights" className="h-8 sm:h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="gold-gradient text-accent-foreground font-display font-medium uppercase px-6 hover:opacity-90 transition-opacity"
          >
            Register
          </Button>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
