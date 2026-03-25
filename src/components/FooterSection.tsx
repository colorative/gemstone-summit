import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

// NEW LOGO URL per USER REQUEST
const LOGO_URL = "https://gemstonestage.s3.ca-central-1.amazonaws.com/wp-content/uploads/2020/08/05103752/gemlogo2.png";

const FooterSection = () => (
  <footer className="py-20 bg-neutral-950 text-white overflow-hidden antialiased">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
        
        <div className="space-y-8">
           {/* LOGO with "white overlay" logic (brightness-0 invert) for dark footer */}
          <img 
            src={LOGO_URL} 
            alt="Gemstone Lights" 
            className="h-7 md:h-8 brightness-0 invert"
          />
          <p className="text-sm font-body font-normal text-white/50 leading-relaxed max-w-xs">
            Pushing the boundaries of permanent outdoor lighting through innovation, quality, and an elite dealer network across North America.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 border border-white/10 rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
           {/* Oswald for Titles */}
          <h4 className="font-display font-medium text-xs uppercase tracking-widest text-primary mb-10">Quick Links</h4>
          {/* Poppins for body text */}
          <ul className="space-y-4 text-sm font-body font-normal text-white/50">
            {["Home", "About", "Agenda", "Experience", "Register"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
           {/* Oswald for Titles */}
          <h4 className="font-display font-medium text-xs uppercase tracking-widest text-primary mb-10">Get In Touch</h4>
          {/* Poppins for body text */}
          <ul className="space-y-6 text-sm font-body font-normal text-white/50">
            <li className="flex gap-4 items-start group">
              <Mail className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span className="group-hover:text-white transition-colors">dealersummit@gemstonelights.com</span>
            </li>
            <li className="flex gap-4 items-start group">
              <Phone className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span className="group-hover:text-white transition-colors">1-800-GEM-LIGHT</span>
            </li>
            <li className="flex gap-4 items-start group">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span className="group-hover:text-white transition-colors">Calgary, AB, Canada</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 p-8 rounded-md border border-white/10 relative overflow-hidden group">
           {/* Oswald for Titles */}
           <h4 className="font-display font-medium text-xs uppercase tracking-widest text-primary mb-6 relative z-10">Ready to Join?</h4>
           {/* Poppins for body text */}
           <p className="text-xs font-body font-normal text-white/40 mb-8 leading-relaxed relative z-10">
              Registration for the 2026 Summit is now open. Limited seats available for elite dealers.
           </p>
           {/* Oswald for Button */}
           <a href="#" className="inline-flex w-full items-center justify-center bg-primary text-white py-4 rounded-md font-display font-medium uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all relative z-10">
              Register Now
           </a>
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full translate-x-12 -translate-y-12" />
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Poppins for small text */}
        <p className="text-[10px] font-body text-white/20 uppercase tracking-[0.2em]">
          © 2026 Gemstone Lights. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] font-body text-white/20 uppercase tracking-widest">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
