
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
import FadeInSection from "../components/FadeInSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FadeInSection>
          <Features />
        </FadeInSection>
        <FadeInSection>
          <Benefits />
        </FadeInSection>
        <FadeInSection>
          <HowItWorks />
        </FadeInSection>
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
        <FadeInSection>
          <Pricing />
        </FadeInSection>
        <FadeInSection>
          <FAQ />
        </FadeInSection>
        <FadeInSection>
          <CTA />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
