import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AgendaSection from "@/components/AgendaSection";
import LearnSection from "@/components/LearnSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <div id="home">
      <HeroSection />
    </div>
    <AboutSection />
    <AgendaSection />
    <LearnSection />
    <GallerySection />
    <FooterSection />
  </div>
);

export default Index;
