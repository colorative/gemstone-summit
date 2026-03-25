import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

// NEW LOGO URL per USER REQUEST
const LOGO_URL = "https://gemstonestage.s3.ca-central-1.amazonaws.com/wp-content/uploads/2020/08/05103752/gemlogo2.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Agenda", href: "#agenda" },
        { label: "Experience", href: "#learn" },
        { label: "Gallery", href: "#gallery" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
                isScrolled ? "h-16 bg-white shadow-sm border-b border-neutral-100" : "h-20 bg-transparent"
            )}
        >
            <div className="container h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo per USER REQUEST (Fixed missing logo with new URL and white overlay logic) */}
                <div className="flex items-center gap-2">
                    <img 
                        src={LOGO_URL} 
                        alt="Gemstone Lights" 
                        className={cn(
                            "h-5 md:h-6 transition-all",
                            // In scrolled white header, show natural logo (natural colors/black)
                            // In transparent (dark) header, apply white overlay (brightness-0 invert)
                            isScrolled ? "brightness-100" : "brightness-0 invert"
                        )}
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={cn(
                                "text-[11px] font-body font-medium uppercase tracking-[0.15em] transition-colors",
                                isScrolled ? "text-neutral-600 hover:text-neutral-900" : "text-white/70 hover:text-white"
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop Registration */}
                <div className="hidden md:block">
                    <a
                        href="#"
                        className={cn(
                            "inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-[11px] font-display font-medium uppercase tracking-widest transition-all",
                            isScrolled 
                                ? "bg-primary text-white hover:bg-neutral-900 active:scale-95 shadow-sm" 
                                : "bg-white text-black hover:bg-primary hover:text-white active:scale-95 shadow-md shadow-white/10"
                        )}
                    >
                        Register
                        <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        isScrolled ? "text-neutral-900" : "text-white"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[99] bg-white md:hidden">
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-lg font-body font-medium uppercase tracking-widest text-neutral-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="bg-primary text-white px-10 py-4 rounded-md font-display font-medium uppercase tracking-widest mt-4 shadow-xl"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
