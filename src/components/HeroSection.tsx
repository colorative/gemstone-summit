import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/ui/animated-text';

interface HeroSectionProps {
    videoUrl?: string;
    badgeLabel?: string;
    badgeText?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    videoUrl = "https://www.gemstonelights.com/wp-content/uploads/2025/10/Gemstone-Lights_-Smart-Outdoor-Lighting-_-2025.mp4",
    badgeLabel = "SUMMIT 2026",
    badgeText = "The Permanent Lighting Event of the Year",
    title = "Ultimate Dealer",
    titleLine2 = "Summit Experience",
    description = "Experience the future of permanent outdoor lighting. Join industry leaders for four days of innovation, training, and networking in the heart of the Canadian Rockies.",
    primaryButtonText = "Register",
    primaryButtonHref = "#",
    secondaryButtonText = "Agenda",
    secondaryButtonHref = "#agenda",
}) => {
    return (
        <section id="home" className="w-full isolate min-h-screen overflow-hidden relative flex flex-col justify-center">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 z-[-2]"
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75 z-[-1]" />

            <div className="z-10 relative">
                <div className="max-w-4xl mx-auto px-6 py-20 mt-20">
                    <div className="text-center">
                        {/* Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 inline-flex items-center gap-4 rounded-md bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur-sm"
                        >
                            <span className="inline-flex items-center text-[11px] font-medium tracking-wider text-neutral-900 bg-white rounded-md py-1 px-3 uppercase font-display">
                                {badgeLabel}
                            </span>
                            <span className="text-[12px] font-medium text-white/90 uppercase tracking-widest pr-2 font-display text-nowrap">
                                {badgeText}
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                             <AnimatedText 
                                text={title} 
                                fontSize={window.innerWidth < 640 ? 48 : 84} 
                                minWeight={100} 
                                maxWeight={800} 
                                className="text-white font-sans font-medium" 
                             />
                             <AnimatedText 
                                text={titleLine2} 
                                fontSize={window.innerWidth < 640 ? 32 : 64} 
                                minWeight={100} 
                                maxWeight={800} 
                                className="text-primary font-sans font-medium" 
                             />
                        </div>

                        {/* Description */}
                        <motion.p 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg text-white/60 max-w-2xl mt-8 mx-auto font-body leading-relaxed tracking-wide font-normal"
                        >
                            {description}
                        </motion.p>

                        {/* Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row sm:gap-4 mt-12 gap-4 items-center justify-center font-display"
                        >
                            <a
                                href={primaryButtonHref}
                                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white bg-primary rounded-md px-10 py-4 transition-all duration-300 active:scale-95 shadow-md shadow-primary/20"
                            >
                                {primaryButtonText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </a>
                            <button
                                onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 rounded-md border border-white/20 hover:bg-white/5 px-10 py-3.5 text-sm font-medium uppercase tracking-wider text-white transition-colors active:scale-95"
                            >
                                {secondaryButtonText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M7 7h10v10" />
                                    <path d="M7 17 17 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </div>

                    {/* Statistics Section */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="mx-auto mt-24 max-w-4xl"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/10">
                            <div className="text-center group border-r border-white/10 last:border-0 h-16 flex flex-col justify-center">
                                <p className="text-3xl font-display font-medium text-white tracking-widest group-hover:text-primary transition-colors leading-none">400+</p>
                                <p className="text-[10px] uppercase font-medium tracking-wider text-white/40 mt-2 font-display">Attendees</p>
                            </div>
                            <div className="text-center group border-r border-white/10 last:border-0 h-16 flex flex-col justify-center">
                                <p className="text-3xl font-display font-medium text-white tracking-widest group-hover:text-primary transition-colors leading-none">200+</p>
                                <p className="text-[10px] uppercase font-medium tracking-wider text-white/40 mt-2 font-display">Dealers</p>
                            </div>
                            <div className="text-center group border-r border-white/10 last:border-0 h-16 flex flex-col justify-center">
                                <p className="text-3xl font-display font-medium text-white tracking-widest group-hover:text-primary transition-colors leading-none">30+</p>
                                <p className="text-[10px] uppercase font-medium tracking-wider text-white/40 mt-2 font-display">Workshops</p>
                            </div>
                            <div className="text-center group h-16 flex flex-col justify-center">
                                <p className="text-3xl font-display font-medium text-white tracking-widest group-hover:text-primary transition-colors leading-none">4 DAYS</p>
                                <p className="text-[10px] uppercase font-medium tracking-wider text-white/40 mt-2 font-display">Networking</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll Indicator REMOVED per USER REQUEST */}
        </section>
    );
};

export default HeroSection;
