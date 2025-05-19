
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    
    // Close the mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/8c7621e9-b3e2-47d2-b874-95d5d210213c.png" 
                alt="EstateEaze Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-primary-600 font-medium">Features</button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-primary-600 font-medium">Benefits</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary-600 font-medium">Testimonials</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-primary-600 font-medium">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-primary-600 font-medium">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600 font-medium">Contact</button>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button size="sm" onClick={() => scrollToSection('contact')}>Request Demo</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600 font-medium">Features</button>
            <button onClick={() => scrollToSection('benefits')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600 font-medium">Benefits</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600 font-medium">Testimonials</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600 font-medium">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600 font-medium">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600 font-medium">Contact</button>
            <div className="pt-2">
              <Button className="w-full" onClick={() => scrollToSection('contact')}>Request Demo</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
