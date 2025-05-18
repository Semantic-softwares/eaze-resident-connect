
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
