import { motion } from "framer-motion";
import { Star, Award, Globe } from "lucide-react";

const stats = [
  { icon: Globe, value: "200+", label: "Dealers Across North America" },
  { icon: Star, value: "4 Days", label: "Of World-Class Training" },
  { icon: Award, value: "30+", label: "Expert-Led Sessions" },
];

const InsightsSection = () => (
  <section className="py-20 sm:py-24 hero-gradient">
    <div className="container max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-display font-semibold tracking-widest uppercase text-accent">
          By The Numbers
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mt-3">
          Summit at a Glance
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-xl gold-gradient mx-auto flex items-center justify-center mb-4 gold-glow">
              <s.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <p className="text-4xl font-display font-bold text-primary-foreground">{s.value}</p>
            <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;
