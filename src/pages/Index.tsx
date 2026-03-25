import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgendaSection from "@/components/AgendaSection";
import LearnSection from "@/components/LearnSection";
import GallerySection from "@/components/GallerySection";
import InsightsSection from "@/components/InsightsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <InsightsSection />
    <AgendaSection />
    <LearnSection />
    <GallerySection />
    <FooterSection />
  </div>
);

export default Index;
