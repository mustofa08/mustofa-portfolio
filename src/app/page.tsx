import { About } from "@/components/about/About";
import { AmbientBackground } from "@/components/background/AmbientBackground";
import { Contact } from "@/components/contact/Contact";
import { Experience } from "@/components/experience/Experience";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/navbar/Navbar";
import { Projects } from "@/components/projects/Projects";

export default function Home() {
  return (
    <main
      id="home"
      className="
        relative
        isolate
        min-h-screen
        overflow-x-clip
        bg-background
      "
    >
      {/* Background */}
      <AmbientBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <Experience />

        <Projects />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}
