import { motion } from "framer-motion";
import { TrendingUp, Megaphone, Wrench, Users, BarChart3, Lightbulb } from "lucide-react";

const items = [
  { icon: Megaphone, title: "Marketing & Lead Gen", desc: "Master SEO, digital presence, and proven strategies to own your local market." },
  { icon: TrendingUp, title: "Sales & Negotiation", desc: "Learn closing techniques and pricing strategies that boost your bottom line." },
  { icon: Wrench, title: "Hands-On Installation", desc: "Field training with live installations guided by expert technicians." },
  { icon: BarChart3, title: "Profitability & Costing", desc: "Understand material costs, margins, and operational efficiency." },
  { icon: Users, title: "Working with Builders", desc: "Tap into the builder market and create lasting partnerships." },
  { icon: Lightbulb, title: "Product Innovations", desc: "Get first-look access to new products and system innovations." },
];

const LearnSection = () => (
  <section id="learn" className="py-24 sm:py-32 bg-neutral-50 relative overflow-hidden">
    <div className="container max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-4 text-primary mb-6">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-[11px] font-medium uppercase tracking-widest font-display text-primary">Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 mt-2 leading-tight uppercase tracking-tight">
          WHAT YOU WILL MASTER
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 mt-6 max-w-xl mx-auto font-body font-normal leading-relaxed">
          Every session is built to give dealers actionable insights they can implement the moment they return home.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white p-10 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-md"
          >
            <div className="w-10 h-10 rounded-md bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-300">
              <item.icon className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
            </div>
            {/* Oswald for titles - BUMPED SIZE per USER REQUEST (text-sm md:text-base) */}
            <h3 className="font-display font-medium text-sm md:text-base tracking-wider uppercase text-neutral-900">{item.title}</h3>
            {/* Poppins for body text */}
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed font-body font-normal">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LearnSection;
