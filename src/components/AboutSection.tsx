"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Trophy, Users, Shield, Zap, ArrowRight } from "lucide-react";

/**
 * A responsive, animated bento grid layout component.
 */
const BentoGridShowcase = ({
  integration,
  trackers,
  statistic,
  focus,
  productivity,
  className,
}: {
  integration: React.ReactNode;
  trackers: React.ReactNode;
  statistic: React.ReactNode;
  focus: React.ReactNode;
  productivity: React.ReactNode;
  className?: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:h-[560px]",
        className
      )}
    >
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2">
        {integration}
      </motion.div>
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {trackers}
      </motion.div>
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {statistic}
      </motion.div>
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {focus}
      </motion.div>
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {productivity}
      </motion.div>
    </motion.div>
  );
};

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("relative h-full w-full overflow-hidden border border-neutral-100 bg-white p-6 md:p-10 rounded-md group", className)}>
    {children}
  </div>
);

const featureItem = (Icon: any, title: string, desc: string) => (
    <Card className="flex flex-col justify-center gap-4 hover:border-primary/20 transition-colors">
        <div className="w-10 h-10 rounded bg-neutral-50 flex items-center justify-center group-hover:bg-primary transition-all shadow-sm">
            <Icon className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
        </div>
        <div>
            <h3 className="font-display font-medium text-sm md:text-base tracking-wider uppercase text-neutral-900 mb-2">{title}</h3>
            <p className="text-sm text-neutral-500 font-body leading-relaxed line-clamp-2">{desc}</p>
        </div>
    </Card>
);

const AboutSection = () => {
  return (
    // REDUCED BOTTOM PADDING per USER REQUEST
    <section id="about" className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-white antialiased">
      <div className="container max-w-6xl mx-auto px-6">
        
        <BentoGridShowcase
          integration={
            <Card className="bg-neutral-950 border-neutral-800 text-white flex flex-col justify-between p-10 md:p-14">
               <div className="space-y-8">
                  <div className="inline-flex items-center gap-4 text-primary">
                    <div className="h-[1px] w-8 bg-primary" />
                    <span className="text-[11px] font-medium uppercase tracking-widest font-display">Summit 2026</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-medium uppercase leading-tight tracking-normal">
                    THE PREMIER <br/> GATHERING OF <br/> <span className="text-primary italic">INDUSTRY LEADERS</span>
                  </h2>
                  <p className="text-sm text-white/50 font-body leading-relaxed font-normal max-w-xs">
                    Unite with the most innovative minds in outdoor lighting. Share systems, master hardware, and build lasting bonds.
                  </p>
               </div>
               <button className="inline-flex items-center gap-4 text-white text-[11px] font-medium uppercase tracking-wider font-display border-b border-white/10 pb-2 hover:border-primary transition-all w-fit group">
                  EXPLORE THE SUMMIT
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </Card>
          }
          trackers={featureItem(Trophy, "Growth & Mastery", "Deep-dive sessions on sales negotiation and scaling.")}
          statistic={featureItem(Users, "Elite Network", "Forge connections with 200+ installation experts.")}
          focus={featureItem(Zap, "Product Vision", "First-look access to next-gen lighting hardware.")}
          productivity={featureItem(Shield, "Tech Excellence", "Hands-on field training with expert technicians.")}
        />
      </div>
    </section>
  );
};

export default AboutSection;
