import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="relative">
    <Hero />
    <About />
    <Projects />
    <Footer />
    <div className="absolute top-2 right-2 z-50">
    <ThemeToggle />
    </div>
    </div>
  );
}
