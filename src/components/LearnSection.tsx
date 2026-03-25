import { motion } from "framer-motion";
import { TrendingUp, Megaphone, Wrench, Users, BarChart3, Lightbulb } from "lucide-react";

const items = [
  { icon: Megaphone, title: "Marketing & Lead Generation", desc: "Master SEO, digital presence, and proven strategies to own your local market." },
  { icon: TrendingUp, title: "Sales & Negotiation", desc: "Learn closing techniques and pricing strategies that boost your bottom line." },
  { icon: Wrench, title: "Hands-On Installation", desc: "Field training with live installations guided by expert technicians." },
  { icon: BarChart3, title: "Profitability & Costing", desc: "Understand material costs, margins, and operational efficiency." },
  { icon: Users, title: "Working with Homebuilders", desc: "Tap into the builder market and create lasting partnerships." },
  { icon: Lightbulb, title: "Product Updates", desc: "Get first-look access to new products and system innovations." },
];

const LearnSection = () => (
  <section id="learn" className="py-20 sm:py-28 bg-secondary/30">
    <div className="container max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-display font-semibold tracking-widest uppercase text-accent">
          Why Attend
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3">
          What You'll Learn
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Every session is built to give dealers actionable insights they can implement the moment they get home.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 border border-border card-shadow hover:card-shadow-hover transition-shadow group"
          >
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center mb-4 group-hover:gold-glow transition-shadow">
              <item.icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground text-lg">{item.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LearnSection;
