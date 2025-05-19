
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const CTA = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // If we're on the home page, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home with the section hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-400 to-primary-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Estate Management?</h2>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
          Join hundreds of estates already enjoying the benefits of our all-in-one management solution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary-600 hover:bg-gray-100 text-base"
            onClick={() => scrollToSection('contact')}
          >
            Schedule a Demo
          </Button>
          <Button 
            size="lg" 
            className="border-white text-white hover:bg-white/10 border text-base"
            onClick={() => scrollToSection('contact')}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
