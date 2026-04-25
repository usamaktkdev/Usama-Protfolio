import Navbar from "@/components/sections/Navbar";
import BackgroundDecor from "@/components/sections/BackgroundDecor";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Arsenal from "@/components/sections/Arsenal";
import Projects from "@/components/sections/Projects";
import LogoGrid from "@/components/sections/LogoGrid";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Background Decor */}
      <BackgroundDecor />
      {/* TopNavBar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-32 pb-xl px-6 max-w-[1200px] mx-auto w-full z-10 flex flex-col gap-xl">
        {/* Hero Section */}
        <Hero />
        {/* Trust Bar */}
        <TrustBar />
        {/* The Arsenal */}
        <Arsenal />
        {/* Featured Work */}
        <Projects />
        {/* Logo Grid – Tool/Integration Showcase */}
        <LogoGrid />
        {/* Let's Build Something Section */}
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
