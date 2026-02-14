// Explicit imports match the file names
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}