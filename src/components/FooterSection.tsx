import { MapPin, CalendarDays } from "lucide-react";

const FooterSection = () => (
  <footer className="py-12 bg-primary text-primary-foreground">
    <div className="container max-w-4xl mx-auto px-4 text-center">
      <h3 className="text-2xl font-display font-bold">Gemstone Lights Dealer Summit 2026</h3>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-primary-foreground/70">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-accent" />
          <span className="text-sm">June 22–25, 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-sm">Calgary, AB · Marriott Courtyard</span>
        </div>
      </div>
      <p className="text-xs text-primary-foreground/40 mt-8">
        © 2026 Gemstone Lights. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
