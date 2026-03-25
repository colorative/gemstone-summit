import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "400+", label: "ATTENDEES" },
  { value: "200+", label: "DEALERSHIPS" },
  { value: "30+", label: "WORKSHOPS" },
  { value: "4 DAYS", label: "NETWORKING" },
];

const InsightsSection = () => (
    <section className="bg-neutral-950 py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }} 
        />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-4 text-primary">
                    <div className="h-[1px] w-8 bg-primary" />
                    <span className="text-[10px] font-display font-bold uppercase tracking-[0.4em]">Metrics</span>
                </div>
                <h2 className="text-white text-3xl sm:text-4xl font-display font-medium uppercase tracking-tight leading-none">SUCCESS AT SCALE</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-12 flex-1 justify-items-center md:justify-items-end">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="space-y-3 text-center group"
                    >
                        <p className="text-4xl sm:text-5xl font-display font-medium text-white tracking-widest group-hover:text-primary transition-colors">{s.value}</p>
                        <p className="text-white/30 text-[9px] uppercase tracking-[0.4em] font-bold font-display group-hover:text-white/60 transition-colors">{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default InsightsSection;
