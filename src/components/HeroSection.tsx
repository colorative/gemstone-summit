import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Calgary skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-display font-semibold tracking-widest uppercase gold-gradient text-accent-foreground mb-6">
            Dealer Summit 2026
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight">
            Gemstone Lights
            <br />
            <span className="gold-text">Dealer Summit</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-accent" />
              <span className="text-sm font-body">June 22–25, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-body">Calgary, AB · Marriott Courtyard</span>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Button
              size="lg"
              className="gold-gradient text-accent-foreground font-display font-semibold px-8 hover:opacity-90 transition-opacity gold-glow"
              onClick={() => document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Agenda
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display"
              onClick={() => document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" })}
            >
              What You'll Learn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
